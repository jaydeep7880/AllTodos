import React, { useState } from 'react'
import OLDhome from './OLDhome'
// import NEWtasklist from './OLDtasklist'
import OLDtasklist from './OLDtasklist'

var array = [
    {
        name: "jadav",
        id: 1
    },//name: 'jadavd', id: 1
    {
        name: "Jaydeep",
        id: 2
    },
    {
        name: "ramjibhai",
        id: 3
    }
]

var nextid = 4

function OLDarray() {

    var [arr, setarr] = useState(array)

    var added = (f) => {
        setarr(
            [
                ...arr,
                {
                    name: f,
                    id: nextid++
                }
            ]
        )
    }

    var hendel = (a) => {
        // console.log(a)
        setarr(
            arr.map((s) => {
                if (a.id == s.id) {
                    return a
                }

                else {
                    return s
                }

            })
        )
        // {console.log(a)}
    }

    var hendeldelete = (i) => {
        // console.log(i)
        setarr(
            arr.filter((s) => {
                return s.id != i
            })
        )
    }

    return (
        <div>

            <OLDhome hendeladd={added}></OLDhome>
            <OLDtasklist hendeltodo={arr}
                hendelchenges={hendel}
                hendeldel={hendeldelete}
            ></OLDtasklist>

        </div>
    )
}

export default OLDarray
