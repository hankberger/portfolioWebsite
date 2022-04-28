import { Typography, Box, Grid} from "@mui/material"
import NavBar from "../components/navbar"
import {createTheme} from '@mui/material/styles';
import ContactForm from "../components/contactform"

const font = "'Rubik', sans-serif";

let boxHeight = window.innerHeight - 90;

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
    textAlign: "center"
  } ,
  box:{
    textAlign: "center",
    display: "flex",
     height: boxHeight, 
     width: "100%", 
     textAlign:"center",
     color: "red",
  
     margin: "auto"
  }
});

export default function Contact(){
    return(
        <div>
             <NavBar/>
             <Box sx = {{bgcolor: "black"}}>
               <Grid container alignItems = "center" justifyContent = "center" spacing = {0} sx = {{backgroundColor: "primary"}}>
                 <Grid item sx = {12} md = {12}>
                   <Box style = {theme.box}>
                     <div style={{margin: "auto", width: "100%", backgroundColor: "white"}}>
                     <ContactForm/>
                     </div>
                   </Box>
                 </Grid>
               </Grid>
             </Box>
        </div>
    )
}