import React, { Component } from "react";
import ViewSDKClient from "../config/sdkClient";

class PdfViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInlined: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = () => {
    this.setState({
      isInlined: !this.state.isInlined,
    });
    if (this.state.isInlined) {
      const viewSDKClient = new ViewSDKClient();
      viewSDKClient.ready().then(() => {
        viewSDKClient.registerGetAPIHandler(
          "pdf-div",
          {
            embedMode: "IN_LINE",
          },
          this.props.url,
          this.props.fileName
        );
        viewSDKClient.registerEventsHandler();
      });
    } else {
      const viewSDKClient = new ViewSDKClient();
      viewSDKClient.ready().then(() => {
        viewSDKClient.registerGetAPIHandler(
          "pdf-div",
          {},
          this.props.url,
          this.props.fileName
        );
        viewSDKClient.registerEventsHandler();
      });
    }
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            The Health Org.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item noHover dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Change View
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={this.handleOnClick}
                  >
                    In-Line / Full Window
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default PdfViewer;
