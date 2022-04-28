import { AppBar, Link, Box, Toolbar, Typography,} from '@mui/material';
import React, {useEffect, useState} from "react";

const linkCss = {padding: '12px', fontSize: '17px', fontWeight: '400'}

//NavBar
const NavBar = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
   
    
    if(width <= 780){
        return(<AppBar position = "static" color = 'primary' elevation = {0} sx = {{margin: 0, padding: 0, listStyle: 'none'}} >
                    <Toolbar flexWrap = 'wrap'>
                    <Box justifyContent = "center" maxWidth = "100%"   margin = '10px' marginLeft = '0px' align = 'center' display = 'flex' flexGrow = {1}>
                        <a href = '/' align = 'center'>
                        <img align = 'center' height = '70px' width = 'auto' src = "HankBergerLogo.png" alt = "Hank Berger Logo"/>
                        </a>    
                    </Box>
                   
                    </Toolbar> 
                </AppBar>);
    } else {
        return(
            <AppBar position = "static" color = 'primary' elevation = {0} sx = {{margin: 0, padding: 0, listStyle: 'none'}} >
                <Toolbar flexWrap = 'wrap'>
                <Box margin = '10px' align = 'center' display = 'flex' flexGrow = {1}>
                    <a href = '/' align = 'center'>
                    <img align = 'left' height = '70px' width = 'auto' src = "HankBergerLogo.png" alt = "Hank Berger Logo" noWrap/>
                    </a>
                </Box>
                <nav align = "center">
                    <Link variant = "button" color = "#ffffff" href = "/" underline = "hover" align = "center" sx = {linkCss}>
                        HOME
                    </Link>
                    <Link variant = "button" color = "#ffffff" href = "/view" underline = "hover" align = "center" sx = {linkCss}>
                        GALLERY
                    </Link>
                    <Link variant = "button" color = "#ffffff" href = "/contact" underline = "hover" align = "center" sx = {linkCss}>
                        CONTACT ME
                    </Link>
                </nav>
                </Toolbar>
            </AppBar>
        );
        
    }
}

export default NavBar;