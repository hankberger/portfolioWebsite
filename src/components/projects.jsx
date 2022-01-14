import {Typography, Box, Grid, CardMedia} from '@mui/material';
import Image from 'material-ui-image';

function Projects() {
    return( 
    <Box sx = {{ bgcolor: '#000000'}}>
        <Typography variant = "h2" fontWeight="300" color = "secondary" align = "center" sx = {{marginTop: "0px"}}>
            Projects
        </Typography>
        <Grid alignItems = "center" container spacing = {0} sx = {{backgroundColor: "primary"}}>
            <Grid  item xs = {12} sm = {12} md = {6} xl = {6}>
                <Box>
                <CardMedia
                    component="img"
                    alt="Red Cloth Background Image"
                    justify = "center"
                    image= "me.jpg"
                    title= "Hank Berger"
                    align = "center"
                    sx = {{marginLeft: "auto", marginRight: "auto", marginTop: "50px", width: "200px", height: "auto" }}
                />
                </Box>
            </Grid>

            <Grid item xs = {12} sm = {12} md = {6} xl = {6}>
               <Typography align = "center" color = "secondary">
                   This is my description of who I am.
               </Typography>
            </Grid>
        </Grid>
    </Box>)
}

export default Projects;