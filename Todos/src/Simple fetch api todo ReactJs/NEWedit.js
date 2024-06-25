import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function NEWedit() {

    var [name,setname] = useState("")
    var [salary,setsalary] = useState("")
    
    var {id} = useParams()

    // console.log(id)

    useEffect(()=>{
        fetch('http://localhost:6002/employees/'+id)
        .then((res)=>{return res.json()})
        .then((data)=>{
            setname(data.name)
            setsalary(data.salary)
        })
    },[])

    var updatenavigate = useNavigate()

    var hendelEdit = (w)=>{

        w.preventDefault()

        var data = {name,salary}

        fetch('http://localhost:6002/employees/'+id,{
            method:"put",
            headers:{"content-type" : "application/json"},
            body:JSON.stringify(data)
        })
        .then((res)=>{
            if(res)
            {
                alert("Updated....")
                updatenavigate('/')
            }
        })
    }

    return (
        <div>

            <div className='container'>
                <form className='text-start' onSubmit={hendelEdit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name : </label>
                        <input type="text" className="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={name} onChange={(e) => { setname(e.target.value) }}
                        />

                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Salary : </label>
                        <input type="text" className="form-control my-3" id="exampleInputPassword1"
                            value={salary} onChange={(e) => { setsalary(e.target.value) }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>

        </div>
    )
}

export default NEWedit
