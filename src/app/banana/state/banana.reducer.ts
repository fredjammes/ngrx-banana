import { GET_NEW_BANANA, PEEL_BANANA, EAT_BANANA } from './banana.actions';
import * as programActions from './banana.actions';
import { State } from './banana.state';

export function reducer(state: any, action: programActions.BananaAction): State {
  switch (action.type) {
    case GET_NEW_BANANA: {
      console.log('REDUCER ' + GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow'
      };
    }
    case PEEL_BANANA: {
      console.log('REDUCER ' + PEEL_BANANA);
      return {
        ...state,
        isPeeled: true
      }
    }
    case EAT_BANANA: {
      console.log('REDUCER: taking ' + action.payload + 'bites of the banana');
      return {
        ...state,
        bitesRemaining: state.bitesRemaining - action.payload
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
}