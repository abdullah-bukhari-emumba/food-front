import { Box, Typography, Button, Container } from "@mui/material";
import rotatingImage from "../../assets/food-plate.png"; 
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBookTableClick = () => {
    if (window.location.pathname === "/") {
      document
        .getElementById("reservation-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("reservation-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <Box
      sx={{
        background: "transparent",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        color: "#FFF",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "40px", md: "62px" },
              fontWeight: 800,
              lineHeight: { xs: "48px", md: "93px" },
              marginBottom: "24px",
            }}
          >
            Enjoy Our Delicious Meal
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              marginBottom: "32px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, cum
            libero tenetur rerum doloremque quis at enim voluptatibus eos
            commodi, quam veritatis placeat laborum qui? Dignissimos optio
            voluptates expedita voluptatibus
          </Typography>

          <Button
            onClick={handleBookTableClick}
            variant="contained"
            color="primary"
            sx={{
              padding: "16px 48px",
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "none",
              color: "white",
            }}
          >
            Book A Table
          </Button>
        </Box>

        <Box
          component="img"
          src={rotatingImage}
          alt="Rotating Image"
          sx={{
            marginLeft: { xs: "0", md: "50px" },
            marginTop: { xs: "32px", md: "0" },
            height: { xs: "300px", md: "600px" },
            width: { xs: "300px", md: "600px" },
            animation: "rotate 25s linear infinite",
          }}
        />
      </Container>

      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;
