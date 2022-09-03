import React from 'react'

function SubscribArea() {
  return (
    <>
     <section className="subscribe-newsletter sec-mar-top">
        <div className="container">
          <div className="news-letter-content">
            <div className="row align-items-center">
              <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="subscribe-cnt">
                  <span>Get In Touch</span>
                  <h3>Subscribe Our</h3>
                  <strong>Newsletter</strong>
                </div>
              </div>
              <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="subscribe-form">
                  <form onScroll={(e)=>e.preventDefault()} action="#" method="post">
                    <input type="email" name="email" placeholder="Type Your Email" />
                    <input type="submit" defaultValue="connect" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default SubscribArea