import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(50, "Maximum 50 characters allowed"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup
    .string()
    .required("Subject is required")
    .max(100, "Maximum 100 characters allowed"),
  message: yup
    .string()
    .required("Message is required")
    .max(250, "Maximum 250 characters allowed"),
});

const InfoSection = () => {
  const theme = useTheme();
  const emailSections = [
    {
      title: "Booking",
      email: "booking@example.com",
    },
    {
      title: "General",
      email: "general@example.com",
    },
    {
      title: "Technical",
      email: "tech@example.com",
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontFamily: "Pacifico",
            fontSize: "20px",
            mb: 1,
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "28px", md: "36px" },
            fontWeight: 800,
            color: "#0F172B",
            textAlign: "center",
            mb: 4,
          }}
        >
          Contact For Any Query
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {emailSections.map((section, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              sx={{
                p: { xs: 3, sm: 4 },
                backgroundColor: "white",
                transition: "all .3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: "Pacifico",
                  fontSize: "20px",
                  mb: 1,
                  textAlign: "center",
                }}
              >
                {section.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <EmailIcon sx={{ color: theme.palette.primary.main }} />
                <Typography sx={{ color: "text.secondary" }}>
                  {section.email}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const FormSection = () => {
  const theme = useTheme();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    console.log("Form Submitted:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        backgroundColor: "white",
        p: 4,
        height: "100%",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Your Name"
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
                InputProps={{
                  style: { color: "#000" },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Your Email"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.main, 
                    },
                  },
                }}
                InputProps={{
                  style: { color: "#000" }, 
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Subject"
                error={!!errors.subject}
                helperText={errors.subject?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.main, 
                    },
                  },
                }}
                InputProps={{
                  style: { color: "#000" }, 
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Message"
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.main, 
                    },
                  },
                }}
                InputProps={{
                  style: { color: "#000" }, 
                }}
              />
            )}
          />
        </Grid>

       
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            sx={{
              py: 2,
              width: "100%",
              backgroundColor: theme.palette.primary.main,
              color: "white",
              fontSize: "16px",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            SEND MESSAGE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const ContactForm = {
  InfoSection,
  FormSection,
};

export default ContactForm;
