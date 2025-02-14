import { configureStore } from "@reduxjs/toolkit";
import  appSlice from "./AppSlice"

const store=configureStore({
    reducer:{
  appSlice:appSlice
    }
}) ;
export default store;