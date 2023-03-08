import { AlertColor } from '@mui/material'
import { Empresa, Tipo } from '../../utils/Data'
import { EmpresasState } from './'

type EmpresasActionType =   
|  {type: 'OBTENER_TIPOS_EMPRESA', payload: Tipo[] }
|  {type: 'OBTENER_EMPRESAS_ACTIVAS', payload: Empresa[]}
|  {type: 'GUARDAR_EMPRESA'}
|  {type: 'ACTUALIZAR_EMPRESA'}
|  {type: 'DESACTIVAR_EMPRESAS'}
|  {type: 'ALARMA_ACTIVA', payload: {msg: string, tipoalarma: AlertColor}}
|  {type: 'ALARMA_DESACTIVA'}


export const EmpresasReducer = (state: EmpresasState, action: EmpresasActionType): EmpresasState => {

    switch(action.type){
        
        case 'OBTENER_TIPOS_EMPRESA': 
            return{
                ...state, 
                tipos: action.payload
            }

        case 'OBTENER_EMPRESAS_ACTIVAS':
            return {
                ...state, 
                empresas: action.payload
            }   

        case 'GUARDAR_EMPRESA':
            
            return {
                ...state, 
                registro_nuevo_empresa: true,
            }

        case 'ACTUALIZAR_EMPRESA':
            return {
                ...state
            }

        case 'DESACTIVAR_EMPRESAS': 
            return {
                ...state
            }

        case 'ALARMA_ACTIVA': 
            return {
                ...state, 
                mensaje: action.payload.msg,
                alarma: true,
                tipo_alarma: action.payload.tipoalarma
            }

        case 'ALARMA_DESACTIVA':
            return { 
                ...state, 
                registro_nuevo_empresa: false, 
                mensaje:'',
                alarma: false,
            }

        default:
            return state

    }
}