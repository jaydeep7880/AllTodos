import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editdata } from './DUsereducer'

function DEdit() {

  var { id } = useParams("")
  var editdispatch = useDispatch("")
  var homenavigate = useNavigate("")

  var alldata = useSelector((state) => state.data)

  var iddata = alldata.find((b) => {
    return b.id == id
  })

  var [name, setname] = useState(iddata.name)
  var [salary, setsalary] = useState(iddata.salary)

  var hendelsave = () => {
    var data = {id:id,name:name,salary:salary}
    editdispatch(editdata(data))
    homenavigate("/")
  }

  return (
    <div className='container w-50'>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control my-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a name"
          value={name}
          onChange={(e) => { setname(e.target.value) }}
        />

      </div>
      <div className="form-group">
        <label>Salary</label>
        <input type="text" className="form-control my-4" id="exampleInputPassword1" placeholder="Enter a salary..."
          value={salary}
          onChange={(a) => { setsalary(a.target.value) }}
        />
      </div>
      <button type="text" className="btn btn-success" onClick={() => { hendelsave() }}>save</button>
    </div>
  )
}

export default DEdit
