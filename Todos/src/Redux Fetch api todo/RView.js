import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function RView() {

    var data = useSelector((state) => state.abc)[0]
    var { id } = useParams("")
    var [d, setd] = useState("")

    var alldata =  data.filter((f)=>{
        return f.id == id
    })

    var {id1,name,nicname,salary} = alldata[0]

    return (
        <div className='container-fluid'>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Nicname</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{nicname}</td>
                        <td>{salary}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RView
