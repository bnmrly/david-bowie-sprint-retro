import React, { Fragment } from "react";
import "./App.css";

function App() {
  const bowieData = [
    {
      url: "https://happymag.tv/wp-content/uploads/2020/01/dave-featre.jpg",
      title: "Happy",
      keyId: "1jsdgflisdudi78o8uyku",
    },
    {
      url: "https://images.thebrag.com/td/uploads/2017/08/david-bowie-early-768x499.jpg",
      title: "Sad",
      keyId: "2jsdgfmisdudi78o8uyku",
    },
    {
      url: "https://www.davidbowieworld.nl/wp-content/uploads/2019/11/DAVID-BOWIE-TIRED-OF-MY-LIFE-EP.jpg",
      title: "Tired",
      keyId: "3jsdgflisdudi78o8ullku",
    },
    {
      url: "https://www.telegraph.co.uk/content/dam/tv/2017/06/13/david-bowie-twin-peaks_trans_NvBQzQNjv4BqD19gJsrS5dVDZFTjDrjdaMP3SSbqKuTAt_OcINYzAxU.jpg?imwidth=450",
      title: "Anxious",
      keyId: "4jsdgflisdnndi78o8uyku",
    },
    {
      url: "https://uploads4.wikiart.org/00282/images//unnamed.jpg!Portrait.jpg",
      title: "Confused",
      keyId: "88jzdgflisdudi78o8uyku",
    },
    {
      url: "https://www.irishtimes.com/polopoly_fs/1.2931913.1484065196!/image/image.jpg",
      title: "Angry",
      keyId: "88jzdgflisdudi78o8uyku",
    },
    {
      url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/7/13/enhanced/webdr04/anigif_enhanced-buzz-9375-1412701355-31.gif",
      title: "Excited",
      keyId: "5jzdgflisdudi78o8uyku",
    },
    {
      url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/7/12/enhanced/webdr10/anigif_enhanced-buzz-12323-1412700435-12.gif",
      title: "Annoyed",
      keyId: "6jzdgflisdudi78o8uyku",
    },
    {
      url: "https://i.guim.co.uk/img/media/eabb335850da800d98b858bc7117b14dc0dba46e/0_231_4000_2399/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a333003f3918df0f7706a34ce9fc1c3b",
      title: "Menacing",
      keyId: "7sdgblisdudi78o8uyku",
    },
    {
      url: "https://walrus-assets.s3.amazonaws.com/img/ThinkingMan%E2%80%99sBalladeer.jpg",
      title: "Pensive",
      keyId: "8sdgflisdcdi78o8uyku",
    },
    {
      url: "https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:63735?quality=0.8&format=jpg",
      title: "Bad Hair Day",
      keyId: "097sdgblisdudi78o8uyku",
    },
    {
      url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/15/11/david-bowie.jpg?width=990&auto=webp&quality=75",
      title: "Drum and Bass Phase",
      keyId: "79sdgflisdcdi78o8uyku",
    },
  ];

  return (
    <div className="App">
      <div className="app__wrapper">
        <marquee
          className="app__title"
          bgcolor="Green"
          Scrollamount="20"
          behaviour="alternate"
          direction="left"
        >
          {" "}
          Sprint Retro (David Bowie remix)
        </marquee>

        <marquee
          className="app__heading"
          direction="down"
          height="120"
          behavior="alternate"
        >
          <marquee behavior="alternate">
            <span className="neon__yellow">Pick</span>
            <span className="neon__red">Your</span>
            <span className="neon__blue">Bowie</span>
          </marquee>
        </marquee>

        <Fragment>
          <div className="bowie__cards-container">
            <ul className="bowie__cards-list">
              {bowieData.map((item) => {
                return (
                  <div className="bowie__card" key={item.keyId}>
                    <div
                      className="bowie__image-container"
                      style={{
                        backgroundImage: `url(${item.url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div className="card__meta-container">
                      <p className="card__meta-title">{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </Fragment>
      </div>
    </div>
  );
}

export default App;
