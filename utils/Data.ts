export interface Tipo {
    _id: string
    tipo: string
}

export interface Empresa {
    _id?: string
    nombre: string 
    fecha: string
    tipo?: string
    comentario?: string 
    active?: string
}