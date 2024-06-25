import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adddata } from './RUsereducer'
import { useNavigate } from 'react-router-dom'

function RAdd() {

    var statedata = useSelector((state)=>state.abc)[0]

    var [name,setname] = useState('')
    var [salary,setsalary] = useState('')
    var [nicname,setnicname] = useState('')
    var adddispatch = useDispatch("")
    var homenavagate = useNavigate("")


    var hendeladd = ()=>{
        var data = {id:statedata.length+1,name:name,nicname:nicname,salary:salary}
        adddispatch(adddata(data))
        homenavagate("/")
        window.location.reload()
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
                <label>Nicname</label>
                <input type="text" className="form-control my-4" id="exampleInputPassword1" placeholder="Enter a nicname..." 
                value={nicname}
                onChange={(a)=>{setnicname(a.target.value)}}
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

export default RAdd
