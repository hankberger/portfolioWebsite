import { render } from "react-dom";
import { 
        BrowserRouter,
        Routes,
        Route
       } from "react-router-dom";
import App from "./App";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";


const rootElement = document.getElementById("root");
render(<BrowserRouter>
          <Routes>
            <Route path = "/" element = {<App/>} />
            <Route path = "contact" element = {<Contact/>} />
            <Route path = "gallery" element = {<Gallery/>} />
          </Routes>
        </BrowserRouter>,
         rootElement
);