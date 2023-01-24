import { FC } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

interface IViewMoreProps {
  link: string;
  text: string;
  size: "lg" | "sm";
}
const ViewMore: FC<IViewMoreProps> = ({ link, text, size }) => {
  return (
    <Fade direction="up">
      <Link to={link} style={{ textDecoration: "none" }}>
        <Typography
          variant={size === "lg" ? "h6" : "subtitle1"}
          align="center"
          color="secondary.light"
          sx={{
            width: "fit-content",
            fontWeight: "700",
            cursor: "pointer",
            transition: "0.3s",
            ":hover": { opacity: "0.5" },
          }}
        >
          {text}
        </Typography>
      </Link>
    </Fade>
  );
};

export default ViewMore;
