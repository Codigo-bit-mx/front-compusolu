import {createTheme} from '@mui/material/styles'
import { Raleway } from '@next/font/google'

//fuentes 
const urlRaleway: string = './fonts/Raleway-Regular.ttf'

export const relaway = Raleway({
    weight: ["200", "400", "500", "600", "700"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
})

declare module "@mui/material/styles" {  
    interface TypographyVariants {
      primary: React.CSSProperties;   
    }
    interface TypographyVariantsOptions {
      primary?: React.CSSProperties;
    }
  }
  declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      primary: true;  
    }
  }


export const lightTheme = createTheme({
    palette: {
        mode:'light',
        primary:{
            main: '#1E1E1E'
        }, 
        secondary: {
            main: '#3A64D8'
        }, 
        info: {
            main: '#fff'
        }
    }, 
    components: {
        MuiLink: {
            defaultProps:{
                underline: 'none'
            }
        }, 
        MuiAppBar:{
            defaultProps: {
                elevation: 0, 
                // position: 'fixed', 
                
            }, 
            styleOverrides: {
                root: {
                    backgroundColor: '#F5F5F5', 
                    height: 55,
                }
            },

        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    backgroundColor: 'red', 
                }
            }
        },
        MuiTypography: {
            // fontFamily: relaway.style.fontFamily,
            styleOverrides:{
                h1: {
                    fontSize: 30, 
                    fontWeight: 600, 
                    fontFamily: relaway.style.fontFamily
                },
                h2: {
                    fontSize: 20, 
                    fontWeight: 400, 
                    fontFamily: relaway.style.fontFamily
                }, 
                h3: {
                    fontSize: 18, 
                    fontWeight: 500,
                    fontFamily: relaway.style.fontFamily
                }, 
                h4: {
                    fontSize: 14, 
                    fontWeight: 500, 
                    fontFamily: relaway.style.fontFamily
                }, 
                body1:{
                    fontSize: 12,
                    fontWeight: 500,
                    fontFamily: relaway.style.fontFamily
                }, 
                body2: {
                    fontSize: 10,
                    fontWeight: 500,
                    fontFamily: relaway.style.fontFamily
                }
            }
        },
        MuiListItemText:{
            styleOverrides: {
                root: {
                    fontSize: '1rem'
                }
            }
        }, 
        MuiCssBaseline: {
            styleOverrides: {
                
            body: {
                root: {
                    
                },
                // FontFace:{
                //     "@font-face": {
                //         fontFamily: 'Raleway', 
                //         fontWeight: 'bold',
                //         src: `url(${urlRaleway}) format('truetype')`
                //     },
                // },
                scrollbarColor: "#6b6b6b #2b2b2b",
                "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                    backgroundColor: "#fff",
                    width: '2px'
                },
                "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                    borderRadius: 8,
                    // backgroundColor: "#2b2b2b",
                    minHeight: 24,
                    
                    // border: "3px solid #2b2b2b",
                },
                "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                    backgroundColor: "#959595",
                  },
                  "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                    backgroundColor: "#959595",
                  },
                  "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#959595",
                  },
                  "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                    backgroundColor: "#2b2b2b",
                  },
           }, 
        },
            
      } 
    } 
})