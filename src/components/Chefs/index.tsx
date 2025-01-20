import { Box, Typography, Grid, Avatar, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import chef1 from "../../assets/chef1.jpg";
import chef2 from "../../assets/chef2.jpg";
import chef3 from "../../assets/chef3.jpg";
import chef4 from "../../assets/chef4.jpg";

import { useTheme } from "@mui/material/styles";

const ChefsSection = () => {
  const theme = useTheme();
  const chefs = [
    { id: 1, name: "Chef 1", designation: "Head Chef", image: chef1 },
    { id: 2, name: "Chef 2", designation: "Sous Chef", image: chef2 },
    { id: 3, name: "Chef 3", designation: "Pastry Chef", image: chef3 },
    { id: 4, name: "Chef 4", designation: "Line Cook", image: chef4 },
  ];

  return (
    <Box sx={{ py: 8, px: 12, textAlign: "center", backgroundColor: "#F9FAFB" }}>
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Team Members
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "#2E3951",
          fontWeight: 800,
          fontSize: "36px",
          mb: 6,
          mt: 1,
        }}
      >
        Our Master Chefs
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {chefs.map((chef) => (
          <Grid item xs={12} sm={6} md={3} key={chef.id}>
            <Box
              sx={{
                textAlign: "center",
                padding: 3,
                backgroundColor: theme.palette.text.primary,
                borderRadius: "12px",
                boxShadow: "0px 6px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scaleY(1.05)",
                  "& .social-icons": {
                    opacity: 1,
                    visibility: "visible",
                  },
                },
              }}
            >
              <Avatar
                src={chef.image}
                alt={`Image of ${chef.name}`}
                sx={{
                  width: 120,
                  height: 120,
                  margin: "0 auto 16px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#333333",
                  mb: 1,
                }}
              >
                {chef.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  color: "#888888",
                  mb: 2,
                }}
              >
                {chef.designation}
              </Typography>
              <Box
                className="social-icons"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1.5,
                  mt: 2,
                  opacity: 0,
                  visibility: "hidden",
                  transition: "opacity 0.3s, visibility 0.3s",
                }}
              >
                <IconButton
                  href="#"
                  sx={{
                    width: "auto",
                    height: 40,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "20px 20px 0 0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: theme.palette.text.primary,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="#"
                  sx={{
                    width: "auto",
                    height: 40,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "20px 20px 0 0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: theme.palette.text.primary,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  href="#"
                  sx={{
                    width: "auto",
                    height: 40,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "20px 20px 0 0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: theme.palette.text.primary,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChefsSection;