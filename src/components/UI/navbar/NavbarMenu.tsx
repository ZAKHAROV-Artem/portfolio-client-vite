import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

const NavbarMenu: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const smallStyles = matches && {
    flexDirection: "column",
    alignItems: "center",
    rowGap: "25px",
    m: 3,
    overflow: "hidden",
  };
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "25px",
        ...smallStyles,
      }}
    >
      <Box className="menu_item">
        <a href="#about-me">
          <Typography
            color="primary"
            className="menu_item_text"
            variant="subtitle1"
          >
            About me
          </Typography>
        </a>
      </Box>{" "}
      <Box className="menu_item">
        {" "}
        <a href="#skills">
          <Typography
            color="primary"
            className="menu_item_text"
            variant="subtitle1"
          >
            Skils
          </Typography>
        </a>
      </Box>{" "}
      <Box className="menu_item">
        {" "}
        <a href="#projects">
          <Typography
            color="primary"
            className="menu_item_text"
            variant="subtitle1"
          >
            Projects
          </Typography>
        </a>
      </Box>{" "}
      <Box className="menu_item">
        {" "}
        <a href="#contact">
          <Typography
            color="primary"
            className="menu_item_text"
            variant="subtitle1"
          >
            Contact
          </Typography>{" "}
        </a>
      </Box>{" "}
    </Box>
  );
};

export default NavbarMenu;
