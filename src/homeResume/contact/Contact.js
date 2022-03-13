import React, { useState } from "react";
import { ContactList } from "components/ContactList";
import { Section } from "components/Section";
import "./contact.css";

import FormEmail from "./FormEmail";
const Contact = () => {
 
  return (
    <div>
      <Section id={"Contact"} title={"Contact"} className="content">
        <h3 className="content-title  padd-15">Have You Any Questions ?</h3>
        <h4 className="content-sub-title  padd-15">I 'M AT YOUR SERVICES</h4>
        <div className="row">
          <ContactList
            icon={"fa fa-comments"}
            title={"Call Us On "}
            href={"tel:+98910 029 5532"}
            aid={"+98 910 029 5532"}
          />
          <ContactList
            icon={"fa fa-envelope"}
            title={"Email"}
            href={"mailto:rezaamiri842@gmail.com"}
            aid={"Rezaamiri842@gmail.com"}
          />
          <ContactList
            icon={"fa-brands fa-linkedin"}
            title={"linkedin"}
            href={"https://www.linkedin.com/in/mr-reza1997"}
            aid={"Mr-reza1997"}
          />
          <ContactList
            icon={"fa-brands fa-github"}
            title={"Github"}
            href={"https://github.com/mr-reza1997"}
            aid={"Mr-reza1997"}
          />
          <ContactList
            icon={"fa-brands fa-twitter"}
            title={"Twitter"}
            href={"https://twitter.com/Mr_reza1997"}
            aid={"@Mr-reza1997"}
          />
          <ContactList
            icon={"fa-brands fa-telegram"}
            title={"Telegram"}
            href={"https://telegram.me/joinchat/@mr-arza"}
            aid={"@Mr-arza"}
          />
        </div>
        <h3 className="content-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="content-sub-title  padd-15">
          I 'M VERY RESPOSIVE TO MESSAGES
        </h4>
       <FormEmail />
      </Section>
    </div>
  );
};

export default Contact;
