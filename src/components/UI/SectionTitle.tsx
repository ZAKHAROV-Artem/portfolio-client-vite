import { Typography } from "@mui/material";
import { FC } from "react";
import { Fade } from "react-awesome-reveal";

interface ISectionTitle {
  text: string;
}
const SectionTitle: FC<ISectionTitle> = ({ text }) => {
  return (
    <Typography variant="h4" align="center" sx={{ fontWeight: "700" }}>
      <Fade cascade damping={0.1}>
        {text}
      </Fade>
    </Typography>
  );
};

export default SectionTitle;
