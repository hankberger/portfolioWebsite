import {Box, Grid, CardMedia, Typography, Button, Card, Link} from '@mui/material';

function MobileAbout() {
    return(
        <div>
       <Box sx = {{bgcolor: '#000000'}}>
        <Grid container spacing = {0} sx = {{backgroundColor: "primary"}}>
            <Grid item xs = {12} md = {12}>
            <Card sx = {{position: 'relative'}}>
                <Box sx={{ position: 'relative', backgroundColor: "#000000" }}>
                <CardMedia
                      
                        component="video"
                        alt="Tree 3D Video"
                        height={window.innerHeight}
                        image={"Treesies.mp4"}
                        title= ":)"
                        autoPlay
                        muted
                        loop
                        sx = {{filter: "brightness(75%)", aspectRatio: "4/5", maxWidth: "500px", margin: "auto"}}
                        
                    />
                </Box>
                <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    top: '100px',
                    align: 'center',
                    margin: 'auto',
                    width: "500px",
                    opacity: "100%",
                    color: 'white',
                    padding: '0px',
                    left: "50%",
    transform:  "translate(-50%, 0)"
                    
                }}
                >
                
                <Typography align = "center" fontWeight = "200" variant = "h4" color = "secondary" sx = {{textDecoration: "underline", marginTop: "30px", marginLeft: "0px"}}>
                  GRAPHICS FOR THE 21ST CENTURY
                </Typography>
                    <Typography fontSize = "125%" align = "left" fontWeight = "200" variant = "h6" color = "secondary" sx = {{marginTop: "15px", marginLeft: "10%", marginRight: "15%"}}>
                    Make your business stand out using the cutting edge in digital creation. Using the best tools for motion design, I can help build your digital presence and help you create a strong brand for your business. 
                
                <br></br><br></br>Let’s work together to create animations for any of your needs. 
                    </Typography>
                    <Button href = "/gallery" align = "center" color = "secondary" variant = "contained" sx = {{marginLeft: "33%", marginTop: "40px", align: "center"}}>View Gallery</Button>
                </Box>
            </Card>
            </Grid>
        </Grid>
        </Box>
        </div>);
}

export default MobileAbout;