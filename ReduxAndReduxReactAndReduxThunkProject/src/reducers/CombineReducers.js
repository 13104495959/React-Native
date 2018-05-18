//  引入redux的头文件
import { combineReducers } from 'redux';
//  引入子reducer的头文件
import  { MainHeaderScreenAddReducer1 } from '../reducers/MainHeaderScreenReducer';

const CombineReducers = combineReducers({
  MainHeaderScreenAddReducer1
});
export default CombineReducers;
