import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";
import ScrollableAnchor from "react-scrollable-anchor";

import Debiphone from "../assets/images/portfolio/debiphone.png";
import RoloeGol from "../assets/images/portfolio/roloegol.png";
import TheJetManager from "../assets/images/portfolio/thejetmanager.jpg";
import Wuelto from "../assets/images/portfolio/wuelto2.png";
import Bellbank from "../assets/images/portfolio/bellbanking2.png";
import Hidromovil from "../assets/images/portfolio/hidromovil.png";

import CoffeeModal from "../assets/images/portfolio/modals/m-coffee.jpg";
import ConsoleModal from "../assets/images/portfolio/modals/m-console.jpg";
import JudahModal from "../assets/images/portfolio/modals/m-judah.jpg";
import IntoTheLightModal from "../assets/images/portfolio/modals/m-intothelight.jpg";
import FarmerboyModal from "../assets/images/portfolio/modals/m-farmerboy.jpg";
import RetrocamModal from "../assets/images/portfolio/modals/m-retrocam.jpg";


const Portfolio = (propos) => {
  const works = [
    {
      name: "Debiphone",
      key_words: "",
      description: "",
      url: "",
      image: Debiphone
    },
    {
      name: "Debiphone",
      key_words: "",
      description: "",
      url: "",
      image: TheJetManager
    },
    {
      name: "Debiphone",
      key_words: "",
      description: "",
      url: "",
      image: Wuelto
    },
    {
      name: "Debiphone",
      key_words: "",
      description: "",
      url: "",
      image: Bellbank
    },
    {
      name: "Debiphone",
      key_words: "",
      description: "",
      url: "",
      image: Hidromovil
    }
  ];
  const worksList = works.map((element) => {
    return (
      <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" className="item-image" src={element.image} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{element.name}</h5>
                    <p>{element.key_words}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
    );
  })

  return (
  <ScrollableAnchor id={'portfolio'}>
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>
        <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
          { worksList }
        </div>
      </div>

      <div id="modal-01" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={CoffeeModal}
          alt=""
        />

        <div className="description-box">
          <h4>Debiphone Cup</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag /> Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={ConsoleModal}
          alt=""
        />

        <div className="description-box">
          <h4>RoloeGol</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Web Development
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={JudahModal}
          alt=""
        />

        <div className="description-box">
          <h4>TheJetManager</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={IntoTheLightModal}
          alt=""
        />

        <div className="description-box">
          <h4>Into the Light</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-05" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={FarmerboyModal}
          alt=""
        />

        <div className="description-box">
          <h4>Farmer Boy</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-08" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={RetrocamModal}
          alt=""
        />

        <div className="description-box">
          <h4>Retrocam</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <i className="fa fa-tag" />Webdesign, Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>
    </div>
  </section>
  </ScrollableAnchor>
)
};

export default Portfolio;
