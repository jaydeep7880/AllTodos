import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
    var [name,setname] = useState("")
    var [salary,setsalary] = useState("")
    var navigatehome = useNavigate("")

    var hendeladd = ()=>{
        var data = {name:name,salary:salary}
        axios.post("http://localhost:1010/employees",data)
        .then((res)=>{
            if(res)
            {
                alert("Added....")
                navigatehome("/")
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
  <button type="submit" className="btn btn-primary" onClick={()=>{hendeladd()}}>Add Data</button>
</form>
    </div>
  )
}

export default Add
