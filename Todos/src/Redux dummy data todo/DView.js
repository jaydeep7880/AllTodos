import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function DView() {

  var alldata = useSelector((state) => state.data)

  var {id} = useParams("")

  var moredata = alldata.find((n)=>{
    return n.id == id
  })

  return (
    <div className='container-fluid'>
      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{moredata.id}</td>
            <td>{moredata.name}</td>
            <td>{moredata.salary}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DView
