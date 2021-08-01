import store from './custom-redux';
// Changing the state won't have any effect on the original state of custom-redux
store.state = 1;

console.log(store.getState());
