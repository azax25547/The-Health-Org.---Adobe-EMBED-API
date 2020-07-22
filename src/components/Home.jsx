import React, { Component } from "react";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                The Health Org.
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>

                  <li className="nav-item noHover">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <header className="masthead">
            <div className="container h-100"></div>
          </header>
          <section className="mt-5">
            <div className="container">
              <h2 className="font-weight-light">
                Let's Fight with this Pandemic Together
              </h2>
              <p>
                THe Health organisation is commissioned to survey of recent
                pandemic of <strong>Covid-19</strong> to find out about the
                impact of this pandemic on peoples from all ages. The main
                purpose of the study was to better understand how we are safe
                from home are expected in the near future rcovery and start the
                dailt life as it was before.
              </p>
              <p>
                The purpose of this survey is to gather information on the
                prevalence of coronavirus disease (COVID-19) symptoms and social
                distancing behavior from the general U.S. population. The
                results from this survey will only be used for academic research
                in order to help public health specialists and policymakers
                recommend effective measures over the coming days.
              </p>
              <p>
                Every two weeks, we are running our own member survey, which
                provides our members with the opportunity to share their
                experiences of many aspects relating to the COVID-19 response
                locally, including on issues such as Personal Protective
                Equipment (PPE), testing and workforce. Results from our member
                surveys
              </p>
              <ul>
                <li>
                  June News story: Mental health units facing 'care home style
                  crisis' without better protection from COVID-19
                </li>
                <li> Summary of first COVID-19 member survey </li>
              </ul>
              <p>
                Below are the details how we are getting data for the Survey's.
                You can check them out.
              </p>
            </div>
          </section>
        </div>

        <div className=" ml-5">
          <div className="container">
            <div className="row my-5 p-3 ">
              <div className="col-md-4-offset">
                <img
                  alt="Bootstrap Image Preview"
                  src="https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="img-thumbnail"
                  height="250"
                  width="250"
                />
              </div>
              <div className="col-md-8 ml-2 mt-2">
                <h2> Fear of COVID-19 Scale </h2>
                <br />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis laudantium, doloribus impedit esse eius, non,
                  nostrum est corporis facere nihil quae.
                </p>
                <p>
                  <a className="btn" href="/survey-one" target="_blank">
                    View details »
                  </a>
                </p>
              </div>
            </div>
            <div className="row my-5 p-3">
              <div className="col-md-4-offset">
                <img
                  alt="Bootstrap Image Preview"
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="img-thumbnail"
                  height="250"
                  width="250"
                />
              </div>
              <div className="col-md-8 ml-2 mt-2">
                <h2>House Hold Pulse Survey</h2>
                <br />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iure, laboriosam. Dicta aperiam, sed inventore aliquam
                  incidunt provident pariatur atque tempore sit. Ad?
                </p>
                <p>
                  <a className="btn" href="/survey-two" target="_blank">
                    View details »
                  </a>
                </p>
              </div>
            </div>
            <div className="row my-5 p-3">
              <div className="col-md-4-offset">
                <img
                  alt="Bootstrap Image Preview"
                  src="https://images.pexels.com/photos/159519/back-to-school-paper-colored-paper-stationery-159519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="img-thumbnail"
                  height="250"
                  width="250"
                />
              </div>
              <div className="col-md-8 ml-2 mt-2">
                <h2>Psychological Stress Associated with Covid-19</h2>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quibusdam in ducimus deserunt vel, voluptatem aliquid quas
                  iusto quos?
                </p>
                <p>
                  <a className="btn" href="/survey-three" target="_blank">
                    View details »
                  </a>
                </p>
              </div>
            </div>
            <div className="row my-5 p-3">
              <div className="col-md-4-offset">
                <img
                  alt="Bootstrap Image Preview"
                  src="https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="img-thumbnail"
                  height="250"
                  width="250"
                />
              </div>
              <div className="col-md-8 ml-2 mt-2">
                <h2>Impact on Health Well-Being</h2>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi accusantium sapiente fugiat cum aliquid omnis,
                  adipisci neque harum tempora, dignissimos velit nam
                  reprehenderit eveniet illum mollitia placeat obcaecati, quo
                  officia culpa maxime repellat. Nostrum sequi amet ducimus
                  tempore ullam? Eius incidunt quo est alias in iste perferendis
                  repellat pariatur, libero vitae dolorem dignissimos officiis
                  et nulla modi ullam nostrum delectus! Nihil optio sunt iure
                  vitae rem incidunt tenetur id reprehenderit velit blanditiis
                  amet voluptatibus aliquam, vel eaque debitis aspernatur
                  doloremque, delectus sed aliquid dolorum repellat? Facere
                  necessitatibus nulla amet cum, quisquam ipsam et perferendis
                  pariatur, beatae, laudantium cupiditate inventore. Cum.
                </p>
                <p>
                  <a className="btn" href="/survey-four" target="_blank">
                    View details »
                  </a>
                </p>
              </div>
            </div>
            <div className="row my-5 p-3">
              <div className="col-md-4-offset">
                <img
                  alt="Bootstrap Image Preview"
                  src="https://images.pexels.com/photos/4261261/pexels-photo-4261261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="img-thumbnail"
                  height="250"
                  width="250"
                />
              </div>
              <div className="col-md-8 ml-2 mt-2">
                <h2>Impact of the Pandemic in Cancer patients and Survivors</h2>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque hic similique expedita reprehenderit ab cupiditate
                  architecto exercitationem assumenda perspiciatis deserunt qui
                  animi maxime suscipit officia, beatae unde velit recusandae
                  possimus voluptatem sapiente obcaecati dolorem rerum. Facere
                  mollitia explicabo tempore numquam maxime autem veniam eum
                  dolorum, ad voluptates recusandae minima ea blanditiis dicta
                  repudiandae. Animi libero praesentium, quidem, expedita
                  laboriosam a accusantium officiis vitae ab ea nisi! Maxime nam
                  magnam asperiores officiis suscipit eius error dolores quaerat
                  provident debitis sed itaque repellendus, placeat eveniet
                  dolorum hic voluptates! Odio repellendus quas, provident modi
                  quia, facilis expedita deleniti perspiciatis porro possimus
                  placeat nesciunt.
                </p>
                <p>
                  <a className="btn" href="/survey-five" target="_blank">
                    View details »
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-style" />
        <br />
        <footer>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 footer-about wow fadeInUp">
                  <h3>The Health Org.</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veritatis, id!.
                  </p>
                  <p>
                    <a href="#">Our Team</a>
                  </p>
                </div>
                <div className="col-md-4 offset-md-1 footer-contact wow fadeInDown">
                  <h3>Contact</h3>
                  <p>
                    <i className="fa fa-map-marker-alt" /> Via Rossini 10, 10136
                    Turin Italy
                  </p>
                  <p>
                    <i className="fa fa-phone" /> Phone: (0039) 333 12 68 347
                  </p>
                  <p>
                    <i className="fa fa-envelope" /> Email:{" "}
                    <a href="mailto:hello@domain.com">hello@domain.com</a>
                  </p>
                  <p>
                    <i className="fa fa-skype" /> Skype: you_online
                  </p>
                </div>
                <div className="col-md-4 footer-links wow fadeInUp">
                  <div className="row">
                    <div className="col">
                      <h3>Links</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <a className="scroll-link" href="#top-content">
                          Home
                        </a>
                      </p>

                      <p>
                        <a href="#">How it works</a>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <a href="#">Affiliates</a>
                      </p>
                      <p>
                        <a href="#">Terms</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;
