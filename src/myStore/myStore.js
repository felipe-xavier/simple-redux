import myReducer from "./myReducer";
// The same as 
// import createStore from "redux";
import createStore from '../myRedux/myRedux';

const store = createStore(myReducer);

export default store;