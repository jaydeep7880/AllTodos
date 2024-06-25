import React, { useState } from 'react'

function OLDhome({hendeladd}) {
  
  var [add,setadd] = useState("")

  return (
    <div>
      
      <input type="text" name="" value={add} onChange={(e)=>{setadd(e.target.value)}} />
      <button onClick={()=>{hendeladd(add)}}>Add</button>

    </div>
  )
}

export default OLDhome
