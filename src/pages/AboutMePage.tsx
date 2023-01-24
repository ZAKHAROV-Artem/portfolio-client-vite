import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { FC, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";
import Me from "../assets/img/me2.jpg";
import Me2 from "../assets/img/me3.jpg";
import Me3 from "../assets/img/me4.jpg";
import { useTheme } from "@mui/system";
import GoBack from "../components/UI/GoBack";
import { Context } from "../main";

function countAgeInYears(startDate: Date): number {
  const diffDate = new Date(Date.now() - startDate.getTime());
  const age = Math.abs(diffDate.getUTCFullYear() - 1970);
  return age;
}

const AboutMePage: FC = () => {
  const { app } = useContext(Context);
  useEffect(() => window.scrollTo(0, 0));
  const reactWritingAge = countAgeInYears(new Date("01/03/2022"));
  const theme = useTheme();
  const isTransformed = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery("(max-width:550px)");
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        pb: `${isTransformed && "100px"}`,
      }}
    >
      <Box
        sx={{ height: "6vh", display: "grid", placeContent: "center", mb: 3 }}
      >
        {" "}
        <Link to="/">
          <img
            src={app.mainPageData?.attributes.footer.logo.data.attributes.url}
            alt=""
            title="Go to main"
          />
        </Link>
      </Box>
      <Container fixed>
        <Grid container columnSpacing={3}>
          <Grid xs={12}>
            <GoBack text={app.aboutMeData?.attributes.title || ""} />
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              columnGap: "10px",
              mb: 2,
            }}
          >
            <img
              src={Me}
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: `${matches ? "180px" : "300px"}`,
                height: "100%",
                objectFit: "contain",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <img
                src={Me2}
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: `${matches ? "150px" : "200px"}`,
                  height: "100%",
                  objectFit: "contain",
                }}
              />
              <img
                src={Me3}
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: `${matches ? "150px" : "200px"}`,
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Typography variant="h6" component="div">
              {app.aboutMeData?.attributes.text1}
              <br />
              <br />
              {app.aboutMeData?.attributes.text2} Here is {reactWritingAge}{" "}
              years, I'm already making sites on
              <Typography
                variant="h5"
                component="p"
                sx={{ color: "secondary.main" }}
              >
                {app.aboutMeData?.attributes.textHighlighted}
              </Typography>
            </Typography>{" "}
            <Box>
              <Typography variant="h5" sx={{ mt: 5 }}>
                {app.aboutMeData?.attributes.hobbies.title}
              </Typography>
              {app.aboutMeData?.attributes.hobbies.hobbies.map((item) => (
                <Typography key={item} variant="h6">
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMePage;
