import Image from 'next/image'
import React, { useState } from 'react'
import { nav } from '../../utils/dummy'
import { motion } from 'framer-motion'

function Navbar() {
  const [showSub, setShowSub] = useState(false)
  const [subMenu, setsubMenu] = useState('')

  return (
    <div className="flex justify-between px-10 py-3  relative container transition-all ease-in-out">
      <div>
        <h1 className="font-poppins font-bold text-2xl">Example</h1>
      </div>

      <div className="hidden md:flex items-center space-x-6  mr-10">
        {nav.map(({ title, Icon, path, subsetNav, subNav }, i) => (
          <div className="flex   cursor-pointer ">
            <motion.div
              onMouseEnter={() => {
                setShowSub(true)
                setsubMenu(title)
              }}
              onMouseLeave={() => {
                setShowSub(false)
                setsubMenu('')
              }}
              className="flex items-center space-x-1"
            >
              <div className="flex items-center hover:bg-gray-100 px-2 py-1 rounded-full">
                <h3 className="text-md font-semibold text-gray-700">{title}</h3>
                {Icon && <Icon className="text-xl" />}
              </div>
            </motion.div>

            {subNav && showSub && subMenu === title && (
              // no of subnav cards
              // the whole card
              <motion.div
                initial={{ x: 0, y: 50, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                onMouseEnter={() => {
                  setShowSub(true)
                  setsubMenu(title)
                }}
                onMouseLeave={() => {
                  setShowSub(false)
                  setsubMenu('')
                }}
                
                className="bg-white flex flex-row top-12 border-t-4 border-purple-700 rounded-t-lg space-x-5  absolute right-5 lg:right-10  py-4 px-3  shadow-md w-[900px] h-auto"
              >
                <div className="relative aspect-video flex-[0.3] w-full h-full">
                  <Image src="/images/house.jpg" layout="fill" />
                </div>

                <div className="flex flex-[0.7]">
                  {subNav &&
                    showSub &&
                    subMenu === title &&
                    subNav?.map((sN, i1) => (
                      <div className=" grid grid-cols-3">
                        {i1 > 0 && (
                          <div className="w-[1px] h-full bg-gray-400 ml-2" />
                        )}

                        {/* <div className='flex-[0.7] grid grid-cols-3 border-r-2' > */}
                        <div className="flex flex-col gap-2 ">
                          <h3 className="font-bold  text-lg text-gray-800 ">
                            {sN.title}
                          </h3>

                          {sN.subsetNav?.map((sN2, i2) => (
                            <div className="flex flex-col gap-3 ">
                              <h4 className="text-gray-600">{sN2.title}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
