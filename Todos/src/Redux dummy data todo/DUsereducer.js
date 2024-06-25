import { createSlice } from "@reduxjs/toolkit";
import { moredata } from "./DArray";

 var userslice = createSlice({
    name:"Todos",
    initialState:moredata,
    reducers:{
        adddata:((state,action)=>{
            state.push(action.payload)
        }),
        editdata:((state,action)=>{
            var editdata = state.find((g)=>{
                return g.id == action.payload.id
            })
            if(editdata)
            {
                editdata.name = action.payload.name
                editdata.salary = action.payload.salary
            }
        }),
        deletedata:((state,action)=>{

            // there are two way's to delete the id 

            return state.filter((t)=>{
                return t.id !== action.payload
            })

            // var d = state.filter((t)=>{
            //     return t.id !== action.payload
            // })
            // if(d)
            // {
            //     return d
            // }
        })
    }
 })

 export default userslice.reducer
 export var {adddata,editdata,deletedata} = userslice.actions 