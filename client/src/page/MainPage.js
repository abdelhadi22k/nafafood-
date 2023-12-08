import React from "react";
import { Container, Image } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "../styles/main.css";

const MainPage = () => {
  return (
    <section id="mainPage">
      <Helmet>
        <title>Home</title>
      </Helmet> 
      <Container>
        <div className="section1">
          <div className="mainPageinfo">
            <h1>
              Restaurant <span>Nava </span> to provide and deliver foods
            </h1>
            <p>
              Nava Restaurant for providing and delivering foods of all kinds,
              as well as cooking and cooking according to demand Nava Restaurant
              for providing
            </p>
          </div>

          <div className="mainPageform">
            <div className="formmain">
              <div className="formIcon">
                <div>
                  <i className="fa-regular fa-user"></i>
                </div>
                <p>Sign in now and do your Order</p>
              </div>

              <div className="formButton">Sign in</div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="section2">
          <div className="mainPageinfo">
            <h1>Multinational restaurant</h1>
            <p>
              Nava Restaurant for providing and delivering foods of all kinds,
              as well as cooking and cooking according to demand Nava Restaurant
              for providing
            </p>
          </div>

          <div className="section2Img">
            <img src="img/section2.png" alt="" />
          </div>
        </div>
      </Container>

      <Container>
        <div className="section3" id="section3">
          <div className="servicesInfo">
            <div className="servicesTites">
              <h2>An introduction to us and our services</h2>
              <p>
                Nava Restaurant for providing and delivering foods of all kinds,
                as well as cooking and cooking according to demand Nava
                Restaurant for providing
              </p>
            </div>
            <div className="servicesDitels">
              <div className="servicesBox">
                <div className="titls">
                  <div className="servicesNum">1</div>
                  <span>Delicious and varied dishes</span>
                </div>
                <p>
                  Nava Restaurant for providing and delivering foods of all
                  kinds, as well as cooking Nava Restaurant for providing and
                  delivering foods of all kinds, as well as cooking
                </p>
              </div>
              <div className="servicesBox">
                <div className="titls">
                  <div className="servicesNum">1</div>
                  <span>Delicious and varied dishes</span>
                </div>
                <p>
                  Nava Restaurant for providing and delivering foods of all
                  kinds, as well as cooking Nava Restaurant for providing and
                  delivering foods of all kinds, as well as cooking
                </p>
              </div>
              <div className="servicesBox">
                <div className="titls">
                  <div className="servicesNum">1</div>
                  <span>Delicious and varied dishes</span>
                </div>
                <p>
                  Nava Restaurant for providing and delivering foods of all
                  kinds, as well as cooking Nava Restaurant for providing and
                  delivering foods of all kinds, as well as cooking
                </p>
              </div>
            </div>
          </div>

          <div className="servicesImeg">
            <Image src="img/servicesImg.png" fluid />
          </div>
        </div>
      </Container>

      <Container>
        <div className="section4">
          <div className="sectionMainInfo">
            <h2>Quick and effective action plan</h2>
            <p>
              Nava Restaurant for providing and delivering foods of all kinds,
              as well as cooking and cooking according to demand Nava Restaurant
              for providing
            </p>
          </div>

          <div className="planHolder">
            <div className="planBox">
              <div className="planIcon">
                <i className="fa-solid fa-mobile"></i>
              </div>

              <div className="planInfo">
                <span>Order quickly in the app or by phone</span>
                <p>
                  Nava Restaurant for providing and delivering foods of all
                  kinds, as well as cooking Nava Restaurant for providing and
                  delivering foods of all kinds, as well as cooking
                </p>
              </div>
            </div>

            <div className="planBox">
              <div className="planIcon">
                <i className="fa-solid fa-truck"></i>
              </div>

              <div className="planInfo">
                <span>Fast and free delivery</span>
                <p>
                  Nava Restaurant for providing and delivering foods of all
                  kinds, as well as cooking Nava Restaurant for providing and
                  delivering foods of all kinds, as well as cooking
                </p>
              </div>
            </div>

            <div className="planBox">
              <div className="planIcon">
                <i className="fa-solid fa-credit-card"></i>
              </div>

              <div className="planInfo">
                <span>Fast and varied payment methods</span>
                <p>
                  Nava Restaurant for providing and delivering foods of all
                  kinds, as well as cooking Nava Restaurant for providing and
                  delivering foods of all kinds, as well as cooking
                </p>
              </div>
            </div>
          </div>
          <p>
            Nava Restaurant for providing and delivering foods of all kinds, as
            well as cooking Nava Restaurant for providing and delivering foods
            of all kinds, as well as cooking
          </p>
        </div>
      </Container>

      <Container>
        <div className="section5">
          <div className="sectionMainInfo">
            <h2>Things we are proud of</h2>
            <p>
              Nava Restaurant for providing and delivering foods of all kinds,
              as well as cooking and cooking according to demand Nava Restaurant
              for providing
            </p>
          </div>

          <div className="section5Imge">
            <img src="img/section5.png" alt="section5Imge" />
          </div>

          <div className="section5Info">
            <div>8+ years experience</div>
            <div>More than 50 branches around the world</div>
            <div>Honorable international ratings</div>
            <div>Awards and winning international competitions</div>
          </div>
        </div>
      </Container>

      <Container className="section6Pernt">
        <div className="section6" id="section6">
          <div className="section6Info">
            <div className="section6titls">
              <h2>
                Stay at home and we will ensure that your food is delivered to
                you
              </h2>
              <p>
                Nava Restaurant for providing and delivering foods of all kinds,
                as well as cooking and cooking
              </p>

              <div className="appInfo">
                <h5>Use our app</h5>
                <p>
                  Nava Restaurant for providing and delivering foods of all
                  kinds, as well as cooking Nava Restaurant for providing and
                  delivering foods
                </p>
              </div>

              <div className="appDownload">
                <h5>Download the application</h5>

                <div className="appDownloadQr">
                  <div className="appDownloadBox">
                    <div>
                      <i className="fa-brands fa-google-play"></i>
                      <span>Play Store</span>
                    </div>

                    <div>
                      <i className="fa-brands fa-app-store"></i>
                      <span>App Store </span>
                    </div>
                  </div>

                  <div className="qr">
                    <i className="fa-solid fa-qrcode"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section6Imeg">
            <img src="img/phone.png" alt="phone" />
          </div>
        </div>
      </Container>

      <Container>
        <div className="section7">
          <div className="sectionMainInfo">
            <h2>Fresh and healthy resources </h2>
            <p>
              Nava Restaurant for providing and delivering foods of all kinds,
              as well as cooking and cooking according to demand Nava Restaurant
              for providing
            </p>
          </div>

          <div className="section7Holder">
            <div className="section7Box">
              <div className="section7Img">
                <img src="img/section7img1.png" alt="" />
              </div>
              <div className="section7Info">
                <span>Professional kitchens</span>
                <p>
                  for providing and delivering foods of all kinds, as well as
                  cooking Nava Restaurant for providing and delivering foods of
                  all kinds, as well as cooking
                </p>

                <ul>
                  <li>1- Al-Alsun Services</li>
                  <li>2- interpreter translator</li>
                  <li>3- Online free to help you</li>
                </ul>
              </div>
            </div>

            <div className="section7Box">
              <div className="section7Info">
                <span>High quality products</span>
                <p>
                  for providing and delivering foods of all kinds, as well as
                  cooking Nava Restaurant for providing and delivering foods of
                  all kinds, as well as cooking
                </p>

                <ul>
                  <li>1- Al-Alsun Services</li>
                  <li>2- interpreter translator</li>
                  <li>3- Online free to help you</li>
                </ul>
              </div>
              <div className="section7Img">
                <img src="img/section7img2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPage;
