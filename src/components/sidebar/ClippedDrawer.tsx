import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import theme from '../../lib/theme';
import IconButton from "@mui/material/IconButton";
import { Outlet } from 'react-router-dom';

const drawerWidth = 58;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
        <Typography
					component="div"
					sx={{display: 'flex',justifyContent: 'flex-end',width:'1'}}
				>
					<IconButton sx={{color: theme.palette.secondary.contrastText, p:1}}>
						<SearchIcon/>
					</IconButton>
					<Typography component="div" sx={{width: 2, background:  theme.palette.background.default, mx:1, pt:2}}></Typography>
					<IconButton sx={{color: theme.palette.secondary.contrastText, p:0}}>
						<StarBorderIcon/>
					</IconButton>
					<IconButton sx= {{color: theme.palette.secondary.contrastText, p:1}} aria-label="send mail">
						<MailOutlineIcon />
					</IconButton>
					<IconButton sx= {{color: theme.palette.secondary.contrastText, p:1}} aria-label="check box">
						<CheckBoxIcon />
					</IconButton>
					<IconButton sx={{color: theme.palette.secondary.contrastText, p:1}} aria-label="">
						<ShoppingBagIcon/>
					</IconButton>
				</Typography>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Divider />
          <List>
            {['Home' , 'Add'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component="a" href={text  === "Home" ? "/" : "/item"}>
                  <ListItemIcon>
                    {text  === "Home" ? <HomeIcon /> : <PostAddIcon />}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    <Outlet />
    </Box>
  );
}

