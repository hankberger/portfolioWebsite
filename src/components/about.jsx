import {Typography, Box, Grid, CardMedia, Card, Button, Link} from '@mui/material';
import Image from 'material-ui-image';
import React, {useEffect, useState} from "react";

function About() {
    var imageWidth = (window.innerHeight) / 16 ;
    return(
        <div>
        <Box sx = {{bgcolor: '#000000'}}>
        <Grid  container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid justifyContent = "center" item xs = {12} sm = {6} md = {6} lg = {6} xl = {6}>
                <Box>
                    <CardMedia
                      
                        component="video"
                        alt="Tree 3D Video"
                        height={window.innerHeight}
                        image={"Treesies.mp4"}
                        title= ":)"
                        autoPlay
                        muted
                        loop
                        sx = {{aspectRatio: "4/5", maxWidth: "500px", margin: "auto"}}
                        
                    />
                </Box>
                
              </Grid>
              <Grid item xs = {12} sm = {5} md = {5} lg = {5} xl = {5}>
                <Typography align = "center" fontWeight = "200" variant = "h4" color = "secondary" sx = {{textDecoration: "underline", marginTop: "33%", marginLeft: "0px"}}>
                  GRAPHICS FOR THE 21ST CENTURY
                </Typography>
                <br/>
                <Typography fontSize = "120%" align = "left" fontWeight = "100" variant = "h6" color = "secondary" sx = {{marginTop: "0px", marginLeft: "10%", marginRight: "15%"}}>
                Make your business stand out using the cutting edge in digital creation. Using the best tools for motion design, I can help build your digital presence and help you create a strong brand for your business. 
                
                <br></br><br></br>Let’s work together to create animations for any of your needs. 
                </Typography>
                <Button href = "/view" align = "center" color = "secondary" variant = "contained" sx = {{marginLeft: "33%", marginTop: "40px", align: "center"}}>View Gallery</Button>
              </Grid>
            </Grid>
        </Box>
        </div>);
}
export default About;
