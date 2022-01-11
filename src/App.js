import {Link} from "react-router-dom";
import {Button, Box, Typography, Grid, Card, CardMedia} from "@mui/material";
import Image from 'material-ui-image';
import NavBar from "./components/navbar";
import React, {useEffect, useState} from "react";



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
  const [scrollPosition, setScrollPosition] = useState(103);

  const handleScroll = () => {
    setScrollPosition(window.scrollY + 103);
  }

  document.addEventListener('scroll', handleScroll);

  const imageName = `imageSequence/clothy2_0${scrollPosition}.png`

  //DOM
  if(width < 900){
    return( <html lang = "en">
        <div>
          <NavBar/>
          <Box sx = {{bgcolor: '#000000'}}>
            <Grid container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid item xs = {12} md = {6}>
                <Card sx = {{position: 'relative'}}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="auto"
                    width = "auto"
                    image={imageName}
                    title="background cloth image"
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
                <Image  disableTransition = "true" aspectRatio = "1" src = {imageName} sx = {{marginLeft: "10px"}}/>
              </Grid>
            </Grid>
          </Box>
          <Box sx = {{bgcolor: '#000000'}}>
            <Grid container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid item xs = {12} md = {12}>
                <Typography variant = "h2" fontWeight="400" color = "secondary" align = "center" sx = {{marginTop: "10px"}}>
                  ABOUT ME
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </html>
    );
  }
}
 

