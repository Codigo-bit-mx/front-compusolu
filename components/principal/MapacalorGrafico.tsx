import React from 'react'
import { Box } from '@mui/material'
import ExampleChartingjs from '../charts/ExampleChartingjs'
import {optionsMapCalor} from '../../utils/DataCharts'

const MapacalorGrafico = () => {
 
return (
   
    <Box sx={{ borderRadius: 2,
        height: 450,
        // padding: ,
        backgroundColor: '#F1F1F1',
        marginBottom: 4,
        borderTop: '1px outset #DFDFDF',
        borderRight: '1px outset #DFDFDF',
        borderLeft: '1px outset #DFDFDF',
        borderBottom: '1px outset #FFF', 
        justifyContent: 'center', 
        alignItems: 'center'}}
     >

        <ExampleChartingjs
            options={optionsMapCalor.options}
            series={optionsMapCalor.series}
            type={'heatmap'}
            height={450}
        />


    </Box>    

  )

}

export default MapacalorGrafico