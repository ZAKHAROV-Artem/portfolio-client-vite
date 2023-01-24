import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
// Grid version 2
import { FC } from "react";
import Navbar from "../components/UI/navbar/Navbar";
import WelcomeScreen from "../components/WelcomeScreen";
import AboutMe from "../components/AboutMe";
import MySkills from "../components/Skills/MySkills";
import Footer from "./../components/Footer";
import { Parallax } from "react-scroll-parallax";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import "../assets/style/MainPage.css";
import { observer } from "mobx-react-lite";
import Projects from "../components/Projects";
import ScrollTopBtn from "../components/UI/ScrollTopBtn";
import { Fade } from "react-awesome-reveal";

const MainPage: FC = observer(() => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Navbar />{" "}
      <Container fixed>
        <Parallax
          speed={-25}
          rotate={[-250, 360]}
          translateX={[-300, 100]}
          style={{
            width: "min-content",
            position: "absolute",
            top: "0%",
            left: "0%",
          }}
        >
          <Fade duration={1000} delay={300}>
            <div
              style={{
                width: `${matches ? "20vw" : "17vw"}`,
                height: `${matches ? "20vw" : "17vw"}`,
                borderRadius: "3vw",
                backgroundColor: "rgba(126, 166, 244, 0.53)",
              }}
            />
          </Fade>
        </Parallax>
        <MouseParallaxContainer
          containerStyle={{
            width: "100%",
            height: "100vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <WelcomeScreen />
          <Fade duration={1000} delay={500}>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              style={{
                position: "absolute",
                top: "55%",
                left: "30%",
                width: `${matches ? "30vw" : "15vw"}`,
                height: `${matches ? "30vw" : "15vw"}`,
                borderRadius: "50%",
                backgroundColor: "rgba(145, 146, 216, 0.43)",
              }}
            />
          </Fade>
          <Fade duration={1000} delay={1000}>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              style={{
                position: "absolute",
                top: "20%",
                left: "70%",
                width: `${matches ? "20vw" : "5vw"}`,
                height: `${matches ? "20vw" : "5vw"}`,
                borderRadius: "50%",
                backgroundColor: "rgba(160, 228, 241, 0.44)",
              }}
            />
          </Fade>
        </MouseParallaxContainer>

        <AboutMe />
        <MySkills />
        <Projects />
        <Footer />
        <ScrollTopBtn />
      </Container>
    </Box>
  );
});

export default MainPage;
