import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import BasicTable from '../Table/Table'

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1 className='title'>Dashbord</h1>
        <Cards/>
        <BasicTable/>
        
    </div>

  )
}

export default MainDash