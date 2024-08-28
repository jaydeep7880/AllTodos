import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    var [name,setname] = useState("")
    var [salary,setsalary] = useState("")
    var navigatehome = useNavigate("")
    var {id} = useParams("")

    useEffect(()=>{
        axios.get("http://localhost:1010/employees/"+id)
        .then((res)=>{
            setname(res.data.name)
            setsalary(res.data.salary)
        })
    },[])

    var hendelsave = ()=>{
        var data = {id:id,name:name,salary:salary}
        axios.put("http://localhost:1010/employees/"+id,data)
        .then((res)=>{
            if(res)
            {
                navigatehome('/')
            }
        })
    }
  return (
    <div className='container' style={{textAlign:"left"}}>
      <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter a name....'
    value={name} onChange={(e)=>{setname(e.target.value)}}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Salary</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter a salary....'
    value={salary} onChange={(e)=>{setsalary(e.target.value)}}
    />
  </div>
  <button type="submit" className="btn btn-primary" onClick={()=>{hendelsave()}}>Save Data</button>
</form>
    </div>
  )
}

export default Edit
