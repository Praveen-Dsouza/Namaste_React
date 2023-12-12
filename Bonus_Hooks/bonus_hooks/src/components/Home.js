import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='w-96 text-blue-700 text-2xl font-bold p-10'>
      <Link to="/demo">Ref</Link>
    </div>
  )
}

export default Home
