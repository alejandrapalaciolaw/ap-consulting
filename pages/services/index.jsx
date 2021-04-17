import React from "react";
import BoxLayout from "../../components/Content.layout";
import ServicesListComponent from "../../components/Services/ServicesList.component";

const ServicesPage = () => {
  return (
    <div>
      <BoxLayout title="Services">
        <ServicesListComponent />
      </BoxLayout>
    </div>
  );
};

export default ServicesPage;
