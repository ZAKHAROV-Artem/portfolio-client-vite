import { FC, useContext } from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import "../../../assets/style/Navbar.css";
import NavbarMenu from "./NavbarMenu";
import { useMediaQuery, useTheme } from "@mui/material";
import Drawer from "./Drawer";
import { Context } from "../../../main";
import { Fade } from "react-awesome-reveal";

const Navbar: FC = () => {
  const { app } = useContext(Context);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: "none", bgcolor: "background.default" }}
    >
      <Fade direction="down" duration={2000}>
        <Container fixed>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src={app.mainPageData?.attributes.footer.logo.data.attributes.url}
              alt=""
            />
            {matches ? (
              <>
                <Drawer />
              </>
            ) : (
              <NavbarMenu />
            )}
          </Toolbar>
        </Container>
      </Fade>
    </AppBar>
  );
};

export default Navbar;
