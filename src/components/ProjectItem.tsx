import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  useMediaQuery,
  Box,
} from "@mui/material";
import { FC } from "react";
import { IProject } from "../models/ProjectTypes";
import ViewMore from "./UI/ViewMore";

interface IProjectItem {
  project: IProject;
}
const ProjectItem: FC<IProjectItem> = ({ project }) => {
  const matches = useMediaQuery("(max-width:480px)");
  return (
    <Card sx={{ height: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <img
          style={{
            width: "100%",

            objectFit: "cover",
          }}
          src={project.attributes.images.data[0].attributes.url}
          title={project.attributes.name}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.attributes.name}
        </Typography>
        <Typography variant="body2" component="span" color="text.secondary">
          {matches
            ? project.attributes.description.slice(0, 50) + "..."
            : project.attributes.description}{" "}
          <br />
          <br />
          <a href={project?.attributes.link} target="_blank" rel="noreferrer">
            <Typography variant="subtitle2" component="span" sx={{ mt: 1 }}>
              {project.attributes.link}
            </Typography>
          </a>
        </Typography>
      </CardContent>
      <CardActions sx={{ ml: 1, mb: 2 }}>
        <ViewMore link={"/projects/" + project.id} text="See more" size="sm" />
      </CardActions>
    </Card>
  );
};

export default ProjectItem;
