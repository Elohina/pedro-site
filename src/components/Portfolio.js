import React from "react";

import Debiphone from "../assets/images/portfolio/debiphone.png";
import TheJetManager from "../assets/images/portfolio/thejetmanager.jpg";
import Wuelto from "../assets/images/portfolio/wuelto2.png";
import Bellbanking from "../assets/images/portfolio/bellbanking2.png";
import Bellclick from "../assets/images/portfolio/bellclick.jpg"
import Bellchat from "../assets/images/portfolio/bellchat.png";
import Bellnomina from "../assets/images/portfolio/prestamos_bellnomina3.png";
import Hidromovil1 from "../assets/images/portfolio/hidromovil1.jpg";
import Hidromovil2 from "../assets/images/portfolio/hidromovil2.jpg";

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
          images: [Hidromovil1, Hidromovil2]
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
          images: [Bellnomina]
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
          images: [Bellclick]
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
          images: [Bellbanking]
        },
        {
          id: 'bellchat',
          brief_description: "Telecommunications",
          name: "Bellchat",
          key_words: "Swift",
          description: "Bellchat is a telecommunications app that provides chat connections to the bank executives",
          images: [Bellchat]
        },
        {
          id: 'wuelto',
          brief_description: "Marketplace",
          name: "Wuelto",
          key_words: "Objective-C",
          description: "Wuelto is a marketplace-oriented app that includes more of a social aspect for example including features such as friends and group gifts",
          images: [Wuelto]
        },
        {
          id: 'thejetmanager',
          brief_description: "Flight manager",
          name: "The Jet Manager",
          key_words: "Titanium, Appcelerator",
          description: "The Jet Manager is an app made for flight attendants and administrators to provide some in-flight services and keep track of some of the airplane metrics like fuel consumptions",
          images: [TheJetManager]
        },
        {
          id: 'debiphone',
          brief_description: "Wallet",
          name: "Debiphone",
          key_words: "Titanium, Appcelerator",
          description: "Debiphone is a mobile wallet from which you can make online payments and transfers",
          images: [Debiphone]
        },
      ]
    };

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
    const { works } = this.state;
    return (
      <div>
          <section id="portfolio">
            <div className="row">
              <div className="twelve columns collapsed">
                <div className="portfolio-title">
                  <h2>Check out some of my works</h2>
                </div>
                <div id="portfolio-wrapper" className="">
                  { works.map((element) => (
                    <div className="portfolio-item" key={element.id}>
                      <div className="item-wrap">
                        { element.images.map((image, key) => (
                          <img alt="" className="item-image" src={image} key={key}/>
                        ))}
                        <div className="portfolio-item-meta">
                          <h2>{element.name}</h2>
                          <p>{element.brief_description}</p>
                          <p>{element.description}</p>
                          <p>{element.key_words}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
      </div>
    )
  }

};

export default Portfolio;
