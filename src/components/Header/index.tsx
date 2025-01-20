import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHomeClick = () => {
    if (window.location.pathname === "/") {
      document.getElementById("menu-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("menu-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleBookTableClick = () => {
    if (window.location.pathname === "/") {
      document.getElementById("reservation-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("reservation-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "hidden",
        border: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          padding: { xs: "0 36px", md: "12px 96px" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "self-end" }}>
          <Box
            component="img"
            src={Logo}
            alt="FoodFront Logo"
            sx={{ height: 50, width: 50, marginRight: "8px" }}
          />
          <Typography
            variant="h1"
            color="primary"
            sx={{
              fontFamily: "Mochiy Pop One",
              fontSize: "30px",
              fontWeight: 400,
              lineHeight: "43.44px",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            FoodFront
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              onClick={handleMenuToggle}
              sx={{
                marginRight: "10px",
                color: "white",
                border: "1px solid white",
                borderRadius: "10%",
              }}
            >
              <MenuIcon />
            </IconButton>
            {menuOpen && (
              <Box
                sx={{
                  position: "fixed",
                  top: "64px",
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0,0,0,0.9)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  px: 2,
                  py: 2,
                  overflowX: "hidden",
                }}
              >
                <List sx={{ width: "100%" }}>
                  <ListItem>
                    <ListItemButton
                      component={NavLink}
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      sx={{
                        "&.active": {
                          color: "primary.main",
                        },
                        color: "white",
                      }}
                    >
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      component={NavLink}
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      sx={{
                        "&.active": {
                          color: "primary.main",
                        },
                        color: "white",
                      }}
                    >
                      <ListItemText primary="Contact" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                      }}
                    >
                      <ListItemText primary="Book a Table" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              onClick={handleHomeClick}
              sx={{
                fontSize: "16px",
                margin: "0 8px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "white",
                "&.active": {
                  color: "primary.main",
                },
              }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/contact"
              sx={{
                fontSize: "16px",
                margin: "0 8px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "white",
                "&.active": {
                  color: "primary.main",
                },
              }}
            >
              Contact
            </Button>
            <Button
              onClick={handleBookTableClick}
              variant="contained"
              color="primary"
              sx={{
                marginLeft: "24px",
                fontSize: "16px",
                fontWeight: 700,
                textTransform: "none",
                color: "white",
              }}
            >
              Book a Table
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
