import Navbar from "../components/navbar"
import Footer from "../components/footer"
import {Box, Grid, CardMedia, Typography, Button} from "@mui/material"

export default function Bruh(){
    return( 
    <>
    <Navbar></Navbar>
    <Box sx = {{bgcolor: "black"}}>
        <Typography variant = "h3" align="center" color="white">
            Gallery
        </Typography>
        <Box textAlign='center'>
                  <Button target = "_blank" href = "https://www.instagram.com/hankberger/?hl=en" align = "right" color = "secondary" variant = "outlined" sx = {{marginRight: "12px" ,marginTop: "40px", align: "center"}}>View More on Instagram</Button>
                  <Button href = "/" align = "right" color = "secondary" variant = "contained" sx = {{marginTop: "40px",marginLeft: "12px", align: "center"}}>Home</Button>
                </Box>
         <Grid container spacing = {5} width = "80%" sx={{alignText: "center", margin: "0 auto"}}>
         
           <Grid item xs = {12} md = {4} lg = {4}>
           <CardMedia
                component="video"
                alt="cloud"
                image={"/media/cloud_low.mp4"}
                title= "Cloud"
                autoPlay
                muted
                loop
                sx = {{marginTop: "20px"}}
            />
           
            <CardMedia
                component="video"
                alt="reflection"
                image={"/media/reflectionlow.mp4"}
                title= "Reflection"
                autoPlay
                muted
                loop
                sx = {{marginTop: "20px"}}
            />
             
             <CardMedia
                component="img"
                alt="escapade"
                image="/media/Escapade.jpg"
                title= "escapade"
                sx = {{marginTop: "20px"}}
            />
            
           </Grid>
           <Grid item xs = {12} md = {4} lg = {4}>
           
           <CardMedia
                component="video"
                alt="reflection"
                image={"/media/frac_low.mp4"}
                title= "Cloud"
                autoPlay
                muted
                loop
                sx = {{marginTop: "20px"}}
            />

            <CardMedia
                component="img"
                alt="foggy"
                image="/media/Foggy.png"
                title= "foggy"
                sx = {{marginTop: "20px"}}
            />

            <CardMedia
                component="video"
                alt="eclipse"
                image={"/media/eclipse.mp4"}
                title= "eclipse"
                autoPlay
                muted
                loop
                sx = {{marginTop: "20px"}}
            />
           
           </Grid>
           <Grid item xs = {12} md = {4} lg = {4}>
           <CardMedia
                component="img"
                alt="DesertHand"
                image="/media/handdesert0077.jpg"
                title= "Desert"
                sx = {{marginTop: "20px"}}
            />

            <CardMedia
                component="video"
                alt="daysgone"
                image={"/media/TheDaysHaveBeenShorterLately.mp4"}
                title= "dayshavebeenshorter"
                autoPlay
                muted
                loop
                sx = {{marginTop: "20px"}}
            />
            <CardMedia
                component="img"
                alt="personlines"
                image="/media/personlines0088.jpg"
                title= "personlines"
                sx = {{marginTop: "20px"}}
            />
          
           </Grid>
           
         </Grid>
       </Box>
       <Footer/>
    </>);
   
}