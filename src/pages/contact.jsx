import { Typography } from "@mui/material"
import NavBar from "../components/navbar"
import {createTheme} from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const font = "'Rubik', sans-serif";

const theme = createTheme({
  palette: {
    primary:{
      main: '#000000'
    },
    secondary: {
      main: '#ffffff'
    }
  }, 
  typography: {
    fontFamily: font,
  } 
});

export default function Contact(){
    return(
        <div>
             <NavBar/>
             <Typography>
                 Hank
             </Typography>
        </div>
       
    )
}