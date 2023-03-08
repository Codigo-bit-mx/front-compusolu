import { createContext } from "react";

interface ContextProps {
    menuOpen: boolean
    modalOpen: boolean
    modalOpenEdit: boolean
    modalOpenDelete: boolean
    aperturacierreMenu: () => void
    aperturacierreModal: () => void
    aperturacierreEdit: () => void
    aperturacierreDelete: () => void 
}

export const UiContext = createContext({} as ContextProps)


