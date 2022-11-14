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
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cartSlice"

type CharacterType = {
  title: string;
  urlToImage: string;
  description: string;
  url: string;
  author:string;
};

export const CardComponent: React.FC<CharacterType> = ({
  title,
  urlToImage,
  description,
  url,
  author
}) => {
  
  const dispatch = useAppDispatch()

  const truncate = (description: string, n: number) => {
    return description?.length > n
      ? `${description.substr(0, n - 1)}...`
      : description;
  };


  const handleAddToCart = () => {
    dispatch(addToCart({title,urlToImage,author}))
  }

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
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </Box>
    </Card>
  );
};
