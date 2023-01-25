import { Box } from "@mui/material";
import { FC, useContext } from "react";
import ViewMore from "./UI/ViewMore";
import Grid from "@mui/material/Unstable_Grid2";
import ProjectItem from "./ProjectItem";
import SectionTitle from "./UI/SectionTitle";
import { Context } from "../main";
import { Fade } from "react-awesome-reveal";

const Projects: FC = () => {
  const { app } = useContext(Context);

  return (
    <Box id="projects" sx={{ mt: 10 }}>
      <SectionTitle text={app.mainPageData?.attributes.projects.title || ""} />
      <Grid container columnSpacing={2} rowSpacing={2} sx={{ mt: 5 }}>
        {app.projects.slice(0, 4).map((item, index) => (
          <Grid key={item.id} xs={12} md={6}>
            <Fade
              duration={1000}
              direction={`${index % 2 === 0 ? "left" : "right"}`}
            >
              <ProjectItem project={item} />
            </Fade>
          </Grid>
        ))}
        <Grid xs={12} sx={{ mt: 5, display: "grid", placeContent: "center" }}>
          <ViewMore
            link="/projects"
            text={app.mainPageData?.attributes.projects.viewMore || "View more"}
            size="lg"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Projects;
