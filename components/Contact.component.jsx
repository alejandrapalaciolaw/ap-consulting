import React from "react";
import { Button, Link, Typography } from "@material-ui/core";
import homeData from "../data/home";

import style from "../styles/Contact.module.css";

const ContactComponent = () => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>{homeData.contact.content}</h3>
      {homeData.contact.hasCallToAction && (
        <Link
          href="mailto:alejandrapalaciolaw@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained">
            {homeData.contact.callToActionText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ContactComponent;
