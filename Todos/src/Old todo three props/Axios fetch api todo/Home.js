import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    var [show,setshow] = useState("")
    var navigateedit = useNavigate("")
    useEffect(()=>{
        axios.get("http://localhost:1010/employees")
        .then((res)=>{
            setshow(res.data)
        })
    },[])

    var hendeledit = (b)=>{
        navigateedit("/edit/"+b)
    }

    var hendeldelete = (c)=>{
        axios.delete("http://localhost:1010/employees/"+c)
        .then((res)=>{
            if(res)
            {
                window.location.reload()
                alert("Are you sure....")
            }
        })
    }

  return (
    <div>
        <div style={{textAlign:"right",margin:"20px"}}>
            <Link className='btn btn-info' to={'/add'}>Add data</Link>
        </div>
      <table className='table table-dark'>
        <thead>
           <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Action's</th>
           </tr>
        </thead>
        <tbody>
            {
                show && show.map((a)=>(
                    <tr key={a.id}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.salary}</td>
                        <td>
                            <button className='btn btn-primary me-4' 
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

export default Home
