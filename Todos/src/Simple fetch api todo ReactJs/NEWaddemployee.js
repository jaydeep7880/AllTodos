import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NEWaddemployee() {

    var [name,setname] = useState("")
    var [salary,setsalary] = useState("")
    var homenavigate = useNavigate()

    var data = {name,salary}

    var hendeladd = (e)=>{
        e.preventDefault()
        fetch('http://localhost:6002/employees',{
            method:"post",
            headers:{"content-type" : "application/json"},
            body:JSON.stringify(data)
        })
        .then((res)=>{
            if(name == "" || name.length <= 2)
            {
                alert("enter a valid name....!")
            }

            if(name.match == name)
            {
                alert("this name alredy exis...")
            }

            else if(salary == "" || salary <= 1000)
            {
                alert("enter a salary up to 1000.....")
            }

            else 
            {
                alert("Created...!")
                homenavigate("/")
            }


        })
    }


    return (
        <div>
            <div className='container'>
                <form className='text-start' onSubmit={hendeladd}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name : </label>
                        <input type="text" class="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={name} onChange={(e)=>{setname(e.target.value)}}
                        />
                           
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Salary : </label>
                        <input type="text" class="form-control my-3" id="exampleInputPassword1" 
                        value={salary} onChange={(e)=>{setsalary(e.target.value)}}
                        />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    )
}

export default NEWaddemployee
