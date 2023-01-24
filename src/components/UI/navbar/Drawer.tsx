import { Container, SwipeableDrawer } from "@mui/material";
import { FC, useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { Context } from "../../../main";
import NavbarMenu from "./NavbarMenu";

const Drawer: FC = () => {
  const { app } = useContext(Context);
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  return (
    <>
      <AiOutlineMenu onClick={toggleDrawer(true)} size={30} color="000000" />
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Container
          fixed
          sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
        >
          <img
            src={app.mainPageData?.attributes.footer.logo.data.attributes.url}
            alt=""
          />
          <CgClose
            onClick={toggleDrawer(false)}
            style={{ placeSelf: "end" }}
            size={30}
            color="000000"
          />
        </Container>
        <NavbarMenu />
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
