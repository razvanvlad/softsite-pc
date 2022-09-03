import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <footer className={props.footerAddclass} >
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link scrollTo={scrollTop} to={"/"}>
                      <img src={process.env.PUBLIC_URL +"/img/softsite-logo/softsite-logo-white.svg"} alt="FooterImg" />
                    </Link>
                  </div>
                  <p>
                  Oferim o gamă completă de servicii IT, noi suntem partenerul firmei tale. Oferim profesionalism și seriozitate în orice colaborare. Vă putem dezvolta, automatiza și promova afacerea.
                  </p>
                  <ul className="social-media-icons">
                    <li>
                      <a href="https://www.facebook.com/softsite.ro">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/unlockplatform/">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@razvanvladpop">
                        <i className="fab fa-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/razvanvladpop/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Our Services</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>Strategy &amp; Research</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>Web Development</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>Web Solution</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>Digital Merketing</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>App Design</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service-details`} onClick={scrollTop}>App Development</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Quick Links</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/about`} onClick={scrollTop}>About Us</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Services</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Project</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`} onClick={scrollTop}>Blog</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Career</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Pricing Plan</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Date de contact</h4>
                  <div className="number">
                    <div className="num-icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="phone">
                      <a href="tel:0040756762169">+40756762169</a>
                    </div>
                  </div>
                  <div className="office-mail">
                    <div className="mail-icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="email">
                      <a href="mailto:razvanvladpop@gmail.com">razvanvladpop@gmail.com</a>
                    </div>
                  </div>
                  <div className="address">
                    <div className="address-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <p>Strada Nouă 21-25, Nr. 2, Apahida, CJ, România</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                <div className="copy-txt">
                  <span>
                    Copyright 2022 <b>Unlock Platform SRL-D</b> | Design By{" "}
                    <Link to={"https://softsite.ro"}>SoftSite</Link>
                  </span>
                </div>
              </div>
              {/* <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu">
                  <li>
                    <Link to={"#"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Terms of Use</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
