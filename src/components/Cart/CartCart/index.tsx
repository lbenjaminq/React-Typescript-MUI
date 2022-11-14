import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { CartAdd, removeToCart } from "../../../redux/slices/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../../redux/hooks";

interface Props {
  itemCart: CartAdd;
}

export const CartCard: React.FC<Props> = ({ itemCart }) => {
  
  const dispatch = useAppDispatch()

  const handleRemoveToCart = () => {
    dispatch(removeToCart(itemCart))
  }

  return (
    <Card sx={{ maxWidth: 345 }} key={itemCart.title}>
      <CardMedia
        component="img"
        height="140"
        image={itemCart.urlToImage}
        alt={itemCart.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {itemCart.author}
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems='start'>
          <Typography variant="h6" color="text.secondary">
            {itemCart.title}
          </Typography>
          <IconButton onClick={handleRemoveToCart}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};
