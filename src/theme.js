
import { createMuiTheme, withTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#332929",
        },
        secondary: {
            main: '#ff0000',
        },
    },
    typography: {
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 12,
        h1: {
            fontFamily: "'Comfortaa', cursive",
            fontSize: 40
        },
        button: {
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 16,
        },    
    },
    overrides: {
        MuiButton: {
            root: {
                
            }, 
        }, 
    },
});