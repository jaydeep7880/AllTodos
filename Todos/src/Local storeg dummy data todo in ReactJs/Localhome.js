import React from 'react'
import { useNavigate } from 'react-router-dom'

function Localhome() {

    var kil = JSON.parse(localStorage.getItem("moredata")) ?? []
    var naviagteedit = useNavigate("")
    var navigateadd = useNavigate("")

    var hendeladd = ()=>{
        navigateadd("/add")
    }

    var hendeledit = (h)=>{
        naviagteedit("/edit/"+h)
    }

    var hendeldelete = (j)=>{
        var nil = kil.filter((k)=>{
            return k.id != j
        })
        window.location.reload()
        localStorage.setItem("moredata",JSON.stringify(nil))
    }

    return (
        <div className='container'>
            <label><h2>Local-storeg crud</h2></label>
            <div style={{float:"right"}} className='m-4'>
            <button className='btn btn-info' onClick={()=>{hendeladd()}}>Add</button>
            </div>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        kil.map((a,b)=>(
                        <tr key={b}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.salary}</td>
                        <td>
                            <button className='btn btn-primary mx-2' onClick={()=>{hendeledit(a.id)}}>Edit</button>
                            <button className='btn btn-danger' onClick={()=>{hendeldelete(a.id)}}>Delete</button>
                        </td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Localhome
