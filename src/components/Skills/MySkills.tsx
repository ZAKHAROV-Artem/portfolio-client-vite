import { FC, useContext } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SkillSlider from "./SkillSlider";
import ViewMore from "../UI/ViewMore";
import SectionTitle from "../UI/SectionTitle";
import { Context } from "../../main";

const MySkills: FC = () => {
  const { app } = useContext(Context);

  const frontend = [
    ...app.skills[0].attributes.skillGroupItems[0].skillItems,
    ...app.skills[0].attributes.skillGroupItems[1].skillItems.slice(0, 2),
    ...app.skills[0].attributes.skillGroupItems[2].skillItems,
  ];
  const db = [
    ...app.skills[1].attributes.skillGroupItems[0].skillItems,
    ...app.skills[1].attributes.skillGroupItems[1].skillItems,
  ];
  const backend = [
    ...app.skills[2].attributes.skillGroupItems[0].skillItems,
    ...app.skills[2].attributes.skillGroupItems[1].skillItems.slice(0, 2),
  ];
  return (
    <Grid
      id="skills"
      container
      sx={{ mt: 10, justifyItems: "center", placeContent: "center" }}
      spacing={2}
    >
      <Grid xs={12}>
        <SectionTitle text={app.mainPageData?.attributes.skills.title || ""} />
      </Grid>
      <Grid xs={12} sx={{ mt: 5 }}>
        <SkillSlider skills={frontend} />
      </Grid>
      <Grid xs={12} sx={{ mt: 5 }}>
        <SkillSlider skills={db} />
      </Grid>
      <Grid xs={12}>
        <SkillSlider skills={backend} />
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        >
          <ViewMore
            link="/skills"
            text={app.mainPageData?.attributes.skills.viewMore || "View more"}
            size="lg"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MySkills;
