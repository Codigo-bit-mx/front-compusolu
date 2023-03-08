import React, {FC, useContext} from 'react'
import { Box, Button, Fade, Modal, Typography } from '@mui/material'
import Backdrop from '@mui/material/Backdrop';
import { UiContext } from '../../context/ui'
import { EmpresasContext } from '../../context/empresas';


interface Props {
    open: boolean
    id:string
}

export const ModalEliminar: FC<Props> = ({open, id}) => {
    
    const {aperturacierreDelete} = useContext(UiContext)
    const { eliminar_empresa } = useContext(EmpresasContext)

    const envio_eliminar = () => {
        eliminar_empresa(id)
        aperturacierreDelete()
    }
  
    return (

    <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={aperturacierreDelete}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Deseas eliminar la empresa?
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Se desactivara la empresa, si requieres activar nuevamente contacta con soporte tecnico
          </Typography>

        <Box sx={{marginTop: 4}}>
          <Button
                    onClick={aperturacierreDelete}
                    sx={{backgroundColor: '#e21919',
                    color:'white',
                    mr: 2,
                    '&:hover': {
                        backgroundColor: '#8c0f0f'
                    }
                }}
                >
                    Cancelar
                </Button>
          
                <Button
                   onClick={envio_eliminar}
                   sx={{backgroundColor: '#adadad',
                   color:'white',
                   '&:hover': {
                       backgroundColor: '#6f6f6f'
                    }
                }}
                
                >
                    Eliminar
                </Button>

            </Box>

        </Box>
      </Fade>
    </Modal>
  </div>
  )
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  };