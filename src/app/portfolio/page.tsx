"use client";
import "../globals.css";
import PortfolioList from "../../assets/json/PortfolioList.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "./portofolio.module.css";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Footer from "@/components/Footer";

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="portfolio">
        <h1>Portfolio</h1>

        <div className={styles.wrapper}>
          {PortfolioList.data.map((data, index) => {
            return (
              <div className={`folio ${styles.folio}`} key={index}>
                <div
                  className={`col-desc ${styles.desc}`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <h2 className="title">{data.title}</h2>
                  <h6>{data.desc}</h6>
                </div>
                <div
                  className="col-image"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <Swiper
                    slidesPerView={1}
                    speed={700}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="mySwiper"
                  >
                    {data.img?.map((data, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          style={{
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={data.src}
                            alt={data.alt}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                              width: "max-content",
                              height: "max-content",
                              maxHeight: 400,
                              objectFit: "contain",
                            }}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
