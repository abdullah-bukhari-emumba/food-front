import { Box, Typography, Container, Card, Avatar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/chef4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Profession",
    avatar: client1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Client Name",
    role: "Profession",
    avatar: client2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featured: true,
  },
  {
    id: 3,
    name: "Client Name",
    role: "Profession",
    avatar: client3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 12 },
        backgroundColor: "#f1f8ff",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontFamily: "Pacifico",
              fontSize: "20px",
              mb: 1,
            }}
          >
            Testimonial
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "28px", md: "42px" },
              color: "black",
            }}
          >
            Our Clients Say!!!
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: testimonial.featured ? theme.palette.primary.main : theme.palette.text.primary,
                  color: testimonial.featured ? theme.palette.text.primary : "black",
                  boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0px",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box sx={{ position: "relative", mb: 3 }}>
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 60,
                      rotate: "180deg",
                      color: testimonial.featured 
                        ? theme.palette.text.primary 
                        : theme.palette.primary.main,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    mb: 3,
                    fontSize: "16px",
                    lineHeight: "24px",
                    flex: 1,
                    color: testimonial.featured ? "white" : "black",
                  }}
                >
                  {testimonial.text}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={testimonial.avatar}
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      mr: 2,
                      borderRadius: "100"
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "18px",
                        color: testimonial.featured ? "white" : "black",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: testimonial.featured 
                          ? "rgba(255,255,255,0.8)" 
                          : "text.secondary",
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
