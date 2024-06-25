import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Localedit() {
    var kil = JSON.parse(localStorage.getItem("moredata")) ?? []

    var {id} = useParams("")
    var navigatehome = useNavigate("")

    var ravi = kil.find((a)=>{
        return a.id == id
    })

    var [name,setname] = useState(ravi.name)
    var [salary,setsalary] = useState(ravi.salary)

    var hendelsave = ()=>{
        navigatehome("/")
        if(ravi.id == id)
            {
                ravi.name = name
                ravi.salary = salary
            }
            localStorage.setItem("moredata",JSON.stringify(kil))
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
            <button type="text" className="btn btn-success" onClick={()=>{hendelsave()}}>Submit</button>
        </div>
    )
}

export default Localedit
