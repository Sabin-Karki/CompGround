import { useState } from 'react'
import SideBar from './components/Sidebar'
import Navbar from './components/Navbar'


function App() {
 return(
  <div className='min-h-screen bg-gray-50 dark:bg-neutral-800'>
    <SideBar/>
    <main className='flex-1'>
      <Navbar/>
    </main>
  
  </div>
 )
 
}

export default App
