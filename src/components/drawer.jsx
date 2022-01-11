import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const menucss = {
    textDecoration: "none",
    color: "white",
    fontSize: "200px",
    marginLeft: "20px",
}

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <div>
            <Drawer anchor = 'right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText sx ={menucss}>
                    <Link to="/" sx = {menucss}>HOME</Link>
                </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    <Link to="/about">About</Link>
                </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    <Link to="/contact">Contact</Link>
                </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                    <Link to="/about">Faq</Link>
                </ListItemText>
                </ListItem>
            </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon color = "primary"/>
            </IconButton>
        </div>
    );
  }
  export default DrawerComponent;
