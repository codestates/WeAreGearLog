import { combineReducers } from 'redux'; //루트리듀서에 여러가지를 넣기위해 콤바인리듀서를 사용한다
import todos from './todos';

const rootReducer = combineReducers({ todos });

export default rootReducer;
