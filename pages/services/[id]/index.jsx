import React from "react";
import BoxLayout from "../../../components/Content.layout";
import { useRouter } from "next/router";
import services from "../../../data/services";

const ServicePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const service = services.find((item) => item.id === id);

  return (
    <>
      <BoxLayout title={service?.title}>
        <h2>{service?.title}</h2>
        <p>{service?.description}</p>
        <img width={300} src={service?.image} alt={service?.title} />
      </BoxLayout>
    </>
  );
};

export default ServicePage;
