import { configureStore } from "@reduxjs/toolkit";
import RUsereducer from "./RUsereducer";

 
var abcdata = configureStore({
    reducer:{
        abc:RUsereducer
    }
})

export default abcdata;