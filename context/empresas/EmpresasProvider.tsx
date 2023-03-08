import React, {FC, useEffect, useReducer, useContext} from 'react'
import testApi from '../../config/testApi'
import { EmpresasContext, EmpresasReducer } from './'
import { Empresa, Tipo } from '../../utils/Data'

import { UiContext } from '../ui'
import { AlertColor } from '@mui/material'

interface Props {
    children: React.ReactNode
}

export interface EmpresasState {
    tipos: Tipo[]
    empresas: Empresa[]
    mensaje: string
    registro_nuevo_empresa: boolean
    alarma: boolean
    tipo_alarma: AlertColor
}

export const EMPRESAS_INITIAL_STATE: EmpresasState = {
    tipos: [],
    empresas: [], 
    mensaje: '', 
    registro_nuevo_empresa: false,  
    alarma: false, 
    tipo_alarma: "success"
}


export const EmpresasProvider: FC<Props> = ({children}) => {
    

    const [state, dispatch] = useReducer(EmpresasReducer, EMPRESAS_INITIAL_STATE)

    useEffect(() => {
        obtener_empresas()
    }, [state.registro_nuevo_empresa])

    useEffect(() => {
        tipo_empresas()
    },[])

    const tipo_empresas = async() => {
        try {
            const respuesta = await testApi.get('/api/tipos/alltipos')
            dispatch({
                type: 'OBTENER_TIPOS_EMPRESA', 
                payload: respuesta.data.tiposall
            })
        } catch (err) {
            if(!err){
                dispatch({
                   type: 'ALARMA_ACTIVA',
                   payload: {msg: 'Problemas de conexion', tipoalarma: 'error'}
              })}
      
              dispatch({
                 type: 'ALARMA_ACTIVA',
                 payload: {msg: err.respuesta.data.msg, tipoalarma: 'error'}
             })
             
             setTimeout(() => {
                 dispatch({
                     type:'ALARMA_DESACTIVA'
                 })
             }, 3000); 
        }
    }

    const obtener_empresas = async() => {     
       
        try {
            const respuesta = await testApi.get('/api/empresas/allempresas')
           
            dispatch({
                type: 'OBTENER_EMPRESAS_ACTIVAS', 
                payload: respuesta.data.consulta
            })

        }catch(err){
            if(!err){
                dispatch({
                   type: 'ALARMA_ACTIVA',
                   payload: {msg: 'Problemas de conexion', tipoalarma: 'error'}
              })}
      
              dispatch({
                 type: 'ALARMA_ACTIVA',
                 payload: {msg: err.respuesta.data.msg, tipoalarma: 'error'}
             })
             
             setTimeout(() => {
                 dispatch({
                     type:'ALARMA_DESACTIVA'
                 })
             }, 3000);
        }

    }

    const registrar_empresa = async(data: Empresa) => {
        try{
            
        const respuesta = await testApi.post('/api/empresas/register_empresa', data)
            dispatch({
                type: 'GUARDAR_EMPRESA',
            })
            dispatch({
                type: 'ALARMA_ACTIVA', 
                payload: {msg: respuesta.data.msg, tipoalarma: 'success'}
            })
            setTimeout(() => {
                dispatch({
                    type:'ALARMA_DESACTIVA'
                })
            }, 3000);

        }catch(err: any){
         if(!err){
           dispatch({
              type: 'ALARMA_ACTIVA',
              payload: {msg: 'Problemas de conexion', tipoalarma: 'error'}
         })}
 
         dispatch({
            type: 'ALARMA_ACTIVA',
            payload: {msg: err.respuesta.data.msg, tipoalarma: 'error'}
        })
        
        setTimeout(() => {
            dispatch({
                type:'ALARMA_DESACTIVA'
            })
        }, 3000);
        }
    }

    const actualizar_empresa = async (id: string, data:any) => {
     
        let date = {
        id: id,
        nombre: data.nombre, 
        fecha: data.fecha, 
        tipo: data.tipo, 
        comentario: data.comentario
       }
      
        try {
            const respuesta = await testApi.put('/api/empresas/update_empresa', date )
            dispatch({
                type: 'GUARDAR_EMPRESA',
            })
            dispatch({
                type: 'ALARMA_ACTIVA', 
                payload: {msg: respuesta.data.msg, tipoalarma: 'success'}
            })
            setTimeout(() => {
                dispatch({
                    type:'ALARMA_DESACTIVA'
                })
            }, 3000);
        } catch (err) {
            if(!err){
                dispatch({
                   type: 'ALARMA_ACTIVA',
                   payload: {msg: 'Problemas de conexion', tipoalarma: 'error'}
              })}
      
              dispatch({
                 type: 'ALARMA_ACTIVA',
                 payload: {msg: err.respuesta.data.msg, tipoalarma: 'error'}
             })
             
             setTimeout(() => {
                 dispatch({
                     type:'ALARMA_DESACTIVA'
                 })
             }, 3000);
        }

    
    }


    const eliminar_empresa = async(id: string) => {
        try{
            const respuesta = await testApi.put('/api/empresas/active_empresa', {id: id, active: false })
            dispatch({
                type: 'GUARDAR_EMPRESA',
            })
            dispatch({
                type: 'ALARMA_ACTIVA', 
                payload: {msg: respuesta.data.msg, tipoalarma: 'success'}
            })
            setTimeout(() => {
                dispatch({
                    type:'ALARMA_DESACTIVA'
                })
            }, 3000);
        
        }catch(err: any){
            if(!err){
                dispatch({
                   type: 'ALARMA_ACTIVA',
                   payload: {msg: 'Problemas de conexion', tipoalarma: 'error'}
              })}

              dispatch({
                type: 'ALARMA_ACTIVA',
                payload: {msg: err.respuesta.data.msg, tipoalarma: 'error'}
            })

            setTimeout(() => {
                dispatch({
                    type:'ALARMA_DESACTIVA'
                })
            }, 3000);

        }
    }


    return(
        <EmpresasContext.Provider value={{
            ...state, 
            tipo_empresas,
            obtener_empresas,
            registrar_empresa, 
            actualizar_empresa,
            eliminar_empresa
        }}>
            {children}
        </EmpresasContext.Provider>
    )
}