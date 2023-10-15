import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import { EffectCoverflow, Pagination } from "swiper/modules";

function Games() {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    const gameSlugs = [
      "halo-the-master-chief-collection",
      "middle-earth-shadow-of-war",
      "hogwarts-legacy",
      "star-wars-jedi-survivor",
      "the-legend-of-zelda-breath-of-the-wild",
      "high-on-life",
      "assassins-creed-valhalla"
    ];
    const baseURL = "https://rawg.io/api/games";

    Promise.all(
      gameSlugs.map((slug) =>
        fetch(`${baseURL}/${slug}?key=3805c01271664c5a8cf87bad9405ece5`).then(
          (response) => response.json()
        )
      )
    )
      .then((gameData) => {
        setGames(gameData);
        console.log(games[1]["background_image"]);
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
      });
  }, []);

  return (
    <>
      <div className="gameContainer">
        <h2>Games</h2>
        {/* <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth:100,
            modifier: 2.5,
          }}
          pagination={{el:'.swiper-pagination', clickable:true}}
          modules={[EffectCoverflow, Pagination]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img className="gameImg" src={games[0]["background_image"]} alt="" />
            <p className="gameText">{games[0]["name"]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="gameImg" src={games[1]["background_image"]} alt="" />
            <p className="gameText">{games[1]["name"]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="gameImg" src={games[2]["background_image"]} alt="" />
            <p className="gameText">{games[2]["name"]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="gameImg" src={games[3]["background_image"]} alt="" />
            <p className="gameText">{games[3]["name"]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="gameImg" src={games[4]["background_image"]} alt="" />
            <p className="gameText">{games[4]["name"]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="gameImg" src={games[5]["background_image"]} alt="" />
            <p className="gameText">{games[5]["name"]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="gameImg" src={games[6]["background_image"]} alt="" />
            <p className="gameText">{games[6]["name"]}</p>
          </SwiperSlide>
          <br />
          <div className="slider-controler">
            <div className="swiper-pagination" id="sliderPosition"></div>
          </div>
        </Swiper>
      </div>
      <div className="gameParagraph">
        <p>Games hold a special place in my heart. They have served to inspire me and drive my imagination both personally and professionally. As a kid, they brought everyone in our neighborhood together regardless of who they were or if we even ran in the same friend groups. From playing Paper Boy and the original Super Mario Bros with my dad to our weekly game night playing Halo with my dad, brothers, and brother-in-laws, games have been indelibly tied to family time and keeping us together even when we were living in other parts or the world. Because of that, I wanted to showcase a few of my all-time favorites as well some that are currently on my docket. To do this, I used the <strong><a href="https://rawg.io/apidocs">rawg.io API</a></strong> to pull in the various game information, which is the same API I used to create my game hub web app. </p> */}
      </div>
    </>
  );
}

export default Games;
