import React from "react";
import BoxLayout from "../../../components/Content.layout";
import { useRouter } from "next/router";
import blogs from "../../../data/blogs";

import style from "../../../styles/Services.module.css";
import { Button, Link } from "@material-ui/core";
import ActiveLink from "../../../components/ActiveLink.component";

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogs.find((item) => item.id === id);

  return (
    <>
      <BoxLayout title={blog?.title}>
        <div className={style.service_detail_container}>
          <section className={style.service_detail_section}>
            <article className={style.service_detail_article}>
              <h2>{blog?.title}</h2>
              <p>{blog?.description}</p>
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
              <img width={"100%"} src={blog?.image} alt={blog?.title} />
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

export default BlogPage;
