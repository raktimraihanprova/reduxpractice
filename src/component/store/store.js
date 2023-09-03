import {configureStore} from "@reduxjs/toolkit";
import counter from "../counterSlice/counterSlice";

export const store =
    configureStore({
    reducer:{
        counter: counter
    }
})