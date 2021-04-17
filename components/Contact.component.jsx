import React from "react";
import { Button, Link, Typography } from "@material-ui/core";

import style from "../styles/Contact.module.css";

const ContactComponent = () => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Would you like to expose your case?</h3>
      <Link
        href="mailto:alejandrapalaciolaw@gmail.com"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button variant="contained">Send an email </Button>
      </Link>
    </div>
  );
};

export default ContactComponent;
