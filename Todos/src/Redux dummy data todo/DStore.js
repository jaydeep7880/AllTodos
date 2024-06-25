import { configureStore } from "@reduxjs/toolkit";
import DUsereducer from "./DUsereducer";


var Dstore = configureStore({
    reducer:{
        data:DUsereducer
    }
})

export default Dstore;