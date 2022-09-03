import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

function AboutArea(props) {
  const [isOpen, setOpen]=useState(false)
  return (
    <>
      <section className="about-area sec-mar-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 or-2 wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className={`${"sec-title layout2"} ${props.white}`}>
                <span>Despre SOFTSITE</span>
                <h2>Despre Noi</h2>
              </div>
              <div className={`${"about-left"} ${props.layoutClass}`}>
                <h3>Agenție de design web<span>site</span>-uri &amp; dezvoltare <span>soft</span>ware la comandă.</h3>
                <p>Oferim o gamă completă de servicii IT, noi suntem partenerul firmei tale. Oferim profesionalism și seriozitate în orice colaborare. Vă putem dezvolta, automatiza și promova afacerea.</p>
                <div className={`${"company-since"} ${props.layoutClass}`}>
                  <div className="company-logo">
                    <img src={`${process.env.PUBLIC_URL} ${props.image}`} alt="about-images" />
                  </div>
                  {/* <strong>#3316</strong> */}
                  
                  <a target="_blank" href="https://www.startupcafe.ro/finantari/start-nation-lista-rezultate.htm"><strong>#3316</strong></a>

                  <h4>Câștigător Start-UP Nation, COD CAEN 6201 <span>Ediția 2017.</span></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 or-1 wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="about-right">
                <div className="banner-1">
                  <img src={process.env.PUBLIC_URL + '/img/about-baner-1.jpg'} alt="about-images" />
                </div>
                <div className="banner-2">
                  <img src={process.env.PUBLIC_URL + '/img/about-baner-2.jpg'}  alt="about-images" />
                  <div className="banner2-inner">
                    <div className="play">
                      <div className="video-popup" onClick={()=>setOpen(true)} ><i className="fas fa-play" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="IUN664s7N-c"
          autoplay = {1}
          onClose={() => setOpen(false)}
        />
      </React.Fragment> 
    </>
  )
}

export default AboutArea