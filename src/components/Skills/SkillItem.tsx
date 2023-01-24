import { Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { FC } from "react";
import { ISkillItem } from "../../models/SkillTypes";

interface ISkillItemProps {
  skill: ISkillItem;
}
const SkillItem: FC<ISkillItemProps> = ({ skill }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: "grid", placeContent: "center" }}>
      <img
        style={{
          width: `${matches ? "160px" : "200px"}`,
          height: `${matches ? "160px" : "200px"}`,
          objectFit: "contain",
        }}
        src={skill.skillImage.data.attributes.url}
        alt=""
      />
      <Typography variant="h5" align="center">
        {skill.skillName}
      </Typography>
    </Box>
  );
};

export default SkillItem;
