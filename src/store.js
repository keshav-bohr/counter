import { createStore } from 'redux'
import reducer from './reducer/App';

const store = createStore(reducer);

export default store;
