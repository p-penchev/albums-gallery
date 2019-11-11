import { createStore } from "redux";
import rootReducer from "../reducers/index";

const persistedState = loadFromLocalStorage();
const store = createStore(rootReducer, persistedState);


function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(e){
        console.log(e);
    }
}

function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state');

        if (serializedState === null){
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch(e) {
        console.log(e);
        return undefined;
    }
}

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;