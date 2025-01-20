import { Box, Typography, Grid, Button } from "@mui/material";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";
import img4 from "../../assets/image4.jpg";
import { KnifeForkIcon } from "../../assets/KnifeForkIcon";

const AboutUsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#f1f8ff",
        py: { xs: 4, md: 10 },
        px: { xs: 2, md: 20 },
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={{ xs: 1, md: 1 }}>
            <Grid item xs={6} sm={6}>
              <img
                src={img1}
                alt="Interior"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6} alignSelf="flex-end">
              <img
                src={img2}
                alt="Dining Area"
                style={{
                  width: "65%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6} textAlign="right">
              <img
                src={img3}
                alt="Food Preparation"
                style={{
                  width: "65%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <img
                src={img4}
                alt="Food Platter"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box 
          sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.primary.main,
                fontFamily: "Pacifico",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "24px",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              About Us
            </Typography>

            <Typography
              sx={{
                color: (theme) => theme.palette.primary.main,
                fontFamily: "Pacifico",
                fontSize: "20px",
                paddingBottom: "40px",
                fontWeight: 400,
                lineHeight: "24px",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              _____
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "28px", md: "42px" },
              marginBottom: "24px",
              color: "black",
            }}
          >
            Welcome to
            <KnifeForkIcon />
            Restorant
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              lineHeight: "28px",
              marginBottom: "24px",
              color: "#555",
            }}
          >
            Tempor erat elit rebum et clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum lorem sit clita duo justo magna
            dolore erat amet.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              lineHeight: "28px",
              marginBottom: "24px",
              color: "#555",
            }}
          >
            Tempor erat elit rebum et clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum lorem sit clita duo justo magna
            dolore erat amet erat ipsum lorem sit clita duo justo magna dolore
            erat amet.
          </Typography>

          <Box sx={{ display: "flex", gap: 8, marginBottom: "24px" }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "32px", md: "42px" },
                  lineHeight: "50px",
                  color: (theme) => `${theme.palette.primary.main}`,
                  paddingLeft: "10px",
                  maxHeight: "50px",
                  alignContent: "center",
                  borderLeft: (theme) =>
                    `5px solid ${theme.palette.primary.main}`,
                }}
              >
                13
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", fontWeight: 400, color: "#555" }}
              >
                Years of <br /> Experience
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "32px", md: "42px" },
                  lineHeight: "50px",
                  color: (theme) => `${theme.palette.primary.main}`,
                  paddingLeft: "10px",
                  maxHeight: "50px",
                  alignContent: "center",
                  borderLeft: (theme) =>
                    `5px solid ${theme.palette.primary.main}`,
                }}
              >
                50
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", fontWeight: 400, color: "#555" }}
              >
                Popular <br /> Master Chefs
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              color: (theme) => `${theme.palette.text.primary}`,
              padding: "12px 32px",
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                backgroundColor: (theme) => `${theme.palette.primary.main}`,
                transition: "background-color 0.3s ease",
              },
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsSection;
