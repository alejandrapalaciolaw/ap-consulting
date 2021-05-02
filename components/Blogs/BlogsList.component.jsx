import React from "react";
import blogs from "../../data/blogs";

import style from "../../styles/Services.module.css";
import ActiveLink from "../ActiveLink.component";

const BlogsListComponent = () => {
  return (
    <section className={style.list_container}>
      {blogs.map((service) => (
        <article className={style.list_item} key={service.id}>
          <ActiveLink href={`/blogs/${[service.id]}`}>
            <h3>{service.title}</h3>
          </ActiveLink>

          <p>{service.description}</p>
        </article>
      ))}
    </section>
  );
};

export default BlogsListComponent;
