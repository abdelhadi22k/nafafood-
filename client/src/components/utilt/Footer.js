import { Col, Container, Row } from "react-bootstrap";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe">
        <Container className="subscribeContainer ">
          <h3>subscribe to our Newsletter</h3>
          <form>
            <input placeholder="Enter Your Email Address" />
          </form>
          <button> subscribe</button>
        </Container>
      </div>




      <div className="Created">
        <Container>
          <Row>
            <Col md="6" lg="4" className="CreatedContainer">
              <div class="footerinfo">
                <h2>Abdelhadi</h2>
                <p class="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, nobis?
                </p>
                <div class="copryt">
                  Created By <span>Graphberry</span>
                  <div class="">
                    2022 - <span>Bondi Inc</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col md="6" lg="2" className="CreatedContainer">
              <div class="footerlinks">
                <h5 class="text-light">Links</h5>
                <ul class="list-unstyled lh-lg">
                  <li>Home</li>
                  <li>Our Servces</li>
                  <li>portfolio</li>
                  <li>Testimonials</li>
                  <li>Support</li>
                  <li>Terms and Conition</li>
                </ul>
              </div>
            </Col>

            <Col md="6" lg="2" className="CreatedContainer">
              {" "}
              <div class="footerlinks">
                <h5 class="text-light">Links</h5>
                <ul class="list-unstyled lh-lg">
                  <li>Sine in</li>
                  <li>Register</li>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>contact Us</li>
                </ul>
              </div>
            </Col>

            <Col md="6" lg="4" className="CreatedContainer">
              <div class="footercontect">
                <h5 class="text-light"> Contact Us</h5>
                <p class="lh-lg mt-3 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, corporis!
                </p>
                <div>
                  <a
                    class="emailLink"
                    href="#"
                  >
                    graphberry@gmail.com
                  </a>
                  <ul class="d-flex mt-5 list-unstyled gap-3 align-items-center ">
                    <li>
                      <a class="d-block text-light" href="#">
                        <i class="fa-brands fa-facebook fa-lg facebook rounded-circle p-2"></i>
                      </a>
                    </li>{" "}
                    <li>
                      <a class="d-block text-light" href="#">
                        <i class="fa-brands fa-twitter fa-lg twitter rounded-circle p-2"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-block text-light" href="#">
                        <i class="fa-brands fa-linkedin fa-lg linkedin rounded-circle p-2"></i>
                      </a>
                    </li>
                    <li>
                      <a class="d-block text-light" href="#">
                        <i class="fa-brands fa-youtube fa-lg youtube rounded-circle p-2"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
