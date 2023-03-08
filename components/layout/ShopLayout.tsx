import React, {FC} from "react"
import Head from "next/head"
import { Navbar } from "../ui/Navbar"
import SideMenu from "../ui/SideMenu"
import {styled} from '@mui/material/styles'

interface Props {
    title: string 
    pageDescription: string
    imgfullurl:string
    children: any
}

export const ShopLayout: FC<Props> = ({title, pageDescription, imgfullurl, children}) => {

    const Main = styled('main')(({theme}) => ({
        margin: '60px 0 30px 56px', 
        // maxWidth: '1920px',
        height: '100%', 
        [theme.breakpoints.up('xs')]: {
            padding: '10px 13px',
          },
        [theme.breakpoints.up('md')]: {
            padding: '20px 40px',
          },
    }))

  return (
    <>
    <Head>
        <title>{title}</title>

        <meta name='description' content={pageDescription}/>
        <meta name='og:title' content={pageDescription}/>

        {
            imgfullurl && (
                <meta name='og:image' content={imgfullurl}/>
            )
        }
    </Head>

        <nav>

        <SideMenu />

        </nav>


        <Main>
            {children}
        </Main>

        <footer>

        </footer>

    </>

)}