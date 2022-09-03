import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/autoplay";
import MagazinOnline from "../../common/magazinonline";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);

function ServiceAreaCopy(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const serviceSlider= {
    loop: true,
    speed: 1000,
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
  }
  return (
    <>
      <section className={`${"services-area sec-mar"} ${props.layoutClass}`}>
        <div className="container">
          <div
            className="title-wrap wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className={`${"sec-title"} ${props.white}`}>
              <span>Servicii SOFTSITE X</span>
              <h2>Lista Servicii X</h2>
              <p>
              Oferim o gamă completă de servicii IT, noi suntem partenerul firmei tale. Oferim profesionalism
și seriozitate în orice colaborare. Vă putem dezvolta, automatiza și promova afacerea.
              </p>
            </div>
          </div>
          <Swiper {...serviceSlider} className="swiper services-slider">
            <div className="swiper-wrapper">
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className={`${"single-service"} ${props.layoutClass}`}>
                  <span>01</span>
                  <div className="icon">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/icons/service-icon-1.png"
                      }
                      alt="service-icon"
                    />
                  </div>
                  <h4>Web Design</h4>
                  <p>
                  Realizăm site-uri de prezentare cu design responsive pe orice dispozitiv. 
                  Oferim Web Design pe platforma Wordpress sau Design Custom (HTML, CSS, JS, React.JS)
                  </p>
                  <div className="read-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Vezi detalii
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className={`${"single-service"} ${props.layoutClass}`}>
                  <span>02</span>
                  <div className="lottie-service">
                  <MagazinOnline />
                  </div>
                  <h4>Magazin Online</h4>
                  <p>
                  Dezvoltăm împreună o pagină web dedicată vânzării online.

Folosim platformele: WooCommerce, OpenCart, PrestaShop, Shopify sau Magento 2 sau Custom PHP.
                  </p>
                  <div className="read-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Vezi detalii
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className={`${"single-service"} ${props.layoutClass}`}>
                  <span>03</span>
                  <div className="icon">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/icons/service-icon-3.png"
                      }
                      alt="service-icon"
                    />
                  </div>
                  <h4>Dezvoltare Software</h4>
                  <p>
                  Dezvoltare Software sau Web App pentru diverse activitatii ale firmei.
                  </p>
                  <div className="read-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/service-details`}
                      onClick={scrollTop}
                    >
                      Vezi detalii
                    </Link>
                  </div>
                </div>
              </SwiperSlide> */}
            </div>
          </Swiper>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </section>
    </>
  );
}

export default ServiceAreaCopy;
