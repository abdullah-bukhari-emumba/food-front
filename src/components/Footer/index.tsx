import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      backgroundColor: '#0F172B', 
      color: 'white', 
      pt: 4, 
      pb: 2,
      px: { xs: 2, md: 12 }
    }}>
      <Container maxWidth="xl">
        <Grid 
          container 
          sx={{ 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Grid 
            item 
            xs={12} 
            md={6}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              mb: { xs: 2, md: 0 }
            }}
          >
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Link href="/" sx={{ 
                color: 'white', 
                textDecoration: 'none', 
                '&:hover': { color: theme.palette.primary.main } 
              }}>
                Home
              </Link>
              <Link href="/contact" sx={{ 
                color: 'white', 
                textDecoration: 'none', 
                '&:hover': { color: theme.palette.primary.main } 
              }}>
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid 
            item 
            xs={12} 
            md={6} 
            sx={{ 
              textAlign: { xs: 'center', md: 'right' }
            }}
          >
            <Typography variant="body2" sx={{ color: '#6C757D' }}>
              © Your Site Name. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
