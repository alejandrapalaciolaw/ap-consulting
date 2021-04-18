import { Button } from "@material-ui/core";
import React from "react";
import ActiveLink from "../../components/ActiveLink.component";
import BoxLayout from "../../components/Content.layout";
import ServicesListComponent from "../../components/Services/ServicesList.component";

import style from "../../styles/Services.module.css";

const ServicesPage = () => {
  return (
    <div>
      <BoxLayout title="Services">
        <ServicesListComponent />
        <ActiveLink href="/">
          <Button variant="text" className={style.back_button}>
            Back Home
          </Button>
        </ActiveLink>
      </BoxLayout>
    </div>
  );
};

export default ServicesPage;
