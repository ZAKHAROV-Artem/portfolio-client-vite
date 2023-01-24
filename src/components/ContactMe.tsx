import {
  Typography,
  Container,
  TextField,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { FC, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";
import { Context } from "../main";
import { BsFillPersonFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Modal from "./UI/Modal";
import SendMailData from "../models/SendMailData";
import { Fade } from "react-awesome-reveal";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactMe: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<Inputs>({ mode: "onBlur" });
  const [isSnackOpen, setIsSnackOpen] = useState<boolean>(false);
  const [isErrorSnackOpen, setIsErrorSnackOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleSnack = () => {
    setIsSnackOpen((prev) => !prev);
  };
  const toggleErrorSnack = () => {
    setIsErrorSnackOpen((prev) => !prev);
  };
  const { app } = useContext(Context);
  const onSubmit: SubmitHandler<Inputs> = (mainPageData: SendMailData) => {
    if (app.isMailSent) {
      return setIsModalOpen(true);
    }
    app
      .sendMail(mainPageData)
      .then((res) => (res.status === 200 ? toggleSnack() : toggleErrorSnack()))
      .then(() => app.setIsMailSent(true));

    reset();
  };
  return (
    <>
      {app.isMailSent ? (
        <Typography variant="h5" align="center" component="span">
          <Fade cascade damping={0.09}>
            Thank you for your message
          </Fade>
        </Typography>
      ) : (
        <Fade duration={1000}>
          <Container maxWidth="md">
            <Grid container columnSpacing={2}>
              <Grid xs={12} sm={6} sx={{ mt: 1 }}>
                <Typography>
                  {app.mainPageData?.attributes.contactForm.name.title}
                </Typography>
                <TextField
                  {...register("name", {
                    required: "Name is required field",
                    maxLength: 64,
                    minLength: 2,
                    value: "",
                  })}
                  InputProps={{
                    startAdornment: (
                      <BsFillPersonFill style={{ marginRight: "10px" }} />
                    ),
                  }}
                  error={errors.name ? true : false}
                  placeholder={
                    app.mainPageData?.attributes.contactForm.name.placeholder
                  }
                  sx={{
                    width: "100%",
                    mt: 1,
                    bgcolor: "white",
                    border: "none",
                    outline: "none",
                  }}
                />
                <Typography sx={{ color: "red", fontSize: "13px", ml: 1 }}>
                  {errors.name && errors.name.message}
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} sx={{ mt: 1 }}>
                <Typography>
                  {app.mainPageData?.attributes.contactForm.email.title}
                </Typography>
                <TextField
                  {...register("email", {
                    required: "Email is required field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "This is not email",
                    },
                    value: "",
                  })}
                  InputProps={{
                    startAdornment: <FiMail style={{ marginRight: "10px" }} />,
                  }}
                  error={errors.email ? true : false}
                  placeholder={
                    app.mainPageData?.attributes.contactForm.email.placeholder
                  }
                  sx={{
                    width: "100%",
                    mt: 1,
                    bgcolor: "white",
                    border: "none",
                    outline: "none",
                  }}
                />
                <Typography sx={{ color: "red", fontSize: "13px", ml: 1 }}>
                  {errors.email && errors.email.message}
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: 1 }}>
              <Typography>
                {app.mainPageData?.attributes.contactForm.message.title}
              </Typography>
              <TextField
                {...register("message", {
                  required: "Message is required field",
                  minLength: { value: 10, message: "Min length is 10" },
                  value: "",
                })}
                error={errors.message ? true : false}
                placeholder={
                  app.mainPageData?.attributes.contactForm.message.placeholder
                }
                multiline
                maxRows={8}
                sx={{
                  mt: 1,
                  width: "100%",
                  bgcolor: "white",
                  border: "none",
                  outline: "none",
                }}
              />
              <Typography sx={{ color: "red", fontSize: "13px", ml: 1 }}>
                {errors.message && errors.message.message}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "fit-content", mt: 2, textTransform: "inherit" }}
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid}
            >
              Send message
            </Button>
          </Container>
        </Fade>
      )}

      <Snackbar
        open={isSnackOpen}
        autoHideDuration={3000}
        onClose={toggleSnack}
      >
        <Alert onClose={toggleSnack} severity="success" sx={{ width: "100%" }}>
          Mail sent successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={isErrorSnackOpen}
        autoHideDuration={3000}
        onClose={toggleErrorSnack}
      >
        <Alert
          onClose={toggleErrorSnack}
          severity="error"
          sx={{ width: "100%" }}
        >
          Mail hasn't been sent
        </Alert>
      </Snackbar>
      <Modal
        open={isModalOpen}
        title="You already sent a mail. Reload to send another one"
        handleClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ContactMe;
