import { Button } from "@material-ui/core";
import React from "react";
import homeData from "../data/home";
import blogs from "../data/blogs";

import style from "../styles/Services.module.css";
import ActiveLink from "./ActiveLink.component";
import CardComponent from "./Card.component";

const BlogComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.card_container}>
        {blogs.map((item) => (
          <CardComponent href="blogs" key={item.id} service={item} />
        ))}
      </div>
      {homeData.services.hasCallToAction && (
        <ActiveLink href="/blogs">
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

export default BlogComponent;
