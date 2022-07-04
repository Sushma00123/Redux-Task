import { legacy_createStore as createStore, applyMiddleware,compose} from 'redux';
import { myReducer } from './reducers/reducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const myStore = createStore(myReducer,
    composeEnhancer(applyMiddleware(thunk)));

