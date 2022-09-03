import React from 'react'

function WhyChooseUs() {
  return (
    <>
      <section className="why-choose sec-mar wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="why-choose-left">
                <div className="choose-banner1">
                  <img src={process.env.PUBLIC_URL + "/img/why-1.jpg"} alt="why-choose images" />
                </div>
                <div className="choose-banner2">
                  <img src={process.env.PUBLIC_URL + "/img/why-2.jpg"} alt="why-choose images" />
                  <img src={process.env.PUBLIC_URL + "/img/why-3.jpg"} alt="why-choose images" />
                </div>
                <div className="years">
                  <h5>20+</h5>
                  <span>Years</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-right">
                <div className="sec-title layout2">
                  <span>Why Choose</span>
                  <h2>Phasellus tristique a nisi etal tristique Cras interdum.</h2>
                </div>
                <div className="counter-boxes">
                  <div className="count-box">
                    <span className="counter">150</span><sup>+</sup>
                    <h5>Project Completed</h5>
                  </div>
                  <div className="count-box">
                    <span className="counter">250</span><sup>+</sup>
                    <h5>Satisfied Clients</h5>
                  </div>
                  <div className="count-box">
                    <span className="counter">50</span><sup>+</sup>
                    <h5>Expert Teams</h5>
                  </div>
                </div>
                <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Class onlin aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec lacinia placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsum. Praesent commodo at massa eget suscipit. Utani vitae enim velit. Ut ut posuere orci, id dapibus odio.</p>
                <div className="buttons-group">
                  <span>24/7 Support</span>
                  <span>Unique Design</span>
                  <span>Clean Code Develope</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default WhyChooseUs