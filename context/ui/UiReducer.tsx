import {UIState} from './'


type UIActionType = 
  |  {type: 'UI-APERTURACIERRE-SIDEBAR-MENU'}
  |  {type: 'UI-APERTURACIERRE-MODAL'}
  |  {type: 'UI-APERTURACIERRE-MODAL-EDIT'}
  |  {type: 'UI-APERTURACIERRE-MODAL-DELETE'}



  export const UiReducer = (state: UIState, action: UIActionType) => {

    switch(action.type){

        case 'UI-APERTURACIERRE-SIDEBAR-MENU':
          return{
              ...state, 
              menuOpen: !state.menuOpen
          }

        case 'UI-APERTURACIERRE-MODAL':
          return{
            ...state, 
            modalOpen: !state.modalOpen
          }

        case 'UI-APERTURACIERRE-MODAL-EDIT': 
          return {
            ...state, 
            modalOpenEdit: !state.modalOpenEdit
          }

        case 'UI-APERTURACIERRE-MODAL-DELETE': 
          return{
            ...state,
            modalOpenDelete: !state.modalOpenDelete
          }
        
        default: 
            return state
    }
  }