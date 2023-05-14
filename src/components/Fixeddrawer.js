import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { Box, Typography } from '@mui/material';


function Fixeddrawer(){
    

    const menuIcon=(value)=>{
        switch (value) {
            case 'Dashboard':
            case 'Reports':
              return <GridViewIcon/>;
            case 'Sign Out':
              return <LogoutIcon/>;
            default:
              return <BusinessCenterRoundedIcon/>;
          }
    }
    return(

        <Drawer
        sx={{
          width: "250px",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "250px",
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <List sx={{backgroundColor:"hsl(249deg 68% 29%)"}}>
          {['Dashboard','Manage Subscription', 'Young Brain', 'Mid Career', 'Vendor',
          'Consultant','Reports','Sign Out'].map((item,index) => (
            <ListItem key={index} disablePadding sx={{color:"#e0e0e0",margin:"10px 0"}}>
              <ListItemButton>
                <ListItemIcon sx={{color:"#e0e0e0"}}>
                    {menuIcon(item)}
                </ListItemIcon>
                <Typography sx={{fontSize:"15px"}}>{item}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

    )
}

export default Fixeddrawer