import React, {FC, useReducer} from 'react'
import { LangContext, LangReducer } from './'
import messageEs from '../../lang/es-MX.json'

interface Props {
    children: React.ReactNode
}

export interface LangState {
   lenguaje: boolean
   locate: string
   message: any
}

export const LANG_INITIAL_STATE: LangState = {
   lenguaje: false,
   locate: 'es-ES',
   message: messageEs
}

export const LangProvider: FC<Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer (LangReducer, LANG_INITIAL_STATE)

    const establecerLenguaje = () => {   
        dispatch({
            type:  'LANG-CAMBIO'
        })
    }

    return (
        <LangContext.Provider value={{
            ...state, 
            establecerLenguaje
        }}>

        {children}
        </LangContext.Provider>
    )

}