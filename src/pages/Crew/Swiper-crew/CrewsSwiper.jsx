import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
import data from '../../../data/data.json'

// import required modules
import { Pagination } from 'swiper'

function CrewsSwiper() {
    const [crew] = useState(data.crew)
    console.log(crew)
    const pagination = {
        el: '.swiper-pagination',
        clickable: true,
    }

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="swiper mySwiper"
            >
                <div className="swiper-wrapper">
                    {crew.map((item, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                            <div className="content-left">
                                <h2 className="section__title-normal">
                                    {item.role}
                                </h2>
                                <h3 className="section__subtitle">
                                    {item.name}
                                </h3>
                                <p className="section__description">
                                    {item.bio}
                                </p>
                            </div>
                            <div className="img-content-right">
                                <div className="img-content-mobile">
                                    <img
                                        src={item.images.png}
                                        alt={item.name}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>

                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    )
}
export default CrewsSwiper

//  {/* Slide B */}
//  <SwiperSlide className="swiper-slide">
//  <div className="content-left">
//      <h2 className="section__title-normal">Commander</h2>
//      <h3 className="section__subtitle">
//          Douglas Hurley
//      </h3>
//      <p className="section__description">
//          Douglas Gerald Hurley is an American engineer,
//          former Marine Corps pilot and former NASA
//          astronaut. He launched into space for the third
//          time as commander of Crew Dragon Demo-2.
//      </p>
//  </div>
//  <div className="img-content-right">
//      <img
//          src="./assets/crew/image-victor-glover.png"
//          alt="douglas-hurley"
//      />
//  </div>
// </SwiperSlide>
