import React, { useEffect, useRef }from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribAreaB from "../../common/SubscribAreaB";
import MagazinOnline from "../../common/magazinonline";
import TeamWrap from "./TeamWrap";
import lottie from "lottie-web";
import TeamWrap2 from "./TeamWrap2";
import ServiceAreaCopy from '../../page/home/ServiceAreaCopy';

function Team() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg', 
      loop: true,
      autoplay: true,
      animationData: require('../team/sofotsite-logo-animation-black.json')
    })
  }, [])

  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageTitle="Meet Our Team" pageName="team" />
        <div className="container" ref={container}>lottiex</div>
        <TeamWrap2 />
        <SubscribAreaB />
        <MagazinOnline />
        <ServiceAreaCopy />
      </div>
    </>
  );
}

export default Team;
