import React from 'react'
import { Box, Grid, styled, Typography } from '@mui/material'
import { lineGradient, configBar, lineColumarea, configProcess } from '../../utils/DataCharts'
import Area from '../charts/Area'
import BarChart from '../charts/BarChart'
import AreaColumLine from '../charts/AreaColumLine'

const GraficosFooter = () => {
    
  return (
  
    <Grid container 
      sx={{ marginTop: 0, marginBottom: 0}}
      rowSpacing={{ xs: 2, md: 0 }}
      columnSpacing={{ xs: 0, sm: 0, md: 2 }}
      className='animate__animated animate__fadeInLeft'
    >
            
      <Grid item xs={12} sm={12} md={3} sx={{ 
           
      }} > 
       <BoxBarra >
        <Typography>Procesos de trabajo</Typography>

        <BarChart 
                options={configProcess.options}
                series={configProcess.series}
                type={'radialBar'}
                height='300'
                width='100%'
            />
       </BoxBarra>
    
      </Grid>

    
      <Grid item xs={12} sm={12} md={3} sx={{ 
            
      }} >
          <BoxBarra>    
            <BarChart 
                options={configBar.options}
                series={configBar.series}
                type={'bar'}
                height='300'
                width='100%'
            />
          </BoxBarra>
      </Grid>

      
      <Grid item xs={12} sm={12} md={6} sx={{ 
      
          
      }} >
          <BoxBarra>    
           
            <Area 
             options={lineGradient.options}
             series={lineGradient.series}
             type={'area'}
             height='300'
             width='100%'
             /> 
                     
          </BoxBarra>
      </Grid>
  
  </Grid>


  )
}

export default GraficosFooter


const BoxBarra = styled('div')(({theme}) => ({
    maxWidth: '100%',
    minHeight: '100%',
    // display: 'flex',
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor: '#F5F5F5',
    borderRadius: 10,   
    padding: '15px 10px 0px 10px', 
    borderTop: '1px outset #DFDFDF',
    borderRight: '1px outset #DFDFDF',
    borderLeft: '1px outset #DFDFDF',
    borderBottom: '1px outset #FFF'
}))