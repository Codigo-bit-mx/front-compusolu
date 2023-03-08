import React, { useContext } from 'react'
import { Box, Grid, IconButton, styled, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Example } from '../charts/Example'
import ExampleChartingjs from '../charts/ExampleChartingjs'
import PolarChart from '../charts/PolarChart'
import { LangContext } from '../../context/lang';
import { IntlProvider, FormattedMessage } from 'react-intl';

const Graficos = () => {

  const { locate, message } = useContext(LangContext)

    const config = {
        options: {
            chart: {
              height: 350,
              type: 'bar',
              toolbar: {
                show: false
            }
            },
            colors: ['red'],
            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },
            toolbar: {
                show: false
            },
            title: {
              
                align: 'left',
                style: {
                  fontSize: '12px'
                }
              },
              subtitle: {
                text: '20%',
                floating: true,
                align: 'right',
                offsetY: 0,
                style: {
                  fontSize: '16px'
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  type: 'vertical',
                  shadeIntensity: 0.5,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 0.8,
                  stops: [0, 100]
                }
              },
              responsive: [{
                breakpoint: 480, 
                options: {
                    chart:{
                        width: '100%', 
                        height: '100%'
                    }, 
                    legend: {
                      show: false,
                      // position: 'left'
                    }
                }
            }]
          },
          series: [
            {
              name: "series-1",
              data: [90, 70, 60, 40, 46, 60, 70, 91]
            }
          ]
    }

    const config2 = {
      series: [14, 23, 17, 15, 12, 21],
      options: {
          chart:{
              type: 'polarArea',
          },
          labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E', 'Rose F'],
          legend: {
            // show: false,
            position: 'left', 
            offsetY: 15,
            style: {
                fontSize: '5px'
            }
          },
          title: {
            
            offsetX: 0,
            style: {
              fontSize: '12px',
              
            }
          },
        //   subtitle: {
        //     text: 'Meses',
        //     offsetX: 30,
        //     style: {
        //       fontSize: '14px',
              
        //   }},
          stroke: {
              width: 1,
              colors: undefined
          }, 
          fill: {
              opacity: 1
          }, 
          yaxis: {
            show: false
          },
          label: {
            show: false
          },
          theme: {
            mode: 'light',
            palette: 'palette3',
            monochrome: {
              enabled: true,
              color: '#8a8a8a',
              shadeTo: 'light',
              shadeIntensity: 0.6, 
            }
          },
          // colors: ['green', 'red'],
          responsive: [{
              breakpoint: 480, 
              options: {
                  chart:{
                      width: '100%', 
                      height: '100%',
                      labels: false
                  }, 
                  legend: {
                    show: true,
                    // position: 'left'
                  }
                  
              }
          }]
      }
    }

  return (
    <>
  <IntlProvider locale={locate} messages={message}>
    <Grid container 
          sx={{ marginBottom: 4 }}
          rowSpacing={{ xs: 2, md: 0 }}
          columnSpacing={{ xs: 0, sm: 0, md: 2 }}
          className='animate__animated animate__fadeInLeft'  
    >             
            <Grid item 
                 xs={12} sm={12} md={8}  sx={{ 
                
            }} > 
            {/* <BoxBarra> */}
             <ContenedorFlexPolar>
                <BoxGradient>
                <IconButton
                        color="inherit"
                        aria-label="Facturas"
                    >       
                    <BookmarkIcon sx={{color: 'white', width: 30}} />
                    </IconButton> 
                    <Box>
                    <Typography variant='h1' sx={{color: 'white'}}>210,256,484 $</Typography>
                    <Typography variant='h2' sx={{color: 'white'}}>
                    <FormattedMessage
                        id='app.entrydolar'
                        defaultMessage="Entrada de efectivo"
                    />
                    </Typography>
                    </Box>
                </BoxGradient>

               <BoxPolar>
                <PolarChart 
                    options={config2.options}
                    series={config2.series} 
                    type={config2.options.chart.type}
                    height='100%'
                    width= '100%'
                 />
              </BoxPolar>

             </ContenedorFlexPolar>  
             {/* </BoxBarra> */}

            </Grid>

          
            <Grid item xs={12} sm={12} md={4}>
                <BoxBarra>
                   <ExampleChartingjs 
                    options={config?.options}
                    series={config.series}
                    type='bar'
                    height='100%' 
                    width='100%'
                /> 
                </BoxBarra>
            </Grid>
        
        </Grid>
       </IntlProvider>
      </>
  )
}

export default Graficos

const BoxBarra = styled('div')(({theme}) => ({
    maxWidth: '100%',
    minHeight: '100%',
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor: '#F5F5F5',
    borderRadius: 10,   
    padding: '10px 10px 0px 10px', 
    borderTop: '1px outset #DFDFDF',
    borderRight: '1px outset #DFDFDF',
    borderLeft: '1px outset #DFDFDF',
    borderBottom: '1px outset #FFF', 
}))

const ContenedorFlexPolar = styled('div')(({theme}) => ({  
    maxWidth: '100%', 
    minHeight: '100%', 
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,   
    padding: '10px', 
    borderTop: '1px outset #DFDFDF',
    borderRight: '1px outset #DFDFDF',
    borderLeft: '1px outset #DFDFDF',
    borderBottom: '1px outset #FFF', 
    [theme.breakpoints.up('xs')]: {
        display: 'block',
        // padding: '10px',
      },
    [theme.breakpoints.up('md')]: {
        display: 'flex', 
        // padding: '20px',
      },
    [theme.breakpoints.up('xl')]: {
        display: 'flex', 
        // padding: '20px',
    }
}))

const BoxGradient = styled('div')(({theme}) => ({
    padding: '10px 20px' , 
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
        width: '100%',
        height: 180
      },
    [theme.breakpoints.up('md')]: {
        width: '50%',
        height: '200px',
     }, 
    [theme.breakpoints.up('xl')]: {
      width: '50%',
      height: '300px',
  }
}))


const BoxPolar = styled('div')(({theme}) => ({
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    marginTop: '16px',
    width: '100%',
    height: 180
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
    height: '200px'
  },
  [theme.breakpoints.up('xl')]: {
    width: '50%',
    height: '300px',
}
}))


