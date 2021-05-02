import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
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

const OverflowTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.3rem;
`;

const CardComponent = ({ service, href }) => {
  const { title, description, image, id } = service;
  return (
    <>
      <ActiveLink href={`/${href}/${[id]}`}>
        <Card
          style={{ height: 300, width: 250, minWidth: 200, margin: "1rem" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <OverflowTitle lines={1}>{title}</OverflowTitle>

              <OverflowParagraph lines={4}>{description}</OverflowParagraph>
            </CardContent>
          </CardActionArea>
        </Card>
      </ActiveLink>
    </>
  );
};

export default CardComponent;
