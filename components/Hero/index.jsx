
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
            

                effect={"fade"}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}

            >
              
                    <SwiperSlide
                        
                    >
                      <div className='h-screen !bg-cover w-full'
 style={{
                                backgroundImage: `linear-gradient(rgba(1,1,1,0.2),rgba(1,1,1,0.2) ), url(${"/images/commercial.jpg"})`
                            }}
>
                           
                           </div>
                    </SwiperSlide>
                     <SwiperSlide
                        
                    >
                      <div className='h-screen !bg-cover w-full'
 style={{
                                backgroundImage: `linear-gradient(rgba(1,1,1,0.2),rgba(1,1,1,0.2) ), url(${"/images/commercial.jpg"})`
                            }}
>
                           
                           </div>
                    </SwiperSlide>
                     <SwiperSlide
                        
                    >
                      <div className='h-screen !bg-cover w-full'
 style={{
                                backgroundImage: `linear-gradient(rgba(1,1,1,0.2),rgba(1,1,1,0.2) ), url(${"/images/commercial.jpg"})`
                            }}
>
                           
                           </div>
                    </SwiperSlide>

                   



            </Swiper>
        </motion.div >
    )
}

export default Hero
