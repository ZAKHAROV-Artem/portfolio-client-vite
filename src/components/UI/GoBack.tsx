import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

interface IGoBack {
  text: string;
}
const GoBack: FC<IGoBack> = ({ text }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "20px",
        alignItems: "center",
        mb: 3,
      }}
    >
      <BiArrowBack
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        size={30}
      />
      <Typography variant="h4" sx={{ fontWeight: "700" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default GoBack;
