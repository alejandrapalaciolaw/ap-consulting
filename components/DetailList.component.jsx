import React from "react";

import style from "../styles/Services.module.css";
import ActiveLink from "./ActiveLink.component";
import styled from "styled-components";

const OverflowParagraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.4rem;
`;

const DetailListComponent = ({ elements }) => {
  return (
    <section className={style.list_container}>
      {elements.map((item) => (
        <article className={style.list_item} key={item.id}>
          <ActiveLink href={`/blogs/${[item.id]}`}>
            <h3>{item.title}</h3>
          </ActiveLink>

          <OverflowParagraph lines={2}>{item.description}</OverflowParagraph>
        </article>
      ))}
    </section>
  );
};

export default DetailListComponent;
