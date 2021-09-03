import React, { Fragment } from "react";
import "./App.css";

function App() {
  const bowieData = [
    {
      url: "https://happymag.tv/wp-content/uploads/2020/01/dave-featre.jpg",
      title: "Happy",
      keyId: "jsdgflisdudi78o8uyku",
    },
    {
      url: "https://images.thebrag.com/td/uploads/2017/08/david-bowie-early-768x499.jpg",
      title: "Sad",
      keyId: "jsdgfmisdudi78o8uyku",
    },
    {
      url: "https://www.davidbowieworld.nl/wp-content/uploads/2019/11/DAVID-BOWIE-TIRED-OF-MY-LIFE-EP.jpg",
      title: "Tired",
      keyId: "jsdgflisdudi78o8ullku",
    },
    {
      url: "https://www.telegraph.co.uk/content/dam/tv/2017/06/13/david-bowie-twin-peaks_trans_NvBQzQNjv4BqD19gJsrS5dVDZFTjDrjdaMP3SSbqKuTAt_OcINYzAxU.jpg?imwidth=450",
      title: "Confused",
      keyId: "jsdgflisdnndi78o8uyku",
    },
    {
      url: "https://www.gannett-cdn.com/-mm-/a624164c6135ff8b124c5dd7670eeb6481c911ca/c=0-98-979-651/local/-/media/2015/07/20/Rochester/Rochester/635730005445868132-David-Bowie-mugshot.jpg?auto=webp&format=pjpg&width=1200",
      title: "Rebellious",
      keyId: "jzdgflisdudi78o8uyku",
    },
    { url: "https://via.placeholder.com/150", title: "Ecstatic" },
    {
      url: "https://i.guim.co.uk/img/media/eabb335850da800d98b858bc7117b14dc0dba46e/0_231_4000_2399/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a333003f3918df0f7706a34ce9fc1c3b",
      title: "Menacing",
      keyId: "jsdgblisdudi78o8uyku",
    },
    {
      url: "https://walrus-assets.s3.amazonaws.com/img/ThinkingMan%E2%80%99sBalladeer.jpg",
      title: "Pensive",
      keyId: "jsdgflisdcdi78o8uyku",
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
          behavior="scroll"
          direction="down"
          Scrollamount="10"
        >
          Pick your Bowie
        </marquee>
        <Fragment>
          <div className="bowie__cards-container">
            <ul className="bowie__cards-list">
              {bowieData.map((item) => {
                console.log("item", item.url);

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
                    >
                      {/* <img src={item.url} /> */}
                    </div>
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
