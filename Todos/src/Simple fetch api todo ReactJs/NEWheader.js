import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import NEWhome from './NEWhome'
import NEWaddemployee from './NEWaddemployee'
import NEWview from './NEWview'
import NEWedit from './NEWedit'

function NEWheader() {
  return (
    <div>

        <Link to={'/'}></Link>
        <Routes>
            <Route path='/' element={<NEWhome></NEWhome>}></Route>
            <Route path='/add' element={<NEWaddemployee></NEWaddemployee>}></Route>
            <Route path='/view/:id' element={<NEWview></NEWview>}></Route>
            <Route path='/edit/:id' element={<NEWedit></NEWedit>}></Route>
        </Routes>
      
    </div>
  )
}

export default NEWheader
