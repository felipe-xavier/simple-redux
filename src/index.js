// import store from "./myRedux/customStore";
import store from "./myStore/myStore";
import { bugAdded, bugRemoved, bugResolved } from "./myStore/bugs";

const unsubscribe1 = store.subscribe(() => {
  console.log("Store changed 1!", store.getState())
})

const unsubscribe2 = store.subscribe(() => {
  console.log("Store changed 2!", store.getState())
})

store.dispatch(bugAdded("Bug-1"));
store.dispatch(bugAdded("Bug-2"));

unsubscribe2();

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(2));
