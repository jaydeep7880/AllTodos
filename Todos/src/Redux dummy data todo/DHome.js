import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deletedata } from './DUsereducer'

function DHome() {
    var alldata = useSelector((state) => state.data)
    var viewnavigate = useNavigate("")
    var editnavigate = useNavigate("")
    var deletedispatch = useDispatch("")

    var hendelveiw = (l)=>{
        viewnavigate("/view/"+l)
    }

    var hendeledit = (m)=>{
        editnavigate("/edit/"+m)
    }

    var hendeldelete = (n)=>{
        deletedispatch(deletedata(n))
    }

    return (
        <div className='container-fluid'>

            <h2><u>Redux Dummy Data Crud</u></h2>

            <div style={{float:"right"}}>
                <Link to={'/add'} className='btn btn-primary m-2'>Add Employee</Link>
            </div>
            <table className='table table-dark table-striped'>
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
                        alldata && alldata.map((a,b) => (
                            <tr key={b}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.salary}</td>
                                <td>
                                    <button className='btn btn-secondary'
                                    onClick={()=>{hendelveiw(a.id)}}
                                    >View</button>
                                    <button className='btn btn-primary mx-2'
                                    onClick={()=>{hendeledit(a.id)}}
                                    >Edit</button>
                                    <button className='btn btn-danger'
                                    onClick={()=>{hendeldelete(a.id)}}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DHome
