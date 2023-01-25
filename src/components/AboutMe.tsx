import { FC, useContext, useEffect } from "react";
import { Typography } from "@mui/material";
import Buble from "../assets/img/buble.svg";
import Grid from "@mui/material/Unstable_Grid2";
import ViewMore from "./UI/ViewMore";
import SectionTitle from "./UI/SectionTitle";
import { Context } from "../main";
import { Fade } from "react-awesome-reveal";

const AboutMe: FC = () => {
  const { app } = useContext(Context);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid
      id="about-me"
      container
      sx={{ placeItems: "center", placeContent: "center" }}
    >
      <Grid xs={12}>
        <SectionTitle text={app.mainPageData?.attributes.aboutMe.title || ""} />
      </Grid>
      <Grid xs={12} md={2} sx={{ width: "fit-content" }}>
        <Fade direction="left">
          <img src={Buble} alt="" />
        </Fade>
      </Grid>
      <Grid xs={12} md={10}>
        <Fade duration={1000}>
          <Typography variant="subtitle1" align="center">
            {app.mainPageData?.attributes.aboutMe.description}
          </Typography>
        </Fade>
      </Grid>
      <Grid xs={12} sx={{ display: "grid", placeContent: "center" }}>
        <ViewMore
          link="/about"
          text={app.mainPageData?.attributes.aboutMe.viewMore || "View more"}
          size="lg"
        />
      </Grid>
    </Grid>
  );
};

export default AboutMe;
