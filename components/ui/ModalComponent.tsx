import React, {FC, useState, useContext, useEffect} from 'react'
import Modal from '@mui/material/Modal';
import { Box, Button, FormHelperText, InputLabel, MenuItem, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { EmpresasContext } from '../../context/empresas';
import { UiContext } from '../../context/ui';
import { Empresa, Tipo } from '../../utils/Data';

type formDate = {
    nombre: string,
    fecha: string, 
    tipo: string
    comentario: string
}

interface Props {
    open: boolean
    title: string
    nombre?: string
    fecha?: string
    tipo?: string
    comentario?: string
}

export const ModalComponent: FC<Props> = ({open, title}) => {
    
 const {aperturacierreModal} = useContext(UiContext)
 const { tipos, registrar_empresa} = useContext(EmpresasContext)
  
 const {register, control, handleSubmit, formState:{errors}} = useForm<formDate>()
 
 const envio = (data:Empresa) => {
    aperturacierreModal()
    registrar_empresa(data)
 }


 return (
    <div>
        <Modal
            open={open}    
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >   
          <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                   {title}
                </Typography>

          
                <form onSubmit={handleSubmit(envio)} noValidate>

                    <Box sx={{mt: 2}}>
                        <Typography>Nombre de la empresa <span>*</span> </Typography>
                    
                        <TextField  
                        placeholder='Ingresa el nombre de la empresa'
                        type='text'
                        variant='standard'
                        fullWidth
                        {...register('nombre', {
                            required: 'Este campo es requerido',
                            maxLength:{ value: 250, message:'Maximo 250 caracteres'}
                        })}
                        error={!!errors.nombre}
                        helperText={errors.nombre?.message}
                        sx={{paddingBottom: '24px'}}
                      />
                    </Box>

                    <Box>
                        <Typography>Fecha de constitución <span>*</span> </Typography>
                        <TextField  
                        placeholder='Ingresa el nombre de la empresa'
                        type='date'
                        variant='standard'
                        fullWidth
                        {...register('fecha', {
                            required: 'Este campo es requerido',
                        })}
                        error={!!errors.fecha}
                        helperText={errors.fecha?.message}
                        
                        sx={{paddingBottom: '24px'}}

                  />
                    </Box>

                 

                    <Box  >
                        <Typography>Tipo de empresa<span>*</span></Typography>
                        <Controller 
                            name="tipo"
                            control={control}
                            defaultValue=''
                            render={({field}) => 
                            <Select
                            sx={{width: '100px'}}
                                {...field}
                                labelId="demo-simple-select-label"
                                {...register('tipo', {
                                    required: 'Este campo es requerido',
                                })}
                
                                error={!!errors.tipo?.message}
                                >
                                   
                                {tipos.map(x => (
                                <MenuItem key={x._id} value={x._id}>{x.tipo}</MenuItem>
                              ))}
                            </Select> 
                        }
                        />
                    </Box>


                    <Box sx={{mt: 3}}>
                    <Typography>Comentarios</Typography>
                    <TextField  
                        placeholder='El comentario es opcional'
                        type='text'
                        variant='standard'
                        multiline
                        rows={4}
                        fullWidth
                        {...register('comentario', {
                           
                            maxLength:{ value: 250, message:'Maximo 250 caracteres'}
                        })}
                        // error={!!errors.comentarios}
                        // helperText={errors.comentarios?.message}
                        
                        sx={{paddingBottom: '24px'}}

                  />    
                    </Box>

                <Button
                    onClick={aperturacierreModal}
                    sx={{backgroundColor: '#e21919',
                         color:'white',
                         mr: 2,
                         '&:hover': {
                            backgroundColor: '#8c0f0f'
                         }
                        }}
                >
                    cerrar
                </Button>
          
                <Button
                    type='submit'
                    // incorporar el guardado onClick={}
                    sx={{backgroundColor: '#adadad',
                         color:'white',
                    '&:hover': {
                       backgroundColor: '#6f6f6f'
                    }
                   }}
                
                >
                    Guardar
                </Button>

                </form>
  

          </Box>
        
        </Modal>
    </div>
  )
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: 350, md: 400},
    bgcolor: '#f5f5f5',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,

}






