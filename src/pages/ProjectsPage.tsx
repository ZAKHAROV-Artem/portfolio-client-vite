import {
  Box,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

import ProjectItem from "../components/ProjectItem";
import GoBack from "../components/UI/GoBack";
import { Context } from "../main";

const ProjectsPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { app } = useContext(Context);
  const [types, setTypes] = useState<string[]>(["Simple layout"]);
  const [finished, setFinished] = useState<boolean | null>(null);

  const projects = useMemo(() => {
    return app.projects.filter((item) => {
      if (
        types.includes(item.attributes.projectType) &&
        (finished === null || item.attributes.finished === finished)
      ) {
        return item;
      }
    });
  }, [types, finished]);

  const handleTypesChange = (type: string) => {
    if (!types.includes(type)) return setTypes((prev) => [...prev, type]);
    setTypes((prev) => {
      return prev.filter((item) => item !== type);
    });
  };
  const handleFinishedChange = (value: boolean | null) => {
    setFinished(value);
  };
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Box
        sx={{ height: "6vh", mb: 5, display: "grid", placeContent: "center" }}
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
        <Grid container columnSpacing={4}>
          <Grid xs={12}>
            <GoBack text={"Projects"} />
          </Grid>
          <Grid xs={12} md={4} sx={{ mb: 5 }}>
            <FormLabel id="demo-radio-buttons-group-label">
              Project type
            </FormLabel>
            <FormGroup
              sx={{
                display: { md: "flex", lg: "block" },
                flexDirection: "row",
              }}
            >
              <FormControlLabel
                sx={{ width: "fit-content" }}
                control={
                  <Checkbox
                    defaultChecked
                    onChange={() => handleTypesChange("Simple layout")}
                  />
                }
                label="Simple layout"
              />
              <FormControlLabel
                sx={{ width: "fit-content" }}
                control={
                  <Checkbox
                    onChange={() => handleTypesChange("Frontend with react")}
                  />
                }
                label="Frontend with react"
              />{" "}
              <FormControlLabel
                sx={{ width: "fit-content" }}
                control={
                  <Checkbox
                    onChange={() =>
                      handleTypesChange("Fullstack with react and express")
                    }
                  />
                }
                label="Fullstack with react and express"
              />
            </FormGroup>
            <FormLabel id="demo-radio-buttons-group-label">Finished</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={""}
              name="radio-buttons-group"
              sx={{
                display: { md: "flex", lg: "block" },
                flexDirection: "row",
              }}
            >
              <FormControlLabel
                value={""}
                control={<Radio onChange={() => handleFinishedChange(null)} />}
                label="All"
              />
              <FormControlLabel
                value={true}
                control={<Radio onChange={() => handleFinishedChange(true)} />}
                label="Finished"
              />
              <FormControlLabel
                value={false}
                control={<Radio onChange={() => handleFinishedChange(false)} />}
                label="Not finished"
              />
            </RadioGroup>
          </Grid>
          <Grid
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              mb: 10,
            }}
          >
            {projects.length ? (
              projects.map((item) => (
                <ProjectItem key={item.id} project={item} />
              ))
            ) : (
              <Typography align="center">
                There are no projects with these filters
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsPage;
