import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ContactHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 12,
        textAlign: "center",
        color: "white",
        background: "transparent",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(/src/assets/bg-hero-01.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          opacity: 0.5,
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "40px", md: "62px" },
          fontWeight: 800,
          mb: 2,
          textAlign: "center"
        }}
      >
        Contact Us
      </Typography>

      <Breadcrumbs
        separator="/"
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: theme.palette.primary.main,
          },
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Link
          href="/"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { color: theme.palette.primary.main },
          }}
        >
          HOME
        </Link>
        <Typography sx={{ color: theme.palette.primary.main }}>
          CONTACT
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default ContactHero;
