import React, { useContext } from 'react'
import {  Toolbar, Typography,  IconButton,  Box, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import {FormattedMessage, IntlProvider} from 'react-intl'

import AddIcon from '@mui/icons-material/Add';
import { UiContext } from '../../context/ui';
import { LangContext } from '../../context/lang';


export const Navbar = () => {
    
  const {aperturacierreMenu,
         aperturacierreModal} = useContext(UiContext)

  const { establecerLenguaje, locate, message } = useContext(LangContext)
  
   
 return (
        <IntlProvider locale={locate} messages={message}>

    
        <Toolbar>

        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={aperturacierreMenu}
            edge="start"
        >       
            <MenuIcon sx={{color: '#880c0c', width: 20}} />
        </IconButton>     

        <Box sx={{marginLeft: 4, display: {xs: 'none', sm:'block'}}}>
         
            <Typography 
            variant='h3'
            sx={{color: 'black'}}
            >

                <FormattedMessage
                    id='app.welcome'
                    defaultMessage="Tablero principal"
                />

            </Typography>
        
        </Box>
     
            <Box flex={1} />
            <Box sx={{ display: 'flex',
                       flexDirection: 'row',
                       marginRight: 2,
                       padding: '2px',
                       justifyContent: 'center', 
                       alignItems: 'center',
                       
                       }}>
           
             <IconButton
                onClick={aperturacierreModal}
             >
                <AddIcon sx={{ width: 20}} />
             </IconButton>

             <IconButton
                onClick={establecerLenguaje}
             >
                <AssistantPhotoIcon sx={{ width: 20}} />
             </IconButton>

            <Box sx={{backgroundColor: 'rgba(0,0,0, 0.1)',
                      marginRight: 2,
                      width: 2,
                      height: 35, 
                      borderRadius: 10,
                      display: {xs: 'none', sm:'block'}
                      }} />

            <Avatar
             alt='usuario'
             src='https://res.cloudinary.com/codigobit/image/upload/v1673978179/conacoapp/avatar_fnfqux.png'
             sx={{width: 30, height: 30}}
            />   

            <Box sx={{marginLeft: 2, 
                display: {xs: 'none', sm: 'block'}
            }}>
            <Typography 
             variant='body1'
             sx={{color: 'black'}}
            > 
                 <FormattedMessage
                    id='app.hello'
                    defaultMessage="Hola, buenas"
                />
             </Typography>
            
            <Typography 
             variant='body2'
             sx={{color: 'black'}}
            > 
             <FormattedMessage
                    id='app.admin'
                    defaultMessage="Administrador"
                />
             </Typography>
            </Box>
            

            </Box>

        </Toolbar>
        </IntlProvider>
  )
}
