import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NEWhome() {

  var [add, setadd] = useState("")

  useEffect(() => {
    fetch('http://localhost:6002/employees')
      .then((res) => { return res.json() })
      .then((data) => {
        setadd(data)
      })
  }, [])

  var viewnavigate = useNavigate()

  var hendelview = (b)=>{
      viewnavigate('/view/'+b)
      console.log(b)
  }

  var editnavigate = useNavigate()

  var hendeledited = (k)=>{
      editnavigate('/edit/'+k)
  }

  var hendeldelete = (del)=>{
      fetch('http://localhost:6002/employees/'+del,{
        method:"delete"
      })
      .then((res)=>{
        if(res)
        {
          window.location.reload()
        }
      })
  }

  var id = 1

  return (
    <div className='container'>

      <div className='container'>

        <div>
          <Link to={'/add'} className='btn btn-primary my-3'>Add Employee</Link>
        </div>

        <table className='table'>

          <thead className='table table-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {
              add &&
              add.map((v) => (
                <tr key={v.id}>
                  <td>{id++}</td>
                  <td>{v.name}</td>
                  <td>{v.salary}</td>
                  <td>
                    <button className='btn btn-info' onClick={()=>{hendelview(v.id)}}>View</button>
                    <button className='btn btn-primary mx-3' onClick={()=>{hendeledited(v.id)}}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>{hendeldelete(v.id)}}>Delete</button>
                  </td>
                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default NEWhome

