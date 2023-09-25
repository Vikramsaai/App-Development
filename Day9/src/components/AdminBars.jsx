import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../features/admin';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { faInstagram,faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faListAlt,
  faShoppingBasket,
  faStar,
  faBlog,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function AdminBars() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  }
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const admin = useSelector(state => state.admin.value)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="logo">
            <FontAwesomeIcon icon={faShoppingBasket} />
            FreshMart
          </span>
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        {/* Right-side icons */}
        <div className="navbar-icons">
          <a href="#">
            <FontAwesomeIcon className='ic' icon={faSearch} />
          </a>
          <a href="#">
            <FontAwesomeIcon className='ic' icon={faShoppingCart} />
          </a>
          <a href="#">
            <FontAwesomeIcon className='ic' icon={faUser} />
          </a>
        </div>
      </nav>
      
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          <h1 className='msg'>Welcome</h1>
          <h2 className='msg'>{admin.email}</h2>
          <h2>{admin.password}</h2>
        </Typography>
        <div className="features1">
        <div className="feature-box">
          <h2 style={{marginTop:"60px"}}>Product Details</h2>
          <h3>100</h3>
        </div>
        <div className="feature-box">
          <h2 style={{marginTop:"60px"}}>Customer Details</h2>
          <h3>200</h3>
        </div>
        <div className="feature-box">
          <h2 style={{marginTop:"60px"}}>Transaction Details</h2>
          <h3>Payments</h3>
        </div>
      </div>
        <button onClick={handleLogout} className="box">Logout</button>
        <footer className="footer">
        <div className='outer'>
          <div className='inner'>
          <span className="logo">
            <p>FreshMart</p>
            <FontAwesomeIcon icon={faShoppingBasket} />
            
          </span>
          <div className='ico'>
          <FontAwesomeIcon icon={faInstagram} className='fo'/>
            <FontAwesomeIcon icon={faTwitter} className='fo'/>
            <FontAwesomeIcon icon={faFacebook} className='fo'/> 
            </div> 
            <p><Link to="/login" className="link1">Admin</Link></p>  
          </div>
          <div className='inner'><h2>Contact Info</h2>
          <p>+123 456 7890.</p>
          <p>+111 222 3333.</p>
          <p>name@email.com</p>
          <p>Coimbatore.</p>
          </div>
          <div className='inner'>
          <p><Link to="/terms" className="link1">Terms and Condition</Link></p>
          <p><Link to="/privacy" className="link1">Privacy Policy</Link></p>
          <p><Link to="/faq" className="link1">FAQ</Link></p>
          </div>
          <div className='inner'>
            <h2>Let's Chat!</h2>
            <p>freshmart@gmail.com</p>
            <p>+123 456 7890.</p>
          </div>
        </div>
      </footer>
      </Main>
    </Box>
  );
  
}