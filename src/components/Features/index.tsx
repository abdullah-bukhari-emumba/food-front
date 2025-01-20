import { Box, Grid, Typography, useTheme } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function FeaturesSection() {
  const theme = useTheme();

  const featuresData = [
    {
      icon: <RestaurantIcon fontSize="large" />,
      title: 'Master Chefs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: <LocalDiningIcon fontSize="large" />,
      title: 'Quality Food',
      description: 'Praesent nec turpis at sem ultrices vehicula ac iaculis arcu.'
    },
    {
      icon: <ShoppingCartIcon fontSize="large" />,
      title: 'Online Order',
      description: 'Aliquam neque purus, sagittis quis sem quis, ultrices feugiat leo.'
    },
    {
      icon: <HeadsetMicIcon fontSize="large" />,
      title: '24/7 Service',
      description: 'Duis blandit metus non tortor dictum, ac tincidunt turpis aliquet.'
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#F8F8F8',
        py: 5,
        px: 7,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {featuresData.map((feature, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#3A3A3A',
                textAlign: 'center',
                borderRadius: '8px',
                p: 3,
                transition: 'background-color 0.3s ease, color 0.3s ease',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: '#FFFFFF',
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}