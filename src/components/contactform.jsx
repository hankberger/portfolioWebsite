import {Typography, Box, Grid, CardMedia, TextField, Button, Container, Link} from '@mui/material';
import Footer from "./footer"

function ContactForm() {
  const styles = {
    root: {
      background: "white"
    },
    input: {
      color: "white"
    }
  };

    return( 
    <div>
      <Box sx = {{ bgcolor: '#000000', color: '#ffffff', padding: '20px'}}>
      <Container align = "left" component="main" maxWidth="xs">
    
          <div>
            <form  noValidate>
              <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={12}>
                  <Typography variant = "h3" fontWeight={300}>
                    Contact Me
                  </Typography>
                  <Typography fontWeight={200}>
                    I'm here to answer any questions you may have about working with me. Reach out and I'll respond as soon as I can. Feel free to contact me at: <br>
                    </br><br></br><em>contact@hankberger.com</em><br></br><em>715-690-9916</em><br></br><a target = "_blank" href = 'https://drive.google.com/file/d/1vjaMIAMa0LOcWYcJZVJfURJy7sigKyRB/view' style={{color: 'white'}}>resume</a>
                  </Typography>
                  
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    color="secondary"
                    borderColor = "secondary"
                    className='root'
                    // autoFocus
                    
                    sx = {{ color: '#0000000', backgroundColor: '#ffffff'}}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    sx = {{ bgcolor: '#ffffff'}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    color = "primary"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx = {{ bgcolor: '#ffffff'}}
                  />
                </Grid>
               
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    color = "primary"
                    multiline
                    minRows = "3"
                    required
                    fullWidth
                    id="email"
                    label="Message"
                    name="email"
                    autoComplete="email"
                    sx = {{ bgcolor: '#ffffff'}}
                  />
                </Grid>
              </Grid>
             
              <Grid container justifyContent="flex-end" alignItems={"center"} justifyContent={"center"}>
                <Grid item >
                <Button
                  type="submit"
                  
                  variant="contained"
                  color="secondary"
                  sx={{marginTop: "16px"}}
                >
                  Send Message
                </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Box>
    
      <Footer/>
    </div>
   )
}

export default ContactForm;