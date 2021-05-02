import { Button } from "@material-ui/core";
import React from "react";
import ActiveLink from "../../components/ActiveLink.component";
import BoxLayout from "../../components/Content.layout";

import style from "../../styles/Services.module.css";
import DetailListComponent from "../../components/DetailList.component";
import blogs from "../../data/blogs";

const BlogsPage = () => {
  return (
    <div>
      <BoxLayout title="Blogs">
        <DetailListComponent elements={blogs} />
        <ActiveLink href="/">
          <Button variant="text" className={style.back_button}>
            Back Home
          </Button>
        </ActiveLink>
      </BoxLayout>
    </div>
  );
};

export default BlogsPage;
