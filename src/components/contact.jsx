import {Typography, Box, Grid, CardMedia, TextField, Button, Container, Link} from '@mui/material';

function Contact() {
    return( 
    <div>
      <Box sx = {{ bgcolor: '#000000'}}>
      <Container align = "left" component="main" maxWidth="xs">
    
          <div>
            <Typography component="h1" variant="h5">
              Contact Me
            </Typography>
            <form  noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    sx = {{ bgcolor: '#ffffff'}}
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
              <Button
                type="submit"
                
                variant="contained"
                color="secondary"
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Box>
    </div>)
}

export default Contact;