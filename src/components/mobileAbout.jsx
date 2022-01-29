import {Box, Grid, CardMedia, Typography, Button, Card, Link} from '@mui/material';

function MobileAbout() {
    return(
        <div>
       <Box sx = {{bgcolor: '#000000'}}>
        <Grid container spacing = {0} sx = {{backgroundColor: "primary"}}>
            <Grid item xs = {12} md = {12}>
            <Card sx = {{position: 'relative'}}>
                <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    alt="Red Cloth Background Image"
                    height={window.innerHeight}
                    width = "auto"
                    image= "Vice.jpg"
                    title= "Hank Berger"
                />
                </Box>
                <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    top: '15%',
                    width: '100%',
                    color: 'white',
                    padding: '0px',
                }}
                >
                <Typography align = "center" fontWeight = "400" variant = "h1" color = "secondary" sx = {{ fontSize: "420%",marginTop: "0px", marginLeft: "0px"}}>
                    About
                    </Typography>
                    <Typography fontSize = "125%" align = "left" fontWeight = "200" variant = "h6" color = "secondary" sx = {{marginTop: "15px", marginLeft: "10%", marginRight: "15%"}}>
                    I am a creative developer and designer focused on combining my passion for art and technology wherever I can.
                    I'm an upcoming graduate from the University of Minnesota: Twin Cities in Computer Science.
                    </Typography>
                    <Typography fontSize = "125%" align = "left" fontWeight = "200" variant = "h6" color = "secondary" sx = {{marginBottom: "20px", marginTop: "20px", marginLeft: "10%", marginRight: "15%"}}>
                    I have a love for exploration, whether it be new places or new ideas.
                    Other hobbies of mine include: generative/simulated 3D art, urban photography, chess, and piano.
                    </Typography>
                    <Link variant = "h6" fontWeight="100" color = "#ffffff" href = "/"  marginTop = "10px" sx = {{marginTop: "20px", marginLeft: "10%"}} >
                        resume
                    </Link>
                </Box>
            </Card>
            </Grid>
        </Grid>
        </Box>
        </div>);
}

export default MobileAbout;