import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FEA116',
        },
    },
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontSize: '62px',
            fontWeight: 800,
            lineHeight: '93px',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
        },
        body1: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '200px',
                    height: '56px',
                    top: '499px',
                    left: '290px',
                    padding: '16px 48px',
                    gap: '10px',
                    opacity: 0,
                }
            }
        }
    }
});

export default theme;