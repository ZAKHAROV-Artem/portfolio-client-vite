import { Box, Container, Typography } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../main";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2`
import GoBack from "../components/UI/GoBack";
import { observer } from "mobx-react-lite";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../assets/style/SliderArrows.css";

const ProjectDetailPage: FC = observer(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { app } = useContext(Context);
  const { projectId } = useParams();
  const project = app.projects.find((item) => item.id === Number(projectId));
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Box
        sx={{ height: "6vh", mb: 5, display: "grid", placeContent: "center" }}
      >
        {" "}
        <Link to="/">
          <img
            src={app.mainPageData?.attributes.footer.logo.data.attributes.url}
            alt="Logotype"
            title="Go to main"
          />
        </Link>
      </Box>
      <Container fixed>
        <Grid container>
          <Grid xs={12}>
            <GoBack text={project?.attributes.name + " details"} />
          </Grid>
          <Grid xs={12}>
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              style={{
                width: "100%",
              }}
            >
              {project?.attributes.images.data.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <img
                      style={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                      alt="project"
                      src={item.attributes.url}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>{" "}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className=""
            >
              {project?.attributes.images.data.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <img
                      style={{
                        width: "100%",
                        height: "20%",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      alt="project"
                      src={item.attributes.url}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
          <Grid xs={12}>
            <Typography variant="h6" sx={{ fontWeight: "900", mt: 5 }}>
              Type:
              <Typography variant="h6" component="p">
                {project?.attributes.projectType}
              </Typography>
            </Typography>{" "}
            <Typography variant="h6" sx={{ fontWeight: "900", mt: 5 }}>
              Description:{" "}
              <Typography variant="h6" component="div">
                {project?.attributes.description}
              </Typography>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "900", mt: 5 }}>
              Technologies:{" "}
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {project?.attributes.tech.map((item) => (
                <Box
                  key={item}
                  sx={{
                    width: "fit-content",
                    borderRadius: "10px",
                    bgcolor: "secondary.light",
                    py: "5px",
                    px: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "background.default" }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "900", mt: 3 }}>
              Link:
              <a
                href={project?.attributes.link}
                target="_blank"
                rel="noreferrer"
              >
                <Typography variant="h6" component="p">
                  {project?.attributes.link}
                </Typography>
              </a>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "900", mt: 3, mb: 10 }}>
              Finished:
              <Typography variant="h6" component="p">
                {project?.attributes.finished ? "Yes" : "No"}
              </Typography>
            </Typography>{" "}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default ProjectDetailPage;
