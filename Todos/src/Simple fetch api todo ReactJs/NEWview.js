import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function NEWview() {

        var [eid,seteid] = useState("")
        var [name,setname] = useState("")
        var [salary,setsalary] = useState("")

        var {id} = useParams()
        // console.log(id)

    useEffect(()=>{
        fetch('http://localhost:6002/employees/'+id)
        .then((res)=>{return res.json()})
        .then((data)=>{
            seteid(data.id)
            setname(data.name)
            setsalary(data.salary)
        })
    },[])


  return (
    <div>

        {/* <h1>Id : {eid} </h1> */}
        <h1>Name : {name} </h1>
        <h1>Salary : {salary} </h1>
      
    </div>
  )
}

export default NEWview
