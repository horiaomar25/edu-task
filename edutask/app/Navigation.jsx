"use client"
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import TaskForm from "../Components/TaskForm";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = 240;
const navItems = [
  { text: "Home", icon: <HomeIcon />, href: "/" },
  { text: "Dashboard", icon: <DashboardIcon />, href: "/dashboard"},
  { text: "Tasks", icon: <TaskIcon />, href: "/tasks" },
];

const Navigation = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // Create a new state variable, isFormOpen, and its setter function, setIsFormOpen.
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", margin: 0, padding: 0 }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Edutask
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.text} href={item.href} sx={{ textAlign: "center", textDecoration: 'none', color: 'inherit' }} passHref>
           
              {item.icon && (
                <ListItemAvatar sx={{ minWidth: "auto", marginRight: "8px" }}>
                  {item.icon}
                </ListItemAvatar>
              )}
              <ListItemText primary={item.text} sx={{ textDecoration: 'none' }} />
            
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
  

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ background: "linear-gradient(to right, #8e24aa, #673ab7)" }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                EduTask
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <Link key={item} href={item.href} passHref>
                  <Button
                    startIcon={item.icon} // start prop to add icon
                    sx={{ color: "#fff", justifyContent: "flex-start" , mr: index !== navItems.length - 1 ? 2 : 0}}
                  >
                    {item.text}
                  </Button>
                </Link>
              ))}
            </Box>

            <Button
              onClick={handleOpen}
              sx={{
                margin: "15px",
                float: "right",
                border: "1px solid #fff",
                color: "#fff",
              }}
              variant="outlined"
            >
              {" "}
              Create Task +{" "}
            </Button>

            <Modal
              open={modalOpen}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <TaskForm handleClose={handleClose} />
            </Modal>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        <Toolbar />
     
      </Box>
    </>
  );
};

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;
