import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import { Parallax } from "react-scroll-parallax";
import { Context } from "../main";
import { Fade } from "react-awesome-reveal";

const WelcomeScreen: FC = observer(() => {
  const { app } = useContext(Context);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        height: "100vh",
        pt: matches ? 5 : 17,
        display: "flex",
        alignItems: "center",
        flexDirection: `${!matches && "column"}`,
        justifyContent: `${matches && "space-between"}`,
        gap: `${!matches && "40px 0"}`,
        position: "relative",
        zIndex: "10",
      }}
    >
      <Parallax speed={9} style={{ perspective: "10000" }}>
        <Box>
          <Typography variant="h1" component="h1" color="secondary.light">
            <Fade cascade damping={0.1}>
              {app.mainPageData?.attributes.welcomeScreen.title}
            </Fade>
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            <Fade cascade damping={0.1} delay={1000}>
              {app.mainPageData?.attributes.welcomeScreen.subtitle}
            </Fade>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "600", maxWidth: "450px" }}
          >
            <Fade cascade damping={0.07} delay={1500}>
              {app.mainPageData?.attributes.welcomeScreen.description}
            </Fade>
          </Typography>
        </Box>
      </Parallax>
      <Fade duration={1200}>
        <img
          src={
            app.mainPageData?.attributes.welcomeScreen.image.data.attributes.url
          }
          alt="My image"
          style={{
            width: `${matches ? "40vw" : "90%"}`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Fade>
    </Box>
  );
});

export default WelcomeScreen;
