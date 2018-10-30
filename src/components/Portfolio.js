import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";
import ScrollableAnchor from "react-scrollable-anchor";
import Modal from "react-modal";

import Debiphone from "../assets/images/portfolio/debiphone.png";
import TheJetManager from "../assets/images/portfolio/thejetmanager.jpg";
import Wuelto from "../assets/images/portfolio/wuelto2.png";
import Bellbanking from "../assets/images/portfolio/bellbanking2.png";
import Bellclick from "../assets/images/portfolio/bellclick.jpg"
import Bellchat from "../assets/images/portfolio/bellchat.png";
import Bellnomina from "../assets/images/portfolio/prestamos_bellnomina3.png";
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
          id: 'hidromovil',
          brief_description: "Water service management",
          name: "Hidromóvil",
          key_words: "React Native",
          description: "Hidromóvil is an app to see and pay your water consumption contracts",
          iosUrl: "https://itunes.apple.com/gb/app/hidrom%C3%B3vil/id1294019966?mt=8",
          androidUrl: "https://play.google.com/store/apps/details?id=es.inorca.hidromovil",
          url: "https://itunes.apple.com/gb/app/hidrom%C3%B3vil/id1294019966?mt=8",
          image: Hidromovil
        },
        {
          id: 'bellnomina',
          brief_description: "Internet banking",
          name: "Préstamos Bellnomina",
          key_words: "React Native",
          description: "Préstamos Bellnomina is an app to easily request loans from the bank",
          iosUrl: "https://itunes.apple.com/us/app/pr%C3%A9stamos-bellnomina/id1305914525?mt=8",
          androidUrl: "https://play.google.com/store/apps/details?id=com.bellbank.bellnomina",
          url: "https://itunes.apple.com/us/app/pr%C3%A9stamos-bellnomina/id1305914525?mt=8",
          image: Bellnomina
        },
        {
          id: 'bellclick',
          brief_description: "Telecommunications",
          name: "Bellclick",
          key_words: "Objective-C",
          description: "Bellclick is a telecommunications app that provides voice and video connections to the bank executives",
          iosUrl: "https://itunes.apple.com/us/app/bellclick/id1110464795?mt=8",
          androidUrl: "https://play.google.com/store/apps/details?id=com.bellclick",
          url: "https://itunes.apple.com/us/app/bellclick/id1110464795?mt=8",
          image: Bellclick
        },
        {
          id: 'bellbank',
          brief_description: "Internet banking",
          name: "Bellbanking",
          key_words: "Objective-C, Swift, React Native",
          description: "Bellbanking is the internet banking app of Bellbank",
          iosUrl: "https://itunes.apple.com/us/app/bellbanking/id1135864593?mt=8",
          androidUrl: "https://play.google.com/store/apps/details?id=com.bellbank.bellbanking",
          url: "https://itunes.apple.com/us/app/bellbanking/id1135864593?mt=8",
          image: Bellbanking
        },
        {
          id: 'bellchat',
          brief_description: "Telecommunications",
          name: "Bellchat",
          key_words: "Swift",
          description: "Bellchat is a telecommunications app that provides chat connections to the bank executives",
          image: Bellchat
        },
        {
          id: 'wuelto',
          brief_description: "Marketplace",
          name: "Wuelto",
          key_words: "Objective-C",
          description: "Wuelto is a marketplace-oriented app that includes more of a social aspect for example including features such as friends and group gifts",
          image: Wuelto
        },
        {
          id: 'thejetmanager',
          brief_description: "Flight manager",
          name: "The Jet Manager",
          key_words: "Titanium, Appcelerator",
          description: "The Jet Manager is an app made for flight attendants and administrators to provide some in-flight services and keep track of some of the airplane metrics like fuel consumptions",
          image: TheJetManager
        },
        {
          id: 'debiphone',
          brief_description: "Wallet",
          name: "Debiphone",
          key_words: "Titanium, Appcelerator",
          description: "Debiphone is a mobile wallet from which you can make online payments and transfers",
          image: Debiphone
        },
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
              {currentModal.url &&
                <a href={currentModal.url} target="_blank" rel="noopener">Details</a>
              }
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
