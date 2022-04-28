import {Button, Box, Typography, Grid, Card, CardMedia} from "@mui/material";
import NavBar from "./components/navbar";
import MobileAbout from "./components/mobileAbout";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contactform";
import React, {useEffect, useState} from "react";
import Footer from "./components/footer";


const frameCount = 142;
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = `imageSequence/clothy2_0${i + 124}.png`;
  }
};

preloadImages();

export default function App() {
  //Responsive design stuff.
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
          setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  //Animation Scroll stuff.
  const [scrollPosition, setScrollPosition] = useState(124);
 
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const windowPercent = window.scrollY / windowHeight;
    const frameNum = Math.min(142, Math.floor(frameCount * windowPercent));
    requestAnimationFrame(()=>setScrollPosition(frameNum + 124));
  }

  document.addEventListener('scroll', handleScroll);

  const imageName = `imageSequence/clothy2_0${scrollPosition}.jpg`


  //Responsive Stuff :P

  var windowWidth = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  var windowHeight = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
  
  const mobileView = (width < 900) || (windowWidth < windowHeight);

  //DOM
  if(mobileView){
    //Mobile View
    return( <html lang = "en"> 
        <div>
          <NavBar/>
          <Box sx = {{bgcolor: '#000000'}}>
            <Grid container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid item xs = {12} md = {12}>
                <Card sx = {{position: 'relative'}}>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      alt="Red Cloth Background Image"
                      height={window.innerHeight - 70}
                      width = "auto"
                      image={imageName}
                      title= {imageName}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      top: '25%',
                      width: '100%',
                      color: 'white',
                      padding: '0px',
                    }}
                  >
                     <Typography align = "center" fontWeight = "400" variant = "h1" color = "secondary" sx = {{ fontSize: "420%",marginTop: "0px", marginLeft: "0px"}}>
                      Hi, I'm Hank.
                      </Typography>
                      <Typography align = "center" fontWeight = "300" variant = "h5" color = "secondary" sx = {{fontSize: "140%", marginTop: "0px", marginLeft: "0px"}}>
                        Software Developer and Artist.
                      </Typography>
                      <Box textAlign='center'>
                        <Button align = "right" color = "secondary" variant = "outlined" sx = {{marginRight: "12px" ,marginTop: "40px", align: "center"}}>Gallery</Button>
                        <Button align = "right" color = "secondary" variant = "contained" sx = {{marginTop: "40px",marginLeft: "12px", align: "center"}}>Contact</Button>
                      </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
         <MobileAbout/>
         <Contact/>
        </div>
      </html>
    );
  } else {
    //Browser View
    return (
      <html lang = "en">
        <div>
          <NavBar/>
          <Box sx = {{bgcolor: '#000000'}}>
            <Grid  container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid justifyContent = "center" item xs = {12} sm = {6} md = {7} lg = {6} xl = {7}>
                <Typography align = "center" fontWeight = "400" variant = "h1" color = "secondary" sx = {{marginTop: "250px", marginLeft: "0px"}}>
                  Hi, I'm Hank.
                </Typography>
                <Typography align = "center" fontWeight = "300" variant = "h5" color = "secondary" sx = {{marginTop: "0px", marginLeft: "0px"}}>
                  Motion Graphics and Digital Artist.
                </Typography>
                <Box textAlign='center'>
                  <Button href = "/gallery" align = "right" color = "secondary" variant = "outlined" sx = {{marginRight: "12px" ,marginTop: "40px", align: "center"}}>Gallery</Button>
                  <Button href = "/contact" align = "right" color = "secondary" variant = "contained" sx = {{marginTop: "40px",marginLeft: "12px", align: "center"}}>Contact</Button>
                </Box>
                
              </Grid>
              <Grid item xs = {12} sm = {6} md = {5} lg = {6} xl = {4}>
                <CardMedia
                    component="img"
                    alt="Red Cloth Background Image"
                    height={window.innerHeight - 70}
                    image={imageName}
                    title= {imageName}
                    sx = {{aspectRatio: "4/5"}}
                  />
              </Grid>
            </Grid>
          </Box>
         <About/>
         {/* <Projects/> */}
         <Contact/>
        </div>
      </html>
    );
  }
}
 

