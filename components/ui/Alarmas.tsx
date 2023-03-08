import React, { useContext } from 'react'
import Alert from '@mui/material/Alert';
import { EmpresasContext } from '../../context/empresas';
import styled from '@emotion/styled';

interface Props {
    msg: string
    tipoalarma: boolean
}

export const Alarmas = () => {
  
    const {alarma, mensaje, tipo_alarma} = useContext(EmpresasContext)

  return (
    <>
    
    {alarma ? (
        <ContenedorAlarma>
            <Alert severity={tipo_alarma}>{mensaje}</Alert>
        </ContenedorAlarma>
    ) : null}
    
    </>

  )

}


const ContenedorAlarma = styled('div')(({theme}) => ({
    marginBottom: 15
}))