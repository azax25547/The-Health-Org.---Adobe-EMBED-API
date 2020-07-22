import React, { Component } from "react";

import ViewSDKClient from "../config/sdkClient";
import PdfViewer from "./PdfViewer";

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInlined: false,
    };
  }

  componentDidMount() {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      viewSDKClient.registerGetAPIHandler(
        "pdf-div",
        {
          embedMode: "IN_LINE",
        },
        "https://cors-anywhere.herokuapp.com/https://www.nlm.nih.gov/dr2/Fear_of_Covid-19_Scale_2020.pdf",
        "HouseHold Survey.pdf"
      );
      viewSDKClient.registerEventsHandler();
    });
  }

  render() {
    return (
      <>
        <section>
          <PdfViewer
            url="https://cors-anywhere.herokuapp.com/https://www.nlm.nih.gov/dr2/Fear_of_Covid-19_Scale_2020.pdf"
            fileName="Fear of Covid-19 Scale.pdf"
          />
        </section>
        <div className="in-line-container">
          <div
            id="pdf-div"
            className={this.state.isInlined ? "full-window-div" : "in-line-div"}
          />
        </div>
      </>
    );
  }
}

export default One;
