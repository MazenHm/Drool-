import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "../styles/Swiper.css";
import "../styles/navtop.css";
import { getAllAnnounces } from "../services/AnnounceService";

const TopNavbar = () => {
  const [announce, setAnnounce] = useState([]);
  async function getAnnounce() {
    let data = await getAllAnnounces();
    if (data) {
      setAnnounce(data);
    }
  }

  useEffect(() => {
    getAnnounce();
  }, []);

  return (
    <>
      <nav className="navtop">
        <Swiper
          // cssMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {announce.map((announce) => (
            <SwiperSlide key={announce._id}>
              <strong
                style={{
                  fontSize: "15px",
                  lineHeight: "2.2rem",
                  fontWeight: "400",
                }}
                className=""
              >
                {announce.description}
              </strong>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
    </>
  );
};

export default TopNavbar;
