import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CustomContainer from "./CustomContainer";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: "18px",
    textTransform: "uppercase",
  });
  const ButtonBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Product", Link: "/Product" },
    { Name: "Portfolio", Link: "/Portfolio" },
    { Name: "Blog", Link: "/Blog" },
    { Name: "Contact Us", Link: "/Contact" },
  ];
  const [open , setOpen] = useState(false)
  return (
    <AppBar
      sx={{
        padding: 2,
      }}
    >
      <CustomContainer>
        <StyledToolbar>
          <Box
            sx={{
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            logo
          </Box>
          <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {item.Name}
              </Typography>
            ))}
          </MenuBox>
          <ButtonBox>
            <Button
              variant="outlined"
              sx={{
                display:{
                    xs:'none',
                    sm:'none',
                    md:'block'
                },
                padding: "10px 20px",
                fontSize: "18px",
                border: "2px solid white",
                color: "white",
              }}
            >
              Login
            </Button>
            <MenuIcon
            sx={{
                display:{
                    xs:'block',
                    sm:'block',
                    md:'none',
                    color:'white',
                    height:"30px",
                    width:'30px',
                    cursor:'pointer'
                }
                
            }}
            onClick={() => setOpen(!open)}
            />
          </ButtonBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width:'600px' , height:'80vh' }}>
        {MenuItems.map((item) => (
              <MenuItem
                sx={{
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {item.Name}
              </MenuItem>
            ))}
        </Box>
    
      </Menu>
      </CustomContainer>
    </AppBar>
  );
};

export default Navbar;
