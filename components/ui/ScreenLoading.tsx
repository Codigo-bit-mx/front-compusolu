import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import { height } from '@mui/system'

const ScreenLoading = () => {
  return (
    
    <Box
        display='flex' 
        flexDirection='column' 
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
    >
        
        <CircularProgress sx={{color:'green'}} thickness={2}/>

    </Box>

  )
}

export default ScreenLoading