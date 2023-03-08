import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Button, Grid, styled, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form' 
import { ErrorSharp } from '@mui/icons-material'

import AuthLayout from '../../components/layout/AuthLayout'
import register from './register'
import { isEmail } from '../../utils/validatorEmail'

type formDate = {
  email: string
  password: string 
}

const Login = () => {
  
  //todo: reubicar codigo en carpeta componentes
  const router = useRouter()
  const [showError, setShowError] = useState(false)
  const {register, handleSubmit, formState:{ errors } } = useForm<formDate>()
  
  const entrada = () => {
    router.push('./dashboard/inicio')
  }

  return (
    <AuthLayout title={"Inicio de session"}>

    <LoginRoot>
      <BoxRoot>

        <LoginBackground>
          <LoginBackgroundGridContainer>
            <BoxRoot2>
              <BoxRoot3></BoxRoot3>
            </BoxRoot2>
            <BoxRoot4>
               <BoxRoot5></BoxRoot5>
            </BoxRoot4>
            <BoxRoot6>
              <BoxRoot7></BoxRoot7>
            </BoxRoot6>
            <BoxRoot8>
              <BoxRoot9></BoxRoot9>
            </BoxRoot8>
            <BoxRoot10>
              <BoxRoot11></BoxRoot11>
            </BoxRoot10>
            <BoxRoot12>
             <BoxRoot13></BoxRoot13>
            </BoxRoot12>
            <BoxRoot15>
              <BoxRoot14></BoxRoot14>
            </BoxRoot15>
            <BoxRoot17>
              <BoxRoot16> </BoxRoot16>
            </BoxRoot17>
            <BoxRoot19>
              <BoxRoot18></BoxRoot18>
            </BoxRoot19>
            <BoxRoot19>
              <BoxRoot20></BoxRoot20>
            </BoxRoot19>
            
          </LoginBackgroundGridContainer>
        </LoginBackground>
  
        <ContainerForm sx={{  }}>  

         <ContainerTitle>
          {/* <Typography variant='h2' sx={{letterSpacing: '-1px', color: 'green'}}>Inicia sesión</Typography> */}
          <Image 
             src={'https://res.cloudinary.com/codigobit/image/upload/v1673986684/conacoapp/Logo_CONACO_DEFINITIVO_horizontal_limpio_li6yer.png'}
             alt={'logotipo'}
             width={ 150 }
             height={ 55 }
             />
         </ContainerTitle>

        <ContainerFormDG>
         <FormDG>

          <FormDGInner>

          <Typography variant='h4' sx={{paddingBottom: '15px'}}>Ingresa tus credenciales</Typography>

          <form  onSubmit={handleSubmit(entrada)} noValidate >
          <Grid container spacing={2}>  
            <Grid item xs={12} > 
              
            </Grid>

            <Grid item xs={12}>
              <Typography>Correo electronico</Typography>
              <TextField 
                  // label='Correo' 
                  placeholder='correo@conaco.com'
                  type='email'
                  variant='standard'
                  fullWidth
                  {...register('email', {
                    required: 'Este campo es requerido',
                    validate: isEmail
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                 
                  sx={{paddingBottom: '24px'}}

                  />
            </Grid>
          
            <Grid item xs={12}>
            <Typography>Contraseña</Typography>
              <TextField 
                  // label='password
                  placeholder='*******'
                  type='password'
                  variant='standard'
                  fullWidth
                  {...register('password', {
                    required: 'Este campo es requerido',
                    minLength: { value: 6, message: 'Minimo 6 caracteres'}
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  sx={{paddingBottom: '24px'}}
              />
            </Grid>
          
            <Grid item xs={12}>
            <Button
                type='submit'
                color='secondary'
                className='circular-btn'
                size='large'
                fullWidth

                sx={{color: 'green'}}
            > Ingresar </Button>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='end'>
              {/* <NextLink href="/auth/register" passHref>
                <Link underline='always'>
                  ¿No tienes cuenta?
                </Link>
              </NextLink> */}
            </Grid>
          
          </Grid>

          </form>

          </FormDGInner>

          </FormDG>
        </ContainerFormDG>

        </ContainerForm>

      </BoxRoot>
    </LoginRoot>   

    </AuthLayout>
  )
}

export default Login


const LoginRoot = styled('div')(({theme}) => ({
  backgroundColor: '#fff', 
  display: 'flex', 
  width: '100%', 
  minHeight: '100vh', 
  overflow: 'hidden'
}))

const BoxRoot = styled('div')(({theme}) => ({
  boxSizing: 'border-box',
  display: 'flex', 
  flexDirection:'column',
  minHeight: '100vh',
  flexGrow: 1
}))

const LoginBackground = styled('div')(({theme}) => ({
  minHeight: '692px',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  zIndex: 0,
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  paddingTop: '64px'
}))

const LoginBackgroundGridContainer = styled('div')(({theme}) => ({
  display: 'grid',
  msGridColumns : '[start] 1fr [left-gutter] (86.6px) [16] [left-gutter] 1fr[end]',
  gridTemplateColumns: '[start] 1fr [left-gutter] repeat(16, 86.6px) [left-gutter] 1fr [end]', 
  msGridRows: '[top] 1fr [top-gutter] (64px) [8] [bottom-gutter] 1fr [bottom]', 
  gridTemplateRows: '[top] 1fr [top-gutter] repeat(8, 64px) [bottom-gutter] 1fr [bottom]',
  justifyContent:'center',
  marginBotton: 0,
  marginRight: '-2%',
  marginLeft: '-2%',
  transform: 'rotate(-12deg) skew(-12deg)'
}))

const BoxRoot2 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  display: 'flex',
  gridArea: 'top / start / 8 / end',
}))

const BoxRoot3 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)',
  flexGrow: 1, 
}))

