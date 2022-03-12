import React, { useEffect } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import Aos from "aos";
import "aos/dist/aos.css";

// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Slider() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{ delay: 7000 }}
        slidesPerView={1}
        spaceBetween={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="showcase_container_one showcase">
            <div className="showcase_text_one">
              <h1 data-aos="fade-down" style={{ zIndex: 100 }}>
                <span className="welcome_top_text">W</span>{" "}
                <span className="text_right">elcome</span>
              </h1>
            </div>
            <h1 className="home_text_container" data-aos="fade-up">
              <span className="showcase_text_two">HOME</span>{" "}
            </h1>
            {/* <div className="showcase_text_two">
              
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase_container_two showcase">
            <div className="showcase_content_two">
              <img src={require("../image/logo.png").default} alt="" />
              <div>
                <h2>DIVINE ASSEMBLY</h2>
              </div>
              <div className="be_part">
                <h1>BE A PART</h1>
                <h1 className="our">OF OUR</h1>
                <div>
                  <h1 className="service">SERVICES</h1>
                </div>
              </div>
            </div>
            <div className="services_container">
              <div>THANKSGIVING SERVICE</div>
              <div className="bar"></div>
              <div>POWER SERVICE</div>
              <div className="bar"></div>
              <div>EMPOWERMENT SERVICE</div>
              <div className="bar"></div>
              <div>YOUTH SERVICE</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase_container_three showcase">
            <h1>Strength and help come</h1>
            <h1>When we tarry with the lord</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="showcase_container_four showcase">
            <div className="lastslide_text">
              <h2>Life is full of</h2>
            </div>
            <div className="lastslide_text_one">
              <h1>Grace</h1>
            </div>
            <div className="lastslide_text_two">
              <span>GRACE</span>
              <span>FOR</span>
              <span>LIFE</span>
              <span>IS</span>
              <span>FROM</span>
              <span>THE</span>
              <span>LORD.</span>
            </div>
            <div className="lastslide_text_three">
              Grace cometh when the Lord is with thee.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
