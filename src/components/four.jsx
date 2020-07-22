import React, { Component } from "react";

import ViewSDKClient from "../config/sdkClient";
import PdfViewer from "./PdfViewer";
/**
 *
 * https://www.nlm.nih.gov/dr2/CEFIS_COVID_questionnaire_English_42220_final.pdf
 * https://www.nlm.nih.gov/dr2/Psychological_Stress_Associated_with_the_COVID-19_Crisis_14.pdf
 * https://www.nlm.nih.gov/dr2/COVID-19_IMPACT_HRQOL_QUESTIONNAIRE_FINAL.pdf
 * https://www.nlm.nih.gov/dr2/COVID_Impact_on_Health_Wellbeing_Eng.pdf
 */
class Four extends Component {
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
        "https://cors-anywhere.herokuapp.com/https://www.nlm.nih.gov/dr2/COVID_Impact_on_Health_Wellbeing_Eng.pdf",
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
            url="https://cors-anywhere.herokuapp.com/https://www.nlm.nih.gov/dr2/COVID_Impact_on_Health_Wellbeing_Eng.pdf"
            fileName="Impact on Health Well Being.pdf"
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

export default Four;
