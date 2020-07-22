import Analyitcs from "analytics";
import ga from "@analytics/google-analytics";

//Instantiating Analytics
const analytics = Analyitcs({
  app: "The Health Org. App",
  plugins: [
    ga({
      trackingId: "UA-171083535-1",
    }),
  ],
});

class ViewSDKClient {
  constructor() {
    this.readyPromise = new Promise((resolve) => {
      if (window.AdobeDC) {
        resolve();
      } else {
        /* Wait for Adobe Document Cloud View SDK to be ready */
        document.addEventListener("adobe_dc_view_sdk.ready", () => {
          resolve();
        });
      }
    });
    this.adobeDCView = undefined;
  }

  ready() {
    return this.readyPromise;
  }

  previewFile(divId, viewerConfig, url, fileName) {
    const config = {
      /* Pass your registered client id */
      clientId: "86e1faa2417e462c9a7d5b38db944449",
    };
    if (divId) {
      /* Optional only for Light Box embed mode */
      /* Pass the div id in which PDF should be rendered */
      config.divId = divId;
    }
    /* Initialize the AdobeDC View object */
    this.adobeDCView = new window.AdobeDC.View(config);

    /* Invoke the file preview API on Adobe DC View object */
    const previewFilePromise = this.adobeDCView.previewFile(
      {
        /* Pass information on how to access the file */
        content: {
          /* Location of file where it is hosted */
          location: {
            url: url,
          },
        },
        /* Pass meta data of file */
        metaData: {
          /* file name */
          fileName: fileName,
        },
      },
      viewerConfig
    );

    return previewFilePromise;
  }

  registerSaveApiHandler() {
    /* Define Save API Handler */
    const saveApiHandler = (metaData, content, options) => {
      console.log(metaData, content, options);
      return new Promise((resolve) => {
        /* Dummy implementation of Save API, replace with your business logic */
        setTimeout(() => {
          const response = {
            code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: {
              metaData: Object.assign(metaData, {
                updatedAt: new Date().getTime(),
              }),
            },
          };
          resolve(response);
        }, 2000);
      });
    };

    this.adobeDCView.registerCallback(
      window.AdobeDC.View.Enum.CallbackType.SAVE_API,
      saveApiHandler,
      {}
    );
  }

  registerGetAPIHandler(divId, viewerConfig, url, fileName) {
    /* Define Get APIs Handler */
    const cursor_type = "text";
    this.previewFile(divId, viewerConfig, url, fileName).then((adobeViewer) => {
      adobeViewer.getAPIs().then((apis) => {
        /* Implementation of the Getting Metadata API */
        apis
          .getPDFMetadata()
          .then((result) => console.log(result))
          .catch((error) => console.log(error));

        apis
          .setCursor(cursor_type)
          .then(() => console.log("Success"))
          .catch((err) => console.log(err));
      });
    });
  }

  registerEventsHandler() {
    /* Register the callback to receive the events */

    this.adobeDCView.registerCallback(
      /* Type of call back */
      window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
      /* call back function */
      (event) => {
        switch (event.type) {
          case "DOCUMENT_OPEN":
            analytics.track("DOCUMENT_OPEN", {
              category: `$ Open ${event.data.fileName}`,
              type: "event",
            });
          case "PAGE_VIEW":
            analytics.track("PAGE_VIEW", {
              category: `$ Viewing Page at ${event.data.pageNumber}`,
              type: "event",
            });
          case "DOCUMENT_DOWNLOAD":
            analytics.track("DOCUMENT_DOWNLOAD", {
              category: `$ Download  ${event.data.fileName}`,
              type: "event",
            });
          case "TEXT_COPY":
            analytics.track("TEXT_COPY", {
              category: `$ Copied : ${event.data.copiedText}`,
              type: "event",
            });
          default:
            console.log("Events are Being Tracked");
        }
      },
      { enablePDFAnalytics: true }
    );
  }
}

export default ViewSDKClient;
