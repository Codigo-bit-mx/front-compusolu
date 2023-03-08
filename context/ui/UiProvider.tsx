import React, {FC, useReducer} from 'react'
import { UiContext, UiReducer } from './'

interface Props {
    children: React.ReactNode
}

export interface UIState {
    menuOpen: boolean
    modalOpen: boolean
    modalOpenEdit: boolean
    modalOpenDelete: boolean
}

export const UI_INITIAL_STATE: UIState = {
    menuOpen: false,
    modalOpen: false, 
    modalOpenEdit: false,
    modalOpenDelete: false
}

export const UiProvider: FC<Props> = ({children}) => {
    
    const [state, dispatch] = useReducer (UiReducer, UI_INITIAL_STATE)

    const aperturacierreMenu = () => {
        dispatch({
            type: 'UI-APERTURACIERRE-SIDEBAR-MENU'
        })
    }

    const aperturacierreModal = () => {
        dispatch({
            type: 'UI-APERTURACIERRE-MODAL'
        })
    }

    const aperturacierreEdit = () => {
        dispatch({
            type: 'UI-APERTURACIERRE-MODAL-EDIT'
        })
    }

    const aperturacierreDelete = () => {
        dispatch({
            type: 'UI-APERTURACIERRE-MODAL-DELETE'
        })
    }

    return (
        <UiContext.Provider value={{
            ...state, 
            aperturacierreMenu, 
            aperturacierreModal,
            aperturacierreEdit,
            aperturacierreDelete
        }}>

        {children}
        </UiContext.Provider>
    )

}