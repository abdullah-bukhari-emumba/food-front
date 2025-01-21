import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Divider,
  Container,
} from "@mui/material";
import foodImg1 from "../../assets/food-image1.jpg";
import foodImg2 from "../../assets/food-image2.jpg";
import foodImg3 from "../../assets/food-image3.jpg";
import foodImg4 from "../../assets/food-image4.jpg";
import { PopularBreakfastIcon } from "../../assets/PopularBreakfastIcon";
import { SpecialLunchIcon } from "../../assets/SpecialLunchIcon";
import { KnifeForkIcon } from "../../assets/KnifeForkIcon";

const menuItems = {
  breakfast: [
    {
      name: "Pancakes",
      price: "$90",
      description: "Sweet and fluffy",
      img: foodImg1,
    },
    {
      name: "Omelette",
      price: "$80",
      description: "Eggs with veggies",
      img: foodImg2,
    },
    {
      name: "French Toast",
      price: "$85",
      description: "Crispy bread slices",
      img: foodImg3,
    },
    {
      name: "Waffles",
      price: "$95",
      description: "Served with syrup",
      img: foodImg4,
    },
    {
      name: "Burrito",
      price: "$100",
      description: "Breakfast special",
      img: foodImg1,
    },
    {
      name: "Hash Browns",
      price: "$70",
      description: "Crispy potato treat",
      img: foodImg2,
    },
    {
      name: "Scrambled Eggs",
      price: "$75",
      description: "Fluffy eggs",
      img: foodImg3,
    },
    {
      name: "Sausages",
      price: "$90",
      description: "Juicy and delicious",
      img: foodImg4,
    },
  ],
  lunch: [
    {
      name: "Club Sandwich",
      price: "$110",
      description: "Classic stack",
      img: foodImg2,
    },
    {
      name: "Chicken Wrap",
      price: "$105",
      description: "Crunchy delight",
      img: foodImg1,
    },
    {
      name: "Pasta Alfredo",
      price: "$120",
      description: "Creamy sauce",
      img: foodImg4,
    },
    {
      name: "Greek Salad",
      price: "$85",
      description: "Fresh veggies",
      img: foodImg3,
    },
    {
      name: "Burger Meal",
      price: "$125",
      description: "Juicy patty",
      img: foodImg1,
    },
    {
      name: "Grilled Cheese",
      price: "$95",
      description: "Melted goodness",
      img: foodImg2,
    },
    {
      name: "Spaghetti",
      price: "$130",
      description: "Rich tomato sauce",
      img: foodImg3,
    },
    {
      name: "Cheese Pizza",
      price: "$140",
      description: "Baked perfection",
      img: foodImg4,
    },
  ],
  dinner: [
    {
      name: "Steak",
      price: "$200",
      description: "Cooked to order",
      img: foodImg1,
    },
    {
      name: "Grilled Fish",
      price: "$210",
      description: "Seafood special",
      img: foodImg2,
    },
    {
      name: "Tacos",
      price: "$120",
      description: "Mexican flavor",
      img: foodImg3,
    },
    {
      name: "Salmon",
      price: "$220",
      description: "Tender and flaky",
      img: foodImg4,
    },
    {
      name: "Soup",
      price: "$80",
      description: "Warm and hearty",
      img: foodImg1,
    },
    {
      name: "Fried Rice",
      price: "$100",
      description: "Seasoned goodness",
      img: foodImg2,
    },
    {
      name: "Chicken Curry",
      price: "$150",
      description: "Spicy delight",
      img: foodImg3,
    },
    {
      name: "Seafood Platter",
      price: "$250",
      description: "Generous mix",
      img: foodImg4,
    },
  ],
};

const MenuSection = () => {
  const [selectedTab, setSelectedTab] =
    useState<keyof typeof menuItems>("breakfast");

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: keyof typeof menuItems
  ) => {
    setSelectedTab(newValue);
  };

  const renderMenuItems = () => {
    return menuItems[selectedTab].map((item, index) => (
      <Grid item xs={12} md={6} key={index}>
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
          <Box sx={{ width: "100px", mr: 2 }}>
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "24px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "black",
                mb: 1,
              }}
            >
              {item.name}
            </Typography>

            <Divider sx={{ backgroundColor: "#ccc", marginBottom: "8px" }} />

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "21px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#555",
              }}
            >
              {item.description}
            </Typography>
          </Box>
          <Box textAlign="right" sx={{ ml: 2 }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "24px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                borderBottom: "1px solid gray",
                paddingBottom: "8px",
                color: (theme) => theme.palette.primary.main,
              }}
            >
              {item.price}
            </Typography>
          </Box>
        </Box>
      </Grid>
    ));
  };

  return (
    <Box
      id="menu-section"
      sx={{
        backgroundColor: "#f1f8ff",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 20 },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Pacifico",
            alignSelf: "center",
            fontSize: "20px",
            color: (theme) => theme.palette.primary.main,
            textAlign: "center",
            // fontWeight: 600,
            mb: 1,
            // textTransform: "uppercase",
          }}
        >
          ______
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Pacifico",
            fontSize: "20px",
            color: (theme) => theme.palette.primary.main,
            textAlign: "center",
            // fontWeight: 600,
            mb: 1,
            // textTransform: "uppercase",
          }}
        >
          Food Menu
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Pacifico",
            alignSelf: "center",
            fontSize: "20px",
            color: (theme) => theme.palette.primary.main,
            textAlign: "center",
            // fontWeight: 600,
            mb: 1,
            // textTransform: "uppercase",
          }}
        >
          ______
        </Typography>
      </Container>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          fontSize: "42px",
          textAlign: "center",
          color: "black",
          mb: 4,
        }}
      >
        Most Popular Items
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        sx={{
          mb: 4,
          "& .MuiTabs-indicator": {
            backgroundColor: (theme) => theme.palette.primary.main,
            height: "4px",
          },
        }}
      >
        <Tab
          value="breakfast"
          icon={
            <Box sx={{ marginRight: "20px" }}>
              <PopularBreakfastIcon />
            </Box>
          }
          iconPosition="start"
          label={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "20px 10px",
                textAlign: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "19.2px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Popular
              </span>
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "black",
                  fontWeight: 700,
                  lineHeight: "19.2px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Breakfast
              </span>
            </Box>
          }
          sx={{ textTransform: "none" }}
        />
        <Tab
          value="lunch"
          icon={
            <Box sx={{ marginRight: "20px" }}>
              <SpecialLunchIcon />
            </Box>
          }
          iconPosition="start"
          label={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "20px 10px",
                textAlign: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19.2px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Special
              </span>
              <span
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "19.2px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Lunch
              </span>
            </Box>
          }
          sx={{ textTransform: "none" }}
        />
        <Tab
          value="dinner"
          icon={
            <Box sx={{ marginRight: "20px" }}>
              <KnifeForkIcon />
            </Box>
          }
          iconPosition="start"
          label={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "20px 10px",
                textAlign: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19.2px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Lovely
              </span>
              <span
                style={{
                  fontFamily: "Poppins",
                  color: "black",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "19.2px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Dinner
              </span>
            </Box>
          }
          sx={{ textTransform: "none" }}
        />
      </Tabs>

      <Grid container spacing={2}>
        {renderMenuItems()}
      </Grid>
    </Box>
  );
};

export default MenuSection;
