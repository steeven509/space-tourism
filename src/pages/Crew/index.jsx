import React from 'react'
import Header from '../../components/Header'
import TextTop from '../../components/TextTop'
import CrewsSwiper from './Swiper-crew/CrewsSwiper'

const Crew = () => {
    return (
        <>
            <Header />
            <main className="crew section">
                <div className="crew__container">
                    <div className="crew__content">
                        <TextTop title="Meet Your Crew" number="02" />
                        <CrewsSwiper />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Crew
