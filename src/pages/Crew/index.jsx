import React from 'react'
import Header from '../../components/Header'
import TextTop from '../../components/TextTop'
import CrewsSwiper from './Swiper-crew/CrewsSwiper'

const Crew = () => {
    return (
        <>
            <Header />
            <div className="crew section">
                <div className="crew__container container">
                    <TextTop title="Meet Your Crew" number="02" />
                    <div className="crew__content">
                        <CrewsSwiper />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crew
