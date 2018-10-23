import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";
import ScrollableAnchor from "react-scrollable-anchor";
import Modal from "react-modal";

import Debiphone from "../assets/images/portfolio/debiphone.png";
import TheJetManager from "../assets/images/portfolio/thejetmanager.jpg";
import Wuelto from "../assets/images/portfolio/wuelto2.png";
import Bellbank from "../assets/images/portfolio/bellbanking2.png";
import Hidromovil from "../assets/images/portfolio/hidromovil.png";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)'
  }
};

class Portfolio extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currentModal: null,
      isOpen: false,
      works: [
        {
          id: 'debiphone',
          brief_description: "",
          name: "Debiphone",
          key_words: "",
          description: "",
          url: "",
          image: Debiphone
        },
        {
          id: 'thejetmanager',
          brief_description: "",
          name: "The Jet Manager",
          key_words: "",
          description: "",
          url: "",
          image: TheJetManager
        },
        {
          id: 'wuelto',
          brief_description: "",
          name: "Wuelto",
          key_words: "",
          description: "",
          url: "",
          image: Wuelto
        },
        {
          id: 'bellbank',
          brief_description: "",
          name: "Bellbank Mobile Apps",
          key_words: "",
          description: "",
          url: "",
          image: Bellbank
        },
        {
          id: 'hidromovil',
          brief_description: "",
          name: "Hidromovil",
          key_words: "",
          description: "",
          url: "",
          image: Hidromovil
        }
      ]
    };

  }

  getWorks() {
    const works = this.state.works;
    return works.map((element) => {
      return (
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a title="" onClick={this.toggleModal(element)}>
              <img alt="" className="item-image" src={element.image} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{element.name}</h5>
                  <p>{element.brief_description}</p>
                </div>
              </div>
              <div className="link-icon">
                <FaPlus />
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  toggleModal = key => event => {
    event.preventDefault();
    if (this.state.currentModal) {
      this.handleModalCloseRequest();
      return;
    }

    this.setState({
      ...this.state,
      currentModal: key,
      isOpen: true
    });
  }

  handleModalCloseRequest = () => {
    this.setState({
      ...this.state,
      currentModal: null,
      isOpen: false
    });
  }

  render() {
    const worksList = this.getWorks();
    const {isOpen, currentModal} = this.state;
    let modal;
    if (currentModal) {
      modal = <Modal
        ref={currentModal.id}
        id={currentModal.id}
        style={customStyles}
        closeTimeoutMS={150}
        contentLabel={currentModal.name}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}>
          <div id={'#'+currentModal.id} className="popup-modal">
            <img
              src={currentModal.image}
              alt=""
            />

            <div className="description-box">
              <h4>{currentModal.name}</h4>
              <p>
                {currentModal.description}
              </p>
              <span className="categories">
                <FaTag /> {currentModal.key_words}
              </span>
            </div>
            <div className="link-box">
              <a href={currentModal.url}>Details</a>
              <a onClick={this.handleModalCloseRequest}>Close</a>
            </div>
          </div>
      </Modal>;
    }
    return (
      <div>
        <ScrollableAnchor id={'portfolio'}>
          <section id="portfolio">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works.</h1>
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                  { worksList }
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
        { modal }
      </div>
    )
  }

};

export default Portfolio;
