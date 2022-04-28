import NavBar from "../components/navbar"
import Footer from "../components/footer"
import {Box, Grid, CardMedia} from "@mui/material"

export default function Gallery() {
    return (
     <>
       <NavBar/>
       <Box sx = {{bgcolor: "black"}}>
         <Grid container spacing = {5} width = "80%" sx={{margin: "0 auto"}}>
           <Grid item xs = {12} md = {6} lg = {4}>
             <CardMedia
             component="img"
             image="Vice.jpg"
             alt="Vice"
             sx = {{marginTop:"20px"}}
             />
           </Grid>
           <Grid item xs = {12} md = {6} lg = {4}>
           <CardMedia
             component="img"
             image="Vice.jpg"
             alt="Vice"
             sx = {{marginTop:"20px"}}
             />
           </Grid>
           <Grid item xs = {12} md = {6} lg = {4}>
           <CardMedia
             component="img"
             image="Vice.jpg"
             alt="Vice"
             sx = {{marginTop:"20px"}}
             />
              <CardMedia
             component="img"
             image="Vice.jpg"
             alt="Vice"
             sx = {{marginTop:"20px"}}
             />
           </Grid>
           
         </Grid>
       </Box>
       <Footer/>
     </>
    );
  }