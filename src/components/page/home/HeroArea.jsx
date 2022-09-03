import React from 'react';
import { Link } from 'react-router-dom';
import lottie from "lottie-web";

function HeroArea() {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <section className="hero-area">
        <div className="ken-burns-slideshow">
          <img src={process.env.PUBLIC_URL + "/img/hero-banner.jpg"} alt="HeroBanner" />
        </div>
        <div className="verticale-social">
          <ul className="vertical-media">
            <li><a href="https://www.facebook.com/softsite.ro">Facebook</a></li>
            <li><a href="https://www.linkedin.com/in/unlockplatform/">Linkedin</a></li>
          </ul>
        </div>
        <div className="hero-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1>SOFT-URI &amp; SITE-URI<span>SoftSite.ro</span></h1>
                  <p>Oferim o gamă completă de servicii IT, noi suntem partenerul firmei tale. Oferim profesionalism și seriozitate în orice colaborare. Vă putem dezvolta, automatiza și promova afacerea.</p>
                  <div className="buttons">
                    <div className="cmn-btn">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/despre-noi`} onClick={scrollTop}>Despre Noi</Link>
                    </div>
                    <div className="cmn-btn layout-two">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/proiecte`} onClick={scrollTop}>Listă Proiecte</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" />
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default HeroArea