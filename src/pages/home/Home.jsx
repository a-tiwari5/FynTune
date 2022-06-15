
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Table from '../../components/Table/Table'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listConatiner">
          <div className="listTitle">
            Shop List
          </div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home