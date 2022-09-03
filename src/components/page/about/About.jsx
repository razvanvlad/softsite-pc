import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import AboutWrap from "./AboutWrap";

function About() {
  return (
    <>
      <Breadcrumb pageName="Despre Noi" pageTitle="Despre Noi" />
      <AboutWrap />
      <SubscribArea />
    </>
  );
}

export default About;
