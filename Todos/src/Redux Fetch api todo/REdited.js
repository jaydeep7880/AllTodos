import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editdata } from './RUsereducer'

function REdited() {

  var { id } = useParams("")
  var editdispatch = useDispatch("")
  var homenavigate = useNavigate("")

  var moredata = useSelector((state) => state.abc)[0]

  var totalides = moredata.filter((f) => {
    return f.id == id
  })

  var {name,nicname,salary} = totalides[0]

  var [name1, setname1] = useState(name)
  var [nicname1, setnicname1] = useState(nicname)
  var [salary1, setsalary1] = useState(salary)

  var hendelsave = () => {
        var data = {id:id,name:name1,nicname:nicname1,salary:salary1}
        editdispatch(editdata(data))
        homenavigate('/')
        window.location.reload()
  }

  return (
    <div className='container w-50'>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control my-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a name"
          value={name1}
          onChange={(e) => { setname1(e.target.value) }}
        />
      </div>
      <div className="form-group">
        <label>Nicname</label>
        <input type="text" className="form-control my-4" id="exampleInputPassword1" placeholder="Enter a nicname..."
          value={nicname1}
          onChange={(a) => { setnicname1(a.target.value) }}
        />
      </div>
      <div className="form-group">
        <label>Salary</label>
        <input type="text" className="form-control my-4" id="exampleInputPassword1" placeholder="Enter a salary..."
          value={salary1}
          onChange={(a) => { setsalary1(a.target.value) }}
        />
      </div>
      <button type="text" className="btn btn-success" onClick={() => { hendelsave() }}>save</button>
    </div>
  )
}

export default REdited
