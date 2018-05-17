import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from './reducers';

let composable = [ applyMiddleware( thunk ) ];
const reducer = combineReducers( reducers );

export default function configureStore() {
    return createStore( reducer, {}, compose( ...composable ) );
}
