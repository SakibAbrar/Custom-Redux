import createStore from './custom-redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

store.dispatch(actions.addBug('Bug 1'));

console.log(store.getState());
