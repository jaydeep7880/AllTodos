import { createSlice } from "@reduxjs/toolkit";


var userslicedata = createSlice({
    name: "Todo",
    initialState: [],
    reducers: {
        showdata: ((state, action) => {

            state.push(action.payload)

        }),

        adddata: ((state, action) => {

            fetch("http://localhost:200/data", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(action.payload)
            })

        }),

        editdata: ((state, action) => {

            fetch("http://localhost:200/data/" + action.payload.id, {
                method: "put",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(action.payload)
            })

        }),

        deletedata: ((state, action) => {

            var del = action.payload
            fetch("http://localhost:200/data/"+del,{
                method:"delete"
            })
            .then((res)=>{
                if(res)
                    {
                        window.location.reload()
                    }
            })

        })
    }
})

export default userslicedata.reducer
export var { showdata, adddata, editdata, deletedata } = userslicedata.actions
