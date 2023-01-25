import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

const scrollData: { title: string; top: number }[] = [
  { title: "About me", top: 600 },
  { title: "Skils", top: 1100 },
  { title: "Projects", top: 2000 },
  { title: "Contact", top: document.body.scrollHeight - 1100 },
];

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
  const handleScroll = (top: number) => {
    window.scroll({
      top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "25px",
        ...smallStyles,
      }}
    >
      {scrollData.map((item) => (
        <Box className="menu_item" key={item.title}>
          <Typography
            color="primary"
            className="menu_item_text"
            variant="subtitle1"
            onClick={() => handleScroll(item.top)}
          >
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavbarMenu;
