import React from "react";

import { ReactNativeSVG } from "./SVGIcons";

import Debiphone from "../assets/images/portfolio/debiphone.png";
import TheJetManager from "../assets/images/portfolio/thejetmanager.jpg";
import Wuelto from "../assets/images/portfolio/wuelto2.png";
import Bellbanking1 from "../assets/images/portfolio/bellbanking1.jpeg";
import Bellbanking2 from "../assets/images/portfolio/bellbanking2.jpeg";
import Bellbanking3 from "../assets/images/portfolio/bellbanking3.jpeg";
import Bellclick1 from "../assets/images/portfolio/bellclick1.jpg"
import Bellclick2 from "../assets/images/portfolio/bellclick2.jpg"
import Bellclick3 from "../assets/images/portfolio/bellclick3.jpg"
import Bellchat from "../assets/images/portfolio/bellchat.png";
import Bellnomina1 from "../assets/images/portfolio/bellnomina1.jpeg";
import Bellnomina2 from "../assets/images/portfolio/bellnomina2.jpeg";
import Hidromovil1 from "../assets/images/portfolio/hidromovil1.jpg";
import Hidromovil2 from "../assets/images/portfolio/hidromovil2.jpg";

import Collapsible from "./Collapsible";

class Portfolio extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
      showItemsNumber: 3,
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
          images: [Hidromovil1, Hidromovil2],
          tech_icons: [<ReactNativeSVG />],
          logo_version: false
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
          images: [Bellnomina1, Bellnomina2],
          tech_icons: [<ReactNativeSVG />],
          logo_version: false
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
          images: [Bellbanking1, Bellbanking2, Bellbanking3],
          logo_version: false
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
          images: [Bellclick1, Bellclick2, Bellclick3],
          logo_version: false
        },
        {
          id: 'bellchat',
          brief_description: "Telecommunications",
          name: "Bellchat",
          key_words: "Swift",
          description: "Bellchat is a telecommunications app that provides chat connections to the bank executives",
          images: [Bellchat],
          logo_version: true
        },
        {
          id: 'wuelto',
          brief_description: "Marketplace",
          name: "Wuelto",
          key_words: "Objective-C",
          description: "Wuelto is a marketplace-oriented app that includes more of a social aspect for example including features such as friends and group gifts",
          images: [Wuelto],
          logo_version: true
        },
        {
          id: 'thejetmanager',
          brief_description: "Flight manager",
          name: "The Jet Manager",
          key_words: "Titanium, Appcelerator",
          description: "The Jet Manager is an app made for flight attendants and administrators to provide some in-flight services and keep track of some of the airplane metrics like fuel consumptions",
          images: [TheJetManager],
          logo_version: true
        },
        {
          id: 'debiphone',
          brief_description: "Wallet",
          name: "Debiphone",
          key_words: "Titanium, Appcelerator",
          description: "Debiphone is a mobile wallet from which you can make online payments and transfers",
          images: [Debiphone],
          logo_version: true
        },
      ]
    };

  }

  handleSeeMoreJobs = () => {
    const { isOpen, works } = this.state;
    this.setState({
      isOpen: !isOpen,
      showItemsNumber: !isOpen ? works.length : 3
    });
  }

  render() {
    const { works, isOpen, showItemsNumber } = this.state;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <div className="portfolio-title">
              <h2>Check out some of my works</h2>
            </div>
            <div id="portfolio-wrapper" className={isOpen && "section-collapsible"}>
              { works.map((element, key) => (
                <div className="portfolio-item" key={element.id}>
                  {key < showItemsNumber &&
                    <div className="item-wrap">
                      { element.images
                        .map(
                          (image, key) => (
                            <img
                              alt={`Screenshot of ${element.name} app`}
                              className={`item-image ${element.logo_version ? 'item-logo-version' : ''}`}
                              src={image}
                              key={key}/>
                          )
                        )
                      }
                      <div className="portfolio-item-meta">
                        <h2>{element.name}</h2>
                        <p>{element.brief_description}</p>
                        <p>{element.description}</p>
                        <div className="portfolio-item-techs">
                          {element.tech_icons && element.tech_icons[0]}
                        </div>
                      </div>
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
        <Collapsible onClick={this.handleSeeMoreJobs} isOpen={isOpen}/>
      </section>
    )
  }
};

export default Portfolio;
