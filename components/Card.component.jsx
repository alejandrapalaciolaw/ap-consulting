import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import ActiveLink from "./ActiveLink.component";

const CardComponent = ({ service }) => {
  const { title, description, image, id } = service;
  return (
    <>
      <ActiveLink href={`/services/${[id]}`}>
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
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ActiveLink>
    </>
  );
};

export default CardComponent;
