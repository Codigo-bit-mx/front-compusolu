import { createContext } from "react";

interface ContextProps {
    lenguaje: boolean
    locate: string
    message: any,
    establecerLenguaje: () => void

}

export const LangContext = createContext({} as ContextProps)