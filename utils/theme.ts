import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = ({ darkTheme }: { darkTheme?: boolean }) =>
    createMuiTheme({
        palette: {
            type: darkTheme ? 'dark' : 'light',
            primary: {
                main: green[500],
            },
            secondary: {
                main: green[300],
            },
        },
    });

export default theme;