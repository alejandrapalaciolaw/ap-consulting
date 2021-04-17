import React from "react";
import services from "../../data/services";

import style from "../../styles/Services.module.css";
import ActiveLink from "../ActiveLink.component";

const ServicesListComponent = () => {
  return (
    <section className={style.list_container}>
      {services.map((service) => (
        <article className={style.list_item} key={service.id}>
          <ActiveLink href={`/services/${[service.id]}`}>
            <h3>{service.title}</h3>
          </ActiveLink>

          <p>{service.description}</p>
        </article>
      ))}
    </section>
  );
};

export default ServicesListComponent;
