import { legacy_createStore as createStore} from 'redux';
import { myReducer } from './reducers/reducer';

export const myStore = createStore(myReducer);

