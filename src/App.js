//Import area

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { route } from './routes/Route'


// function defination area

export  const App =()=> {   // Fat arrow ES6 2015
  return (
    <BrowserRouter>
        <Routes>
        {/*array.map(function(currentvalue, index, arr), thisvalue)*/}
        {
            route.map((currentvalue,index,arr)=>{
                return <Route key={index} path={currentvalue.path} element={currentvalue.element}/>
            })
        }

        </Routes>
    </BrowserRouter>
  )
}

// EXport area
