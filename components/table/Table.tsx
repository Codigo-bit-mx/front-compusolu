import React, {useContext, useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled, Typography, IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import 'animate.css';
import { EmpresasContext } from '../../context/empresas';
import { UiContext } from '../../context/ui';
import { ModalEliminar } from '../ui/ModalEliminar';
import { ModalEditar } from '../ui/ModalEditar';
import { LangContext } from '../../context/lang';
import { IntlProvider, FormattedMessage } from 'react-intl';


export default function BasicTable() {
  const [id, setId] =  useState<string>('')
  const [data, setData] = useState<any>()

  const { empresas } = useContext(EmpresasContext)
  const { locate, message } = useContext(LangContext)

  const {modalOpenDelete, modalOpenEdit, aperturacierreEdit, aperturacierreDelete} = useContext(UiContext)

  const eliminar = (id: string) => {
    aperturacierreDelete()
    setId(id)
  }

  const editar = (empresa:any) => {
    aperturacierreEdit()
    setData({
      id: empresa._id,
      nombre: empresa.nombre, 
      fecha: empresa.fecha, 
      tipo: empresa.tipo, 
      comentario: empresa.comentario, 
    })
  }


  return (
    <>
    <IntlProvider locale={locate} messages={message}>

   { modalOpenDelete ? (<ModalEliminar open={modalOpenDelete} id={id} /> ) : null }
   { modalOpenEdit ? (<ModalEditar open={modalOpenEdit} title="Edita la empresa?"  data={data!} /> ) : null }
   
    <ContenedorTable 
      className='animate__animated animate__fadeInLeft'
    >    
   
   { !empresas.length || empresas === undefined? (
     <ContenedorTable sx={{textAlign:'center'}}>
       <Typography>
           <FormattedMessage
                    id='app.tablesintitle'
                    defaultMessage="No se encuentran empresas registradas"
                />   
       </Typography>   
     </ContenedorTable>
   
     ):(
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, backgroundColor:'#5f5f5f5', marginBottom: 3 }} aria-label="simple table">
      <TableHead>
        <TableRow>

          <TableCell> 
            <FormattedMessage
                    id='app.name'
                    defaultMessage="Nombre de la empresa"
                />
          </TableCell>
          <TableCell align="right">
            <FormattedMessage
                    id='app.company'
                    defaultMessage="Tipo de empresa"
                />
          </TableCell>
          <TableCell align="right">
             <FormattedMessage
                    id='app.date'
                    defaultMessage="Fecha de constitución"
                />
          </TableCell>
          <TableCell align="right">
          <FormattedMessage
                    id='app.coment'
                    defaultMessage="Comentario"
                />
          </TableCell>
         
         
          <TableCell align="right"> 
           <FormattedMessage
                    id='app.accion'
                    defaultMessage="Acciones"
                />    
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        
        {empresas.map((empresa:any) => (
          
         <TableRow
            key={empresa.nombre}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            
            <TableCell component="th" scope="row">
              {empresa.nombre}
            </TableCell>
            <TableCell align="right">{empresa.tipo.tipo}</TableCell>
            <TableCell align="right">{empresa.fecha}</TableCell>
            <TableCell align="right">{empresa.comentario}</TableCell>
           
            <TableCell align="right">
              {/* agrega mejor iconos */}
            
              <IconButton
                onClick={ () => eliminar(empresa._id!) }
              >
                <DeleteIcon sx={{width: 20}}/>
              </IconButton>


              <IconButton
                onClick={ () => editar(empresa) }
              >
                <ModeEditIcon sx={{ width: 20}} />
              </IconButton>

            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

     ) }

  </ContenedorTable>
  </IntlProvider>
 </>
  );
}



const ContenedorTable = styled('div')(({theme}) => ({
  marginTop: 2,
  marginBottom: 30,
  backgroundColor:'#f5f5f5',
}))