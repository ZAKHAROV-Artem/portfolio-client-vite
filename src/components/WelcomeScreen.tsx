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
        <Fade direction="up">
          <Box>
            <Typography variant="h1" component="h1" color="secondary.light">
              {app.mainPageData?.attributes.welcomeScreen.title}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>
              {app.mainPageData?.attributes.welcomeScreen.subtitle}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "600", maxWidth: "450px" }}
            >
              {app.mainPageData?.attributes.welcomeScreen.description}
            </Typography>
          </Box>
        </Fade>
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
