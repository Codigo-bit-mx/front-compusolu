import React, { useContext } from 'react'
import {styled} from '@mui/material/styles'
import { Box, Grid } from '@mui/material'
import 'animate.css'
import {spark1, spark2, spark3, spark4} from '../../utils/DataCharts'
import LineChart from '../charts/LineChart'
import { relaway } from '../../themes'
import { LangContext } from '../../context/lang'
import { IntlProvider, FormattedMessage } from 'react-intl'



const IndicadoresPrincipales = () => {

    const { locate, message } = useContext(LangContext)

  return ( 
    <>
    <IntlProvider locale={locate} messages={message}>
        <Grid container columnSpacing={2}
              rowSpacing={2}
              className='animate__animated animate__fadeInLeft'
              sx={{marginBottom: 4}}
              >
            <Grid item xs={6} sm={6}  md={3}>
                <BoxGradient1 >  
                    <Box>
                    <TypographyN>3</TypographyN>
                    <TypographyText>

                    <FormattedMessage
                        id='app.process.now'
                        defaultMessage="Procesos actuales"
                    />

                    </TypographyText>
                    </Box>

                    <Box sx={{justifyContent: 'center', alignItems:'center'}}>
                        <LineChart options={spark1.options} series={spark1.series}/>
                    </Box>

                </BoxGradient1>
            </Grid>
          
            <Grid item xs={6} sm={6} md={3}>
            <BoxGradient2>    
                    <Box>
                    <TypographyN>$120.00</TypographyN>
                    <TypographyText>
                    <FormattedMessage
                        id='app.energy'
                        defaultMessage="Uso de energia"
                    />
                    </TypographyText>
                    </Box>

                    <Box>
                        <LineChart options={spark2.options} series={spark2.series}/>
                    </Box>
                </BoxGradient2>
            </Grid>
            
            <Grid item xs={6} sm={6} md={3}>
                <BoxGradient1>
                  
                    <Box>
                    <TypographyN>380</TypographyN>
                    <TypographyText>
                    <FormattedMessage
                        id='app.factur'
                        defaultMessage="Total de facturas"
                    />
                    </TypographyText>
                    </Box>

                    <Box>
                        <LineChart options={spark3.options} series={spark3.series}/>
                    </Box>
                </BoxGradient1>
            </Grid>
            
            
            <Grid item xs={6} sm={6} md={3}>
               <BoxGradient2>
                    <Box>
                    <TypographyN>80</TypographyN>
                    <TypographyText>
                    <FormattedMessage
                        id='app.emply'
                        defaultMessage="Empleados"
                    />
                    </TypographyText>
                    </Box>

                    <Box>
                        <LineChart options={spark4.options} series={spark4.series}/>
                    </Box>
                </BoxGradient2>
            </Grid>
        
        </Grid>
    </IntlProvider>
    </>
  )
}

export default IndicadoresPrincipales


//STYLES
const BoxGradient1 = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 20px', 
    borderRadius: 10,
    background: 'linear-gradient(210deg, #f40000, #8c0f0f, #630f0f, #321010);',
    backgroundSize: '400% 400%',
    animation: `gradient 25s linear infinite`,
    boxShadow: 'box-shadow: 3px 5px 12px 3px rgba(0,0,0,0.67)',
    "@keyframes gradient": {
        "0%": {
            backgroundPosition: '0% 20%'
        }, 
        "50%": {
            backgroundPosition: '100% 50%'
        },
        "100%": {
            backgroundPosition: '0% 50%'
        }
    }, 
    [theme.breakpoints.up('xs')]: {
        padding: '5px 8px',
        height: 122
      },
    [theme.breakpoints.up('md')]: {
        padding: '10px 20px',
        height: '100%'
      },
    
}))

const BoxGradient2 = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 20px', 
    borderRadius: 10,
    background: 'linear-gradient(210deg, rgba(20,18,18,1) 0%, rgba(64,64,64,1) 20%, rgba(112,112,112,1) 40%, rgba(158,158,158,1) 52%, rgba(189,189,189,1) 100%)',
    backgroundSize: '400% 400%',
    animation: `gradient 25s linear infinite`,
    boxShadow: 'box-shadow: 3px 5px 12px 3px rgba(0,0,0,0.67)',
    "@keyframes gradient": {
        "0%": {
            backgroundPosition: '0% 20%'
        }, 
        "50%": {
            backgroundPosition: '100% 50%'
        },
        "100%": {
            backgroundPosition: '0% 50%'
        }
    }, 
    [theme.breakpoints.up('xs')]: {
        padding: '5px 8px',
        height: 122
      },
    [theme.breakpoints.up('md')]: {
        padding: '10px 20px',
        height: '100%'
      },
    
}))

const TypographyN = styled('p')(({theme}) => ({
    color: 'white', 
    fontWeight:'bold',
    textAlign: 'center',
    fontSize: '16px', 
    fontFamily: relaway.style.fontFamily,
    [theme.breakpoints.up('xs')]: {
        fontSize: '12px',
      },
    [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
}))

const TypographyText = styled('p')(({theme}) => ({
    color: 'white', 
    fontSize: '12px', 
    fontWeight:'bold',
    textAlign: 'center', 
    fontFamily: relaway.style.fontFamily,
}))