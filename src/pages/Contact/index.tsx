import { Box, Container } from "@mui/material";
import ContactHero from "../../components/ContactHero";
import ContactForm from "../../components/ContactForm";
import ContactMap from "../../components/ContactMap";

const Contact = () => {
  return (
    <Box>
      <ContactHero />
      <Container
        maxWidth="xl"
        sx={{ p: 8, background: "white", width: "100%" }}
      >
        <Box sx={{ p: { xs: 0, md: 8 }, background: "white", width: "100%" }}>
          <ContactForm.InfoSection />

          <Box
            sx={{
              display: "flex",
              gap: 6,
              flexDirection: { xs: "column", md: "row" },
              mt: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <ContactMap />
            </Box>
            <Box sx={{ flex: 1 }}>
              <ContactForm.FormSection />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
