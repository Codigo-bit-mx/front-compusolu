import React, { useState } from 'react'
import { ShopLayout } from '../../components/layout/ShopLayout';
import MarcoPrincipal from '../../components/principal/MarcoPrincipal';
import ScreenLoading from '../../components/ui/ScreenLoading';

const Inicio = () => {

 const [isLoading, setIsLoading] = useState(false)
 
 return (
    <ShopLayout title={'Test-Compu-Soluciones'} pageDescription={'Administrador empresas'} imgfullurl={'ruta'}>

    {isLoading ? (
        <ScreenLoading />
    ) : (
        <MarcoPrincipal /> 
    )}


    </ShopLayout>
  )
}

export default Inicio