import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Drawer,
  IconButton,
  Typography,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { CartCard } from "./CartCart";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Cart: React.FC<Props> = ({ open, setOpen }) => {
  const noticeCart = useAppSelector((state) => state.cartReducer);

  console.log(noticeCart);

  return (
    <Drawer anchor={"right"} open={open}>
      <Box sx={{ width: "25em", p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Cart</Typography>
          <IconButton color="primary" onClick={() => setOpen(!open)}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        {noticeCart.length
          ? noticeCart.map((itemCart) => <CartCard itemCart={itemCart} />)
          : "0 elements"}
      </Box>
    </Drawer>
  );
};
