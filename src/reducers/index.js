import { combineReducers } from 'redux';
import example from './example';
import itens from './itens';

const Reducers = combineReducers({ example, itens });

export default Reducers;
