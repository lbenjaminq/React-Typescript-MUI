import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

type CharacterType = {
  title: string;
  urlToImage: string;
  description: string;
  url: string;
};

export const CardComponent: React.FC<CharacterType> = ({
  title,
  urlToImage,
  description,
  url,
}) => {
  const truncate = (description: string, n: number) => {
    return description?.length > n
      ? `${description.substr(0, n - 1)}...`
      : description;
  };


  return (
    <Card sx={{ height: 450, maxWidth: 400 }}>
      <a href={url} target="blank">
        <CardMedia
          component="img"
          height="194"
          image={urlToImage}
          alt={title}
          loading="lazy"
        />
      </a>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "50%",
        }}
      >
        <CardContent>
          <Typography variant="h6">{truncate(title, 50)}</Typography>
          <Divider />
          <Typography sx={{ mt: 2, fontSize: "0.8rem" }}>
            {truncate(description, 100)}
          </Typography>
        </CardContent>
          <a href={url} target="blank" style={{textDecoration:"none",color:"#000",width:"100%"}}>
        <Button fullWidth variant="contained">
            Learn More
        </Button>
          </a>
      </Box>
    </Card>
  );
};
