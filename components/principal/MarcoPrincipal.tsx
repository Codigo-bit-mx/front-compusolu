import React, { useContext, useState } from 'react'
import {styled} from '@mui/material/styles'
import 'animate.css'
import { ModalComponent } from '../ui/ModalComponent'
import IndicadoresPrincipales from './IndicadoresPrincipales'
import Graficos from './Graficos'
import Table from '../table/Table'
import GraficosFooter from './GraficosFooter'
import MapacalorGrafico from './MapacalorGrafico'
import { UiContext } from '../../context/ui'
import { Alarmas } from '../ui/Alarmas'
import { ModalEliminar } from '../ui/ModalEliminar'


const MarcoPrincipal = () => {

    const [openModal, setOpenModal] = useState(false)
    const {modalOpen, modalOpenEdit, modalOpenDelete} = useContext(UiContext)



  return ( 
    
    <>
        <Alarmas />  
        <IndicadoresPrincipales />
        {modalOpen ? (<ModalComponent open={modalOpen} title={'Ingresa la información de la empresa'} />): null }
        {/* {modalOpenEdit} */}
        {/* {modalOpenDelete ? (<ModalEliminar open={modalOpenDelete} />) : null} */}
        <Table />
        <Graficos />
        <MapacalorGrafico />
        <GraficosFooter />
        
    </>


  )
}

export default MarcoPrincipal


//STYLES
const BoxGradient = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 20px' , 
    borderRadius: 10,
    background: 'linear-gradient(-45deg, #08ee5d, #1eba3d, #30904e, #3c6a39, #304b38, #2d302e); ',
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
    
}))

const TypographyN = styled('p')(({theme}) => ({
    color: 'white', 
    fontSize: '16px', 
    fontWeight:'bold',
    textAlign: 'center'
}))

const TypographyText = styled('p')(({theme}) => ({
    color: 'white', 
    fontSize: '12px', 
    fontWeight:'bold',
    textAlign: 'center'
}))