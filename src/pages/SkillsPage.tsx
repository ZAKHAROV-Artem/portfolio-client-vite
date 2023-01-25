import { Box, Container, Typography } from "@mui/material";
import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import SkillsAccordion from "../components/Skills/SkillsAccordion";
import { ISkillItem } from "../models/SkillTypes";
import SkillItem from "../components/Skills/SkillItem";
import GoBack from "./../components/UI/GoBack";
import { Context } from "../main";
import { Fade } from "react-awesome-reveal";

const SkillsPage: FC = () => {
  const { app } = useContext(Context);
  const [skillItems, setSkillItems] = useState<ISkillItem[]>([]);
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
            <GoBack text={"Skills"} />
          </Grid>
          <Grid xs={12} md={4}>
            <Fade duration={2500}>
              <SkillsAccordion setSkillItems={setSkillItems} />
            </Fade>
          </Grid>
          <Grid xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                gap: "50px",
                flexWrap: "wrap",
              }}
            >
              {skillItems.length ? (
                skillItems.map((item) => (
                  <SkillItem key={item.id} skill={item} />
                ))
              ) : (
                <Typography sx={{ mt: 5, color: "gray" }}>
                  To see skills, select skill group
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsPage;
