import { Box } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import backgroundImage from "./assets/bg-hero-01.png";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import FeaturesSection from "./components/Features";
import AboutUsSection from "./components/AboutUs";
import MenuSection from "./components/Menu";
import ReservationFormSection from "./components/Reservation";
import ChefsSection from "./components/Chefs";
import TestimonialsSection from "./components/Testimonials";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  // Scroll-to-top button component
  function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        setVisible(window.scrollY > 300);
      };
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return visible ? (
      <Box
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 40,
          right: 40,
          width: 60, 
          height: 60, 
          backgroundColor: (theme) => theme.palette.primary.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          fontSize: 34,
        }}
      >
        ↑
      </Box>
    ) : null;
  }

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(1, 5, 32, 0.85), rgba(1, 5, 32, 0.85)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        "& > *": {
          border: 0,
          padding: 0,
          margin: 0,
        },
      }}
    >
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturesSection />
              <AboutUsSection />
              <MenuSection />
              <ReservationFormSection />
              <ChefsSection />
              <TestimonialsSection />
            </>
          }
        />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <ScrollToTopButton />
      <Footer />
    </Box>
  );
}

export default App;
