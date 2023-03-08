import React, {FC} from 'react'
import Head from 'next/head'
import { Box, styled } from '@mui/material'

interface Props {
    title: string
    children: any 
}

const AuthLayout: FC<Props> = ({title, children}) => {

  return (  
    <>
        <Head>
            <title>{title}</title>
        </Head>
    
        <Main>
            
                {children}
           
        </Main>

    </>
  )
}

export default AuthLayout


const Main = styled('main')(({theme})=> ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center', 
    width: '100%',
    height: '100%',
    position:'absolute', 
    overflow:'hidden'
    
}))

