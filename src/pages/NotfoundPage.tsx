import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import NotFoundMan from "../assets/img/notFoundPage/404_man.svg";
import NotFoundNumber from "../assets/img/notFoundPage/404.svg";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Link } from "react-router-dom";

const NotfoundPage: FC = () => {
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <MouseParallaxContainer
        containerStyle={{
          height: "inherit",
          width: "100%",
          overflow: "hidden",
          display: "grid",
          placeItems: "center",
        }}
      >
        <MouseParallaxChild factorX={0.2} factorY={0.2}>
          <Box sx={{ display: "flex" }}>
            <img src={NotFoundMan} alt="" />
            <Box>
              <img src={NotFoundNumber} alt="" />
              <Typography align="center">Page not found</Typography>
            </Box>
          </Box>
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <Button
        variant="contained"
        sx={{
          bgcolor: "secondary.light",
          position: "absolute",
          top: "90%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "white" }}>Go to main</Typography>
        </Link>
      </Button>
    </Box>
  );
};

export default NotfoundPage;
