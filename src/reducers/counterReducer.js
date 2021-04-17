import produce from 'immer';
import { INCREASE_COUNTER, DECREASE_COUNTER, SUCCESS_COUNTER } from 'store/types'


export const initialState = {
  counter: 0
};


const counterReducer = (state = initialState, action) => produce(state, draftState => {
  switch (action.type) {
    case INCREASE_COUNTER:
      action.value += draftState.counter
      break;
    case DECREASE_COUNTER:
      action.value  = draftState.counter -=1 
      break;
    case SUCCESS_COUNTER:
      draftState.counter = action.value
      break;
    default:
      return draftState;
  }
});

export default counterReducer