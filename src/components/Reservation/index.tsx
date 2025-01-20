import {
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import backgroundImage from "../../assets/reservation-form.png"; 

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(50, "Maximum 50 characters allowed"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  date: yup
    .string()
    .required("Date is required")
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Date must be in the format DD/MM/YYYY"),
  time: yup
    .string()
    .required("Time is required")
    .matches(/^\d{2}:\d{2}$/, "Time must be in the format HH:MM"),
  people: yup
    .number()
    .min(1, "At least 1 person is required")
    .required("No. of people is required"),
  specialRequest: yup.string().max(250, "Maximum 200 characters allowed"),
});

export const ReservationFormSection = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  interface ReservationFormData {
    name: string;
    email: string;
    date: string;
    time: string;
    people: number;
    specialRequest?: string;
  }

  const onSubmit = (data: ReservationFormData) => {
    console.log("Form Submitted:", data);
    alert("Reservation Successful!");
  };

  return (
    <Box
      id="reservation-section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        p: { xs: 2, md: 10 },
        backgroundColor: "#f1f8ff",
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box
        sx={{
          flex: 1,
          backgroundColor: "#192231",
          color: "#fff",
          p: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            marginBottom: "8px",
            color: (theme) => theme.palette.primary.main,
            textTransform: "uppercase",
          }}
        >
          Reservation
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontSize: "32px",
            marginBottom: "24px",
            color: "#fff",
          }}
        >
          Book A Table Online
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    label="Your Name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    InputProps={{ style: { backgroundColor: "#fff" } }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    label="Your Email"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputProps={{ style: { backgroundColor: "#fff" } }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    label="Date & Time"
                    type="datetime-local"
                    InputLabelProps={{
                      shrink: true, 
                    }}
                    InputProps={{
                      style: { 
                        backgroundColor: "#fff", 
                        color: "gray" 
                      },
                    }}
                    variant="outlined" 
                    error={!!errors.date}
                    helperText={errors.date?.message}
                    sx={{
                      "& input": {
                        height: "1.4375em", 
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name="people"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    label="No Of People"
                    select
                    variant="outlined"
                    error={!!errors.people}
                    helperText={errors.people?.message}
                    InputProps={{ style: { backgroundColor: "#fff" } }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <MenuItem key={num} value={num}>
                        People {num}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="specialRequest"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    label="Special Request"
                    multiline
                    rows={3}
                    variant="outlined"
                    error={!!errors.specialRequest}
                    helperText={errors.specialRequest?.message}
                    InputProps={{ style: { backgroundColor: "#fff" } }}
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
                  color: theme => theme.palette.text.primary,
                  padding: "12px 32px",
                  fontSize: "16px",
                  fontWeight: 700,
                  textTransform: "none",
                  backgroundColor: "#FEA116",
                  "&:hover": {
                    backgroundColor: "#d48d0d",
                  },
                }}
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ReservationFormSection;
