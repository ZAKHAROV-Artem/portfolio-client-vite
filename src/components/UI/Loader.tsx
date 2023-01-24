import { FC } from "react";
import { Box, useTheme } from "@mui/material";
import RingLoader from "react-spinners/RingLoader";

const Loader: FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "background.default",
        display: "grid",
        placeContent: "center",
      }}
    >
      <RingLoader color={theme.palette.secondary.light} size="100px" />
    </Box>
  );
};

export default Loader;
