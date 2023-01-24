import { FC, useContext } from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SectionTitle from "./UI/SectionTitle";
import ContactMe from "./ContactMe";
import { observer } from "mobx-react-lite";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { Context } from "../main";
import { Fade } from "react-awesome-reveal";

const Footer: FC = observer(() => {
  const { app } = useContext(Context);

  return (
    <Grid container sx={{ placeContent: "center", mt: 10 }}>
      <Grid id="contact" xs={12}>
        <SectionTitle text="Contact me" />
      </Grid>
      <Grid xs={12} sx={{ mt: 10, display: "grid", alignContent: "center" }}>
        <ContactMe />
        <Container maxWidth="md" sx={{ mt: 15, mb: 10 }}>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={5}
            sx={{ placeContent: "center" }}
          >
            <Grid xs={12} sm={5}>
              <Fade direction="left">
                <img
                  src={
                    app.mainPageData?.attributes.footer.logo.data.attributes.url
                  }
                  alt=""
                />
                <Typography>
                  {app.mainPageData?.attributes.footer.text}
                </Typography>
              </Fade>{" "}
            </Grid>
            <Grid xs={12} sm={4}>
              <Fade direction="right">
                <Typography
                  variant="h5"
                  align="left"
                  sx={{ fontWeight: "700" }}
                >
                  {app.mainPageData?.attributes.footer.title}
                </Typography>
                <Grid container rowSpacing={2}>
                  <Grid
                    xs={12}
                    sx={{
                      display: "flex",
                      columnGap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href={
                        app.mainPageData?.attributes.footer.socialMedia[0]
                          .link || ""
                      }
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        columnGap: "5px",
                        alignItems: "center",
                      }}
                    >
                      <FiMail size={25} color="7EA6F4" />
                      <Typography>
                        {
                          app.mainPageData?.attributes.footer.socialMedia[0]
                            .text
                        }
                      </Typography>
                    </a>
                  </Grid>
                  <Grid xs={12}>
                    <a
                      href={
                        app.mainPageData?.attributes.footer.socialMedia[1]
                          .link || ""
                      }
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        columnGap: "5px",
                        alignItems: "center",
                      }}
                    >
                      <AiFillGithub size={25} color="7EA6F4" />
                      <Typography>
                        {
                          app.mainPageData?.attributes.footer.socialMedia[1]
                            .text
                        }
                      </Typography>
                    </a>
                  </Grid>
                  <Grid xs={12}>
                    <a
                      href={
                        app.mainPageData?.attributes.footer.socialMedia[2]
                          .link || ""
                      }
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        columnGap: "5px",
                        alignItems: "center",
                      }}
                    >
                      <BsInstagram size={25} color="7EA6F4" />
                      <Typography>
                        {
                          app.mainPageData?.attributes.footer.socialMedia[2]
                            .text
                        }
                      </Typography>
                    </a>
                  </Grid>
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
});

export default Footer;
