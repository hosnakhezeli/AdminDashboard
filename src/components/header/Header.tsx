import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import theme from "../../lib/theme";



export default function Header() {
	return (
		<AppBar position="static" color="primary">
			<Toolbar>
				{/*Inside the IconButton, we 
					can render various icons*/}
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					{/*This is a simple Menu 
					Icon wrapped in Icon */}
					<MenuIcon />
				</IconButton>
				{/* The Typography component applies 
					default font weights and sizes */}

				{/* <Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					GeeksforGeeks Header
				</Typography> */}
				<Typography
					component="div"
					sx={{display: 'flex',justifyContent: 'flex-end',width:'1'}}
				>
					<IconButton sx={{color: theme.palette.secondary.contrastText, p:1}}>
						<SearchIcon/>
					</IconButton>
					<Typography component="div" sx={{width: 2,height: 3, background:  theme.palette.background.default, mx:1, pt:2}}></Typography>
					<IconButton sx={{color: theme.palette.secondary.contrastText, p:0}}>
						<StarBorderIcon/>
					</IconButton>
					<IconButton sx= {{color: theme.palette.secondary.contrastText, p:1}} aria-label="send mail">
						<MailOutlineIcon />
					</IconButton>
					<IconButton sx= {{color: theme.palette.secondary.contrastText, p:1}} aria-label="check box">
						<CheckBoxIcon />
					</IconButton>
					<IconButton sx={{color: theme.palette.secondary.contrastText, p:0}} aria-label="">
						<ShoppingBagIcon/>
					</IconButton>
				</Typography>
				
			</Toolbar>
		</AppBar>
	);
}
