import {Box, Link, Typography} from '@mui/material'

function Copyright(props) {
    return (
    <Box sx={{height: "50px", backgroundColor: "#000000", color: "#ffffff"}}> 
    <div style={{top:"50%"}}>
        <Typography variant="body2" color="#ffffff" align="center" {...props}>
        {'Copyright © '}
        <Link color="#ffffff" href="/">
        Hank Berger
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    </div>
  </Box>
     
    );
  }

export default function Footer(){
    return(
        <>
         <Copyright/>
        </>
    );
}