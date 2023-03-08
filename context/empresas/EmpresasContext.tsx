import { AlertColor } from "@mui/material"
import {createContext} from "react"
import { Empresa, Tipo } from "../../utils/Data"

interface ContextProps {
    empresas: Empresa[]
    mensaje: string
    registro_nuevo_empresa: boolean
    alarma: boolean
    tipo_alarma: AlertColor
    tipo_empresas:() => void
    obtener_empresas:() => void
    registrar_empresa:( data: Empresa ) => void
    actualizar_empresa:(id:string, data:any) => void
    eliminar_empresa:( id: string ) => void
}

export const EmpresasContext = createContext({} as ContextProps)