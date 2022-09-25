import React from 'react'
import Footer from '../Footer'
import Navbar from '../Nav/Navbar'

const HomeLayout = ({ children }) => {
  return (
    <div className="w-full max-w-screen  mx-auto flex h-[100vh] flex-col  justify-between ">
      <div className="border-b-2 ">
        <Navbar />
      </div>
      <div className="">{children}</div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default HomeLayout
