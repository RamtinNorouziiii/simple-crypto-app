import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.css'
import {
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHome,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
export const Footer = () => {
  return (
    <footer class="text-center text-lg-start  text-warning" id="id1" >
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" class="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="" class="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          <a href="" class="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="" class="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="" class="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="" class="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" class="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Laravel
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" class="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-3" />
                Iran , Tehran
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
               Ramtinnorouziiii@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" />+ 01 234 567
                88
              </p>
              <p>
                <FontAwesomeIcon icon={faPrint} className="me-3" />+ 01 234 567
                89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center p-4">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="http://localhost:3000/">  
         Binance
        </a>
      </div>
    </footer>
  );
};
