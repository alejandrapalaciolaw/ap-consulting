import { Button } from "@material-ui/core";
import React from "react";
import CardComponent from "./Card.component";
import services from "../data/services";
import ActiveLink from "./ActiveLink.component";

import style from "../styles/Services.module.css";

const ServicesComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.card_container}>
        {services.map((item) => (
          <CardComponent key={item.id} service={item} />
        ))}
      </div>
      <ActiveLink href="/services">
        <Button
          variant="contained"
          style={{ maxWidth: "150px", margin: "2rem auto" }}
        >
          All Services
        </Button>
      </ActiveLink>
    </div>
  );
};

export default ServicesComponent;
