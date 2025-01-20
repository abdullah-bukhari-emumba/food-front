import { Box } from "@mui/material";
import map from "../../assets/map.png"

const ContactMap = () => {
  return (
    <Box
      sx={{
        height: '100%',
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
        }
      }}
    >
      <img src={map} alt="Location Map" />
    </Box>
  );
};

export default ContactMap;
