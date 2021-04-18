import React from "react";
import BoxLayout from "../../../components/Content.layout";
import { useRouter } from "next/router";
import services from "../../../data/services";

import style from "../../../styles/Services.module.css";
import { Button, Link } from "@material-ui/core";
import ActiveLink from "../../../components/ActiveLink.component";

const ServicePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const service = services.find((item) => item.id === id);

  return (
    <>
      <BoxLayout title={service?.title}>
        <div className={style.service_detail_container}>
          <section className={style.service_detail_section}>
            <article className={style.service_detail_article}>
              <h2>{service?.title}</h2>
              <p>{service?.description}</p>
              <Link
                href="mailto:alejandrapalaciolaw@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button className={style.buy_button} variant="contained">
                  Buy now
                </Button>
              </Link>
            </article>
            <article className={style.service_detail_article}>
              <img width={"100%"} src={service?.image} alt={service?.title} />
            </article>
          </section>
          <ActiveLink href="/">
            <Button variant="text" className={style.back_button}>
              Back Home
            </Button>
          </ActiveLink>
        </div>
      </BoxLayout>
    </>
  );
};

export default ServicePage;
