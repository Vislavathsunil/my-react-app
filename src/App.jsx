import { useState } from 'react'
import EventHandler from './Components/eventHandler'
import Routers from './Components/routers'
import Fetch from './Components/fetch'

function App() {


  return (
    <div className='p-4'>
      {/* <EventHandler /> */}
      {/* <Routers /> */}
      <Fetch/>
    </div>
  )
}

export default App
