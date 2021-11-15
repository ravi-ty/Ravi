import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialCounterState = {counter : 0, showCounter : true};
const initialAuthState = {isAuthenticated : false};

const counterSlice = createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter += action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

const authSlice = createSlice({
    name:"auth",
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
   reducer: {
       counter:counterSlice.reducer,
       auth:authSlice.reducer
   } 
})

const fetchData = async () => {
    return (dispatch) => {

    }

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    response = response.json;
}

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;