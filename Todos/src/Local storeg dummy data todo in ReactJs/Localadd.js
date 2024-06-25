import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Localadd() {

    var kil = JSON.parse(localStorage.getItem("moredata")) ?? []
    var navigatehome = useNavigate("")

    var [name,setname] = useState('')
    var [salary,setsalary] = useState('')

    var hendeladd = ()=>{
      var vivek = {id:kil.length+1,name:name,salary:salary}
      kil.push(vivek)
      localStorage.setItem("moredata",JSON.stringify(kil))
      navigatehome("/")
    }

  return (
    <div className='container w-50'>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control my-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a name" 
                value={name}
                onChange={(e)=>{setname(e.target.value)}}
                />

            </div>
            <div className="form-group">
                <label>Salary</label>
                <input type="text" className="form-control my-4" id="exampleInputPassword1" placeholder="Enter a salary..." 
                value={salary}
                onChange={(a)=>{setsalary(a.target.value)}}
                />
            </div>
            <button type="text" className="btn btn-secondary" onClick={()=>{hendeladd()}}>Add</button>
        </div>
  )
}

export default Localadd
