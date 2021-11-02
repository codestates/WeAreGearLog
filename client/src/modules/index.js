import { combineReducers } from 'redux'; //루트리듀서에 여러가지를 넣기위해 콤바인리듀서를 사용한다
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import board from './board';

const rootReducer = combineReducers({ board });
const persistConfig = {
  key: 'root',
  storage: storage,
};

export default persistReducer(persistConfig, rootReducer);
