import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import MuiDrawer from '@mui/material/Drawer'
import { Theme, CSSObject, styled, useTheme } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box, Collapse, CssBaseline } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'


import { UiContext } from '../../context/ui'
import { StarBorder } from '@mui/icons-material'
import { Navbar } from './Navbar';


//icons
import WhatshotIcon from '@mui/icons-material/Whatshot'
import InventoryIcon from '@mui/icons-material/Inventory'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import LogoutIcon from '@mui/icons-material/Logout'
import TuneIcon from '@mui/icons-material/Tune'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import EngineeringIcon from '@mui/icons-material/Engineering'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { LangContext } from '../../context/lang'


const drawerWidth = 180;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  //  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideMenu = () => {

  const theme = useTheme()
  const router = useRouter()
  const {menuOpen, aperturacierreMenu} = useContext(UiContext)
  const { locate, message } = useContext(LangContext)
  const [openExpand, setOpenExpand] = useState(false)

  const openCollap = () => {
    setOpenExpand(!openExpand)
  }

  const logout = () => {
    router.replace('/')
  }

  return (
   <Box>
  
  <IntlProvider locale={locate} messages={message}>

   <CssBaseline />
   
    <AppBar open={menuOpen}>
      <Navbar />
    </AppBar>

    <Drawer variant="permanent" open={menuOpen}>
    <DrawerHeader>
        { menuOpen ? (
         <>
         <Image 
             src={'https://res.cloudinary.com/codigobit/image/upload/v1678126765/codigobit/logo-codigo_mpqg9d.png'}
             alt={'logotipo'}
             width={ 140 }
             height={ 28 }
             />
          </>
        ) : (
         <Box onClick={aperturacierreMenu}>
            <Image 
              src={'https://res.cloudinary.com/codigobit/image/upload/v1678127201/codigobit/miniaturabit_ctoygj.png'}
              alt={'logotipo'}
              width={ 40 }
              height={ 20 }
              />
         </Box>
       ) }
    
    </DrawerHeader>
    
    <List>
 
     <ListItem key={'Inicio'} disablePadding sx={{ display: 'block' }}>   
          <ListItemButton
            sx={{
              minHeight: 40,
              justifyContent: menuOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <WhatshotIcon sx={{color: '#b60909'}} />   
            </ListItemIcon>
            <ListItemText primary={
                  <FormattedMessage
                  id='app.home'
                  defaultMessage="Inicio"
                  />
            } sx={{opacity: menuOpen ? 1 : 0 }} />
          </ListItemButton>
      </ListItem>

      
     <ListItem key={'Envios'} disablePadding sx={{ display: 'block' }}>   
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: menuOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <AirportShuttleIcon sx={{color: '#b60909'}}/>   
            </ListItemIcon>
            <ListItemText primary={
            <FormattedMessage
                id='app.send'
                defaultMessage="Envios"
            />
          } sx={{opacity: menuOpen ? 1 : 0 }} />
          </ListItemButton>
      </ListItem>


     <ListItem key={'Inventario'} disablePadding sx={{ display: 'block' }}>   
          
          <ListItemButton
            onClick={openCollap}
            sx={{minHeight: 48, justifyContent: menuOpen ? 'initial' : 'center', px: 2.5}}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <InventoryIcon sx={{color: '#b60909'}} />   
            </ListItemIcon>
            <ListItemText primary={
              <FormattedMessage
              id='app.inventory'
              defaultMessage="Inventario"
              />
            } sx={{opacity: menuOpen ? 1 : 0 }} />
            {openExpand ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
      </ListItem>

       <Collapse in={openExpand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{color: '#b60909'}} />
            </ListItemIcon>
            <ListItemText primary="Almacen" />
          </ListItemButton>
        </List>
     </Collapse>


     <ListItem key={'Indicadores'} disablePadding sx={{ display: 'block' }}>   
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: menuOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <AutoGraphIcon sx={{color: '#b60909'}} />   
            </ListItemIcon>
            <ListItemText primary={
              <FormattedMessage
              id='app.indicators'
              defaultMessage="Indicadores"
              />
            } sx={{opacity: menuOpen ? 1 : 0 }} />
          </ListItemButton>
     </ListItem>


     <ListItem key={'Clientes'} disablePadding sx={{ display: 'block' }}>   
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: menuOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <SupervisedUserCircleIcon  sx={{color: '#b60909'}}/>   
            </ListItemIcon>
            <ListItemText primary={
               <FormattedMessage
               id='app.customers'
               defaultMessage="customers"
               />
            } sx={{opacity: menuOpen ? 1 : 0 }} />
          </ListItemButton>
      </ListItem>
             
       
     <ListItem key={'Provedores'} disablePadding sx={{ display: 'block' }}>   
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: menuOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <LocalParkingIcon sx={{color: '#b60909'}} />   
            </ListItemIcon>
            <ListItemText primary={
              <FormattedMessage
              id='app.providers'
              defaultMessage="Provedores"
              />
            } sx={{opacity: menuOpen ? 1 : 0 }} />
          </ListItemButton>
      </ListItem>

      
     <ListItem key={'Empleados'} disablePadding sx={{ display: 'block' }}>   
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: menuOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <EngineeringIcon  sx={{color: '#b60909'}} />   
            </ListItemIcon>
            <ListItemText primary={
              <FormattedMessage
              id='app.employees'
              defaultMessage="Empleados"
              />
            } sx={{opacity: menuOpen ? 1 : 0 }} />
          </ListItemButton>
       </ListItem>


     <ListItem key={'Configuraciones'} disablePadding sx={{ display: 'block' }}>   
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: menuOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <TuneIcon sx={{color: '#b60909'}} />   
            </ListItemIcon>
            <ListItemText primary={
              <FormattedMessage
              id='app.setting'
              defaultMessage="Configuraciones"
              />
            } sx={{opacity: menuOpen ? 1 : 0 }} />
          </ListItemButton>
       </ListItem>

       <ListItem key={'Cerrar sessión'} disablePadding sx={{ display: 'block' }}>   
          <ListItemButton
           onClick={logout} 
            sx={{
              minHeight: 48,
              justifyContent: menuOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <LogoutIcon sx={{color: '#b60909'}} />   
            </ListItemIcon>
            <ListItemText primary={
              <FormattedMessage
              id='app.sign'
              defaultMessage="Cerrar session"
              />
            } sx={{opacity: menuOpen ? 1 : 0 }} />
          </ListItemButton>
       </ListItem>

    </List>
   
    </Drawer>
    </IntlProvider>
   </Box>
  )
}

export default SideMenu