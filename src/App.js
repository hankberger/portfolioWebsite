import {Link} from "react-router-dom";
import {Button, Box, Typography, Grid, Card, CardMedia} from "@mui/material";
import NavBar from "./components/navbar";
import React, {useEffect, useState} from "react";
import { red } from "@mui/material/colors";



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
  const frameCount = 142;

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const windowPercent = window.scrollY / windowHeight;
    const frameNum = Math.min(142, Math.floor(frameCount * windowPercent));
    requestAnimationFrame(()=>setScrollPosition(frameNum + 124));
  }

  document.addEventListener('scroll', handleScroll);

  const imageName = `imageSequence/clothy2_0${scrollPosition}.png`

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = `imageSequence/clothy2_0${i + 124}.png`;
    }
  };
  
  preloadImages();

  //DOM
  if(width < 900){
    return( <html lang = "en">
        <div>
          <NavBar/>
          <Box sx = {{height: "25px", width: "300px", bgcolor: 'primary'}}/>
          <Box sx = {{bgcolor: '#000000'}}>
            <Grid container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid item xs = {12} md = {6}>
                <Card sx = {{position: 'relative'}}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    alt="Red Cloth Background Image"
                    height="auto"
                    width = "auto"
                    image={imageName}
                    title= {imageName}
                  />
                  <Typography align = "center" fontWeight = "400" variant = "h1" color = "secondary" sx = {{marginTop: "25%", marginLeft: "0px"}}>
                  Hi, I'm Hank.
                  </Typography>
                  <Typography align = "center" fontWeight = "300" variant = "h5" color = "secondary" sx = {{marginTop: "0px", marginLeft: "0px"}}>
                    Software Developer and Artist.
                  </Typography>
                  <Box textAlign='center'>
                    <Button align = "right" color = "secondary" variant = "outlined" sx = {{marginRight: "12px" ,marginTop: "40px", align: "center"}}>Gallery</Button>
                    <Button align = "right" color = "secondary" variant = "contained" sx = {{marginTop: "40px",marginLeft: "12px", align: "center"}}>Contact</Button>
                  </Box>
                </div>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box sx = {{bgcolor: '#000000'}}>
            <Grid container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid item xs = {12} md = {12}>
                <Typography variant = "h2" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                  ABOUT ME
                </Typography>
                <Typography variant = "h4" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography variant = "h4" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography variant = "h4" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography variant = "h4" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </html>
    );
  } else {
    return (
      <html lang = "en">
        <div>
          <NavBar/>
          <Box sx = {{bgcolor: '#000000'}}>
            <Grid  container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid justifyContent = "center" item xs = {12} md = {6}>
                <Typography align = "center" fontWeight = "400" variant = "h1" color = "secondary" sx = {{marginTop: "25%", marginLeft: "0px"}}>
                  Hi, I'm Hank.
                </Typography>
                <Typography align = "center" fontWeight = "300" variant = "h5" color = "secondary" sx = {{marginTop: "0px", marginLeft: "0px"}}>
                  Software Developer and Artist.
                </Typography>
                <Box textAlign='center'>
                  <Button align = "right" color = "secondary" variant = "outlined" sx = {{marginRight: "12px" ,marginTop: "40px", align: "center"}}>Gallery</Button>
                  <Button align = "right" color = "secondary" variant = "contained" sx = {{marginTop: "40px",marginLeft: "12px", align: "center"}}>Contact</Button>
                </Box>
                
              </Grid>
              <Grid item xs = {12} md = {6}>
                <CardMedia
                    component="img"
                    alt="Red Cloth Background Image"
                    height="auto"
                    width = "auto"
                    image={imageName}
                    title= {imageName}
                  />
              </Grid>
            </Grid>
          </Box>
          <Box sx = {{bgcolor: '#000000'}}>
            <Grid container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid item xs = {12} md = {12}>
                <Typography variant = "h2" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                  ABOUT ME
                </Typography>
                <Typography variant = "h4" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography variant = "h4" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography variant = "h4" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography variant = "h4" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </html>
    );
  }
}
 

