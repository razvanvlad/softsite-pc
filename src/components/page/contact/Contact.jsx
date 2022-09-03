import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ContactWrapper from "./ContactWrapper";
import AnimateLine from "../../common/AnimateLine";

function Contact() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageTitle="Contactează-ne" pageName="Contactează-ne" />
        <ContactWrapper />
        <SubscribArea />
      </div>
    </>
  );
}

export default Contact;
