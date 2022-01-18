import {Typography, Box, Grid, CardMedia, Card, Button, Link} from '@mui/material';
import Image from 'material-ui-image';
import React, {useEffect, useState} from "react";

function About() {
    var imageWidth = (window.innerHeight) / 16 ;
    return(
        <div>
        <Box sx = {{bgcolor: '#000000'}}>
        <Grid  container spacing = {0} sx = {{backgroundColor: "primary"}}>
              <Grid justifyContent = "center" item xs = {12} sm = {6} md = {6} lg = {5} xl = {5}>
                <Box>
                    <CardMedia
                        component="img"
                        alt="Red Cloth Background Image"
                        height={window.innerHeight}
                        image="Vice.jpg"
                        title= "Vice"
                        sx = {{aspectRatio: "16/9", maxWidth: "500px"}}
                        
                    />
                </Box>
                
              </Grid>
              <Grid item xs = {12} sm = {6} md = {6} lg = {6} xl = {6}>
                <Typography align = "left" fontWeight = "400" variant = "h1" color = "secondary" sx = {{marginTop: "10%", marginLeft: "0px"}}>
                  About
                </Typography>
                <Typography fontSize = "150%" align = "left" fontWeight = "200" variant = "h6" color = "secondary" sx = {{marginTop: "0px", marginLeft: "10%", marginRight: "15%"}}>
                  I am a creative developer and designer focused on combining my passion for art and technology wherever I can.
                  I'm an upcoming graduate from the University of Minnesota: Twin Cities in Computer Science.
                </Typography>
                <Typography fontSize = "150%" align = "left" fontWeight = "200" variant = "h6" color = "secondary" sx = {{marginBottom: "20px", marginTop: "20px", marginLeft: "10%", marginRight: "15%"}}>
                  I have a love for exploration, whether it be new places or new ideas.
                  Other hobbies of mine include generative/simulated 3D art, urban photography, chess, and piano.
                </Typography>
                <Link variant = "h6" fontWeight="100" color = "#ffffff" href = "/"  marginTop = "10px" sx = {{marginTop: "20px", marginLeft: "10%"}} >
                    resume
                </Link>
              </Grid>
            </Grid>
        </Box>
        </div>);
}
export default About;
