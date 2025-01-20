import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FEA116',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#666565',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F1F8FF',
        },
    },
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
        h1: {
            fontSize: '62px',
            fontWeight: 800,
            lineHeight: '93px',
            textAlign: 'left',
        },
        body1: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
        },
        button: {
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
            textTransform: 'none', 
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '200px',
                    height: '56px',
                    padding: '16px 48px',
                    boxShadow: 'none', 
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                },
            },
        },
    },
});

export default theme;
