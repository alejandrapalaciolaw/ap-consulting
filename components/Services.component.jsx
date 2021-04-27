import { Button } from "@material-ui/core";
import React from "react";
import CardComponent from "./Card.component";
import services from "../data/services";
import ActiveLink from "./ActiveLink.component";
import homeData from "../data/home";

import style from "../styles/Services.module.css";

const ServicesComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.card_container}>
        {services.map((item) => (
          <CardComponent href="services" key={item.id} service={item} />
        ))}
      </div>
      {homeData.services.hasCallToAction && (
        <ActiveLink href="/services">
          <Button
            variant="contained"
            style={{ maxWidth: "150px", margin: "2rem auto" }}
          >
            {homeData.services.callToActionText}
          </Button>
        </ActiveLink>
      )}
    </div>
  );
};

export default ServicesComponent;
