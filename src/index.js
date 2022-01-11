
import { render } from "react-dom";
import { 
        BrowserRouter,
        Routes,
        Route
       } from "react-router-dom";
import App from "./App";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import {createTheme} from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

document.title = "Hank Berger | Developer";

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

const rootElement = document.getElementById("root");
render(
        <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path = "/" element = {<App/>} />
            <Route path = "contact" element = {<Contact/>} />
            <Route path = "gallery" element = {<Gallery/>} />
          </Routes>
          </ThemeProvider>
        </BrowserRouter>,
  
         rootElement
);