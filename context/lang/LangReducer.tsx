import {LangState} from './'
import messageEs from '../../lang/es-MX.json'
import messageEu from '../../lang/es-US.json'

type LangActionType = 
| { type: 'LANG-CAMBIO' }
 


  export const LangReducer = (state: LangState, action: LangActionType) => {

    switch(action.type){

        case 'LANG-CAMBIO': 
          
        return {

            ...state, 
            lenguaje: !state.lenguaje, 
            locate:   state.lenguaje ? 'es-Es' : 'es-EU',
            message:  state.lenguaje ? messageEs : messageEu

          }
        
        default: 
            return state
    }
  }