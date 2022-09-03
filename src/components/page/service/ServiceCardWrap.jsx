import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceCardWrap() {
  return (
    <>
      <div className="services-grid sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className="sec-title">
              <span>Our Solutions</span>
              <h2>Services</h2>
              <p>
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                convallis sapien, quis commodo libero.
              </p>
            </div>
          </div>
          <div className="row g-4">
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={1} image="/img/icons/service-icon-1.png" title="Web Design" details="Integer purus odio, placerat nec rhoncu in, ullamcorper nec dolor."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={2} image="/img/icons/service-icon-2.png" title="UI/UX Design" details="Integer purus odio, placerat nec rhoncu in, ullamcorper nec dolor."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={3}  image="/img/icons/service-icon-3.png" title="Software Development" details="Integer purus odio, placerat nec rhoncu in, ullamcorper nec dolor."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={4} image="/img/icons/service-icon-4.png" title="App Design" details="Integer purus odio, placerat nec rhoncu in, ullamcorper nec dolor."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={5} image="/img/icons/service-icon-5.png" title="Graphic Design" details="Integer purus odio, placerat nec rhoncu in, ullamcorper nec dolor."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={6} image="/img/icons/service-icon-6.png" title="Video Animation" details="Integer purus odio, placerat nec rhoncu in, ullamcorper nec dolor."/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCardWrap;