const BoxRoot4 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  display: 'flex',
  gridArea: '4 / 2 / auto / 5',
}))

const BoxRoot5 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  boxShadow: 'inset 0 0 0 2px #e3e8ee', 
  animation: 'animationLeftRight 3s ease-in-out infinite',
  flexGrow: 1, 
  backgroundColor: '#26bf1f',

  '@keyframes animationLeftRight': {
    '0%': {
      transform: 'translateX(0px)'
    },
    '50%': {
      transform: 'translateX(1000px)'
    },
    '100%': {
      transform: 'translateX(0px)'
    }
  }

}))

const BoxRoot6 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  display: 'flex',
  gridArea: '6 / start / auto / 2',
}))

const BoxRoot7 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  backgroundColor: '#818181',
  animation: 'animationLeftRight 3s ease-in-out infinite',
  flexGrow: 1,

  '@keyframes animationLeftRight': {
    '0%': {
      transform: 'translateX(0px)'
    },
    '50%': {
      transform: 'translateX(1000px)'
    },
    '100%': {
      transform: 'translateX(0px)'
    }
  }
}))

const BoxRoot8 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  display: 'flex',
  gridArea: '7 / start / auto / 4',
  flexGrow: 1
}))

const BoxRoot9 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  backgroundColor: '#3d663b',
  animation: 'animationLeftRight 2s ease-in-out infinite',
  flexGrow: 1,

  '@keyframes animationLeftRight': {
    '0%': {
      transform: 'translateX(0px)'
    },
    '50%': {
      transform: 'translateX(1000px)'
    },
    '100%': {
      transform: 'translateX(0px)'
    }
  }
}))

const BoxRoot10 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  backgroundColor: '#2a9925',
  animation: 'animationLeftRight 2s ease-in-out infinite',
  flexGrow: 1, 
  
  '@keyframes animationLeftRight': {
    '0%': {
      transform: 'translateX(0px)'
    },
    '50%': {
      transform: 'translateX(1000px)'
    },
    '100%': {
      transform: 'translateX(0px)'
    }
  }
}))

const BoxRoot11 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  display: 'flex',
  gridArea: '8 / 4 / auto / 6',
}))

const BoxRoot12 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  backgroundColor: '#e3e8ee',
  flexGrow: 1, 
}))

const BoxRoot13 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  display: 'flex',
  gridArea: '2 / 15 / auto / end',
}))

const BoxRoot14 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  backgroundColor: '#818181',
  animation: 'animationLeftRight 4s ease-in-out infinite',
  flexGrow: 1, 

  '@keyframes animationLeftRight': {
    '0%': {
      transform: 'translateX(0px)'
    },
    '50%': {
      transform: 'translateX(1000px)'
    },
    '100%': {
      transform: 'translateX(0px)'
    }
  }
}))

const BoxRoot15 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  display: 'flex',
  gridArea: '3 / 14 / auto / end',
}))

const BoxRoot16 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  backgroundColor: '#3d663b',
  animation: 'animationRightLeft 2s ease-in-out infinite',
  flexGrow: 1, 

  '@keyframes animationRightLeft': {
    '0%': {
      transform: 'translateX(0px)'
    },
    '50%':{
      transform: 'translateX(-1000px)'
    },
    '100%': {
      transform: 'translateX(0px)'
    }
  }
}))

const BoxRoot17 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  display: 'flex',
  gridArea: '4 / 17 / auto / 20',
}))

const BoxRoot18 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  backgroundColor: '#e3e8ee',
  animation: 'animationLeftRight 4s ease-in-out infinite',
  flexGrow: 1, 

  '@keyframes animationLeftRight': {
    '0%': {
      transform: 'translateX(0px)'
    },
    '50%': {
      transform: 'translateX(1000px)'
    },
    '100%': {
      transform: 'translateX(0px)'
    }
  }
}))

const BoxRoot19 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  display: 'flex',
  gridArea: '5 / 14 / auto / 17',
}))

const BoxRoot20 = styled('div')(({theme}) => ({
  boxSizing: 'border-box', 
  boxShadow: 'inset 0 0 0 2px #e3e8ee',
  animation: 'animationRightLeft 2s ease-in-out infinite',
  flexGrow: 1,

  '@keyframes animationRightLeft': {
    '0%': {
      transform: 'translateX(0px)'
    },
    '50%':{
      transform: 'translateX(-1000px)'
    },
    '100%': {
      transform: 'translateX(0px)'
    }
  }
}))



const ContainerForm = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column', 
  flexGrow: 1, 
  zIndex: 1, 
  paddingBottom: '50px', 
  boxSizing: 'border-box',
  justifyContent:'center', 
  alignItems: 'center'
}))

const ContainerTitle = styled('div')(({theme}) => ({
  display: 'flex',
  paddingTop: '48px',  
  paddingBottom: '24px', 
  boxSizing: 'border-box', 
  justifyContent: 'center'
}))

const ContainerFormDG = styled('div')(({theme}) => ({
 [theme.breakpoints.up('xs')]: {
  padding: '25px'
  },
 [theme.breakpoints.up('md')]: {
    padding: 0
  }, 

}))

const FormDG = styled('div')(({theme}) => ({
  margin: '0px auto', 
  width: '100%', 
  maxWidth: '448px', 
  backgroundColor: '#fff', 
  borderRadius: '4px', 
  boxShadow: 'rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px'
}))

const FormDGInner = styled('div')(({theme}) => ({
  padding: '48px'
}))