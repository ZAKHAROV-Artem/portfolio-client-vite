import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { Fade } from "react-awesome-reveal";

interface IGoBack {
  text: string;
}
const GoBack: FC<IGoBack> = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "20px",
        alignItems: "center",
        mb: 3,
      }}
    >
      {" "}
      <Fade direction="left" duration={1500} triggerOnce>
        <Link to="/" style={{ color: "inherit" }}>
          <BiArrowBack style={{ cursor: "pointer" }} size={30} />
        </Link>
      </Fade>
      <Fade direction="right" duration={1500} triggerOnce>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          {text}
        </Typography>
      </Fade>
    </Box>
  );
};

export default GoBack;
