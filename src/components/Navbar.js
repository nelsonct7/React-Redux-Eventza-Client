import React,{useState,useEffect} from "react";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import {useSelector,useDispatch} from 'react-redux'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button,
  Avatar,  
  Menu,
  MenuItem
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const {loading,error} =useSelector((state)=>({...state.auth}))
  const [isOpen,setIsOpen]=useState(false)
  const [user,setUser]=useState(null)
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  let navColor="navy"
  
  const handleLogout=()=>{
    localStorage.removeItem('profile')
    setUser(null)
  }

  useEffect(()=>{
    const profile=localStorage.getItem('profile')
    if(profile){
      setUser(JSON.parse(profile))
    }
  },[user])

  useEffect(()=>{
    if(user){
      user.userRoll==="user"?navColor="navy":navColor="#F77F00"
    }
  })
  
  
  return ( 
    
    <AppBar position="sticky" style={{backgroundColor:navColor}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.logo} style={{display:"flex"}}>
          <div style={{backgroundColor:'black',color:'white',borderRadius:20,marginRight:50}}>EZ</div>
          Eventza
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              <HomeIcon/>
            </Link>
            <Link to="/about" className={classes.link}>
              <NotificationsActiveIcon/>
            </Link> 
            <Link to="/contact" className={classes.link}>
              <EmailIcon/>
            </Link>
            {user?
            
            <Grid container>
              <Grid item>
              <Link to="/" >
              <Avatar 
            alt="Travis Howard" 
            src="/static/images/avatar/2.jpg"
            onClick={e=>setIsOpen(true)}
            />
            </Link>
              </Grid>
              <Grid item><Typography variant="h5" sx={{color:'white',p:2}}>{user.userName}</Typography></Grid>
            </Grid>
            
            
            :
            <Link to="/loginas">
            <Button variant="contained">Log In</Button>
          </Link>
            }
            
            
            
          </div>
        )}
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isOpen}
        onClose={e=>setIsOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      </Toolbar>
      
    </AppBar>
  );
}
export default Navbar;