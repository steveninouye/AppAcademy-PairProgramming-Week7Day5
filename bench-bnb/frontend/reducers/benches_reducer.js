import { RECEIVE_BENCHES } from '../actions/benches_actions';

const BenchesReducer = (state = {}, action) => {
   switch (action.type) {
      case RECEIVE_BENCHES:
         return action.benches;
      default:
         return state;
   }
};

export default BenchesReducer;
