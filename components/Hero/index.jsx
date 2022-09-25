// import React, { useRef, useState } from 'react'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react'

// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/effect-fade'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

// import { EffectFade, Navigation, Pagination } from 'swiper'

// const Hero = () => {
//   return (
//     <div className="max-h-[700px] relative w-full">
     
//         <Swiper
//           spaceBetween={30}
//           effect={'fade'}
//           navigation={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[EffectFade, Navigation, Pagination]}
//           className="mySwiper !w-[80%]"
//         >
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full' />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='w-full'/>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='w-full'/>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='w-full'/>
//           </SwiperSlide>
//         </Swiper>
//     </div>
//   )
// }

// export default Hero




import React from 'react'
// import Button from '../../utils/Button'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination } from "swiper";
// import { bannerData } from "../../dummyData";
import { motion } from "framer-motion"

const Hero = () => {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return (
        <motion.div
            className='h-screen  overflow-hidden z-0 !transition-all !ease-in-out !duration-300'
            initial="hidden"
            animate="visible"
            transition={{
                // duration:4,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 4 },
            }}
            variants={variants}
        >
            <Swiper
                // navigation={true}
                // modules={[Navigation]}
                // className="mySwiper"
                // effect={"fade"}

                effect={"fade"}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}

            >
              
                    <SwiperSlide
                        // key={i}
                    >
                        <div
                            style={{
                                backgroundImage: `linear-gradient(rgba(1,1,1,0.2),rgba(1,1,1,0.2) ), url(${"/images/house.jpg"})`
                            }}
                            className='!bg-cover flex items-center justify-center h-full'
                        >
                            <div className="flex text-center flex-col space-y-4 lg:space-y-8">
                                <h1
                                    style={{
                                        textShadow: '0 0 10px #111111'
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1000"
                                    className="text-3xl md:text-5xl lg:text-7xl font-black text-white">BUILD CONFIDENCE!</h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1000"
                                    className="text-white font-semibold text-lg max-w-[95%] mx-auto md:text-2xl lg:text-3xl">
                                    Helping you to feel more confident both inside and outside 
                                </p>

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    data-aos-duration="1000"
                                    className="mx-auto">
                                    {/* <Button text='Start now' /> */}
                                    <button>Start New</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide
                        // key={i}
                    >
                        <div
                            style={{
                                backgroundImage: `linear-gradient(rgba(1,1,1,0.2),rgba(1,1,1,0.2) ), url(${"/images/commercial.jpg"})`
                            }}
                            className='!bg-cover h-full flex items-center justify-center'
                        >
                            <div className="flex text-center flex-col space-y-4 lg:space-y-8">
                                <h1
                                    style={{
                                        textShadow: '0 0 10px #111111'
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1000"
                                    className="text-3xl md:text-5xl lg:text-7xl font-black text-white">BUILD CONFIDENCE!</h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1000"
                                    className="text-white font-semibold text-lg max-w-[95%] mx-auto md:text-2xl lg:text-3xl">
                                    Helping you to feel more confident both inside and outside 
                                </p>

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    data-aos-duration="1000"
                                    className="mx-auto">
                                    {/* <Button text='Start now' /> */}
                                    <button>Start New</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                



            </Swiper>
        </motion.div >
    )
}

export default Hero
