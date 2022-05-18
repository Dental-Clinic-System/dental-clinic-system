import { useState, FC } from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { SideBarNew } from './SidebarNew';
import { AccountPopOver } from '../components/AccountPopOver';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (property) => property !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: 1000,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  boxShadow: 'unset',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (property) => property !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    zIndex: 999,
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}));

export const MainLayout: FC = ({ children }) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = (): void => {
    setOpen(!open);
  };
  const TITLE = sessionStorage.getItem("clinicTitle") === "Chandmani" ? "Чандмань" : sessionStorage.getItem("clinicTitle");

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px' // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {!open ? TITLE : ''}
          </Typography>
          <AccountPopOver />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1]
          }}
        >
          <img src={"data:image/png;base64,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"} alt="" style={{
            width: "30px",
            height: "30px",
            objectFit: "fill",
            borderRadius: "50%",
            marginLeft: '16px'
          }} />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            ml={1}
            sx={{ flexGrow: 1 }}
          >
            {TITLE}
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <SideBarNew />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[50]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};
