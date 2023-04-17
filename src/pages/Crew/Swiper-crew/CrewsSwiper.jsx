import React from 'react'
import Swiper from 'swiper'
import 'swiper/css/bundle'
// import data from '../../../data/data"./assets/crew/"
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper'



// install Swiper modules
SwiperCore.use([Pagination])

class CrewsSwiper extends React.Component {
    componentDidMount() {
        this.swiper = new Swiper('.mySwiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })
    }

    render() {
        return (
            <>
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        {/* Slide A  */}
                        <div class="swiper-slide">
                            <div className="content-left">
                                <h2 className="section__title-normal">
                                    Commander
                                </h2>
                                <h3 className="section__subtitle">
                                    Douglas Hurley
                                </h3>
                                <p className="section__description">
                                    Douglas Gerald Hurley is an American
                                    engineer, former Marine Corps pilot and
                                    former NASA astronaut. He launched into
                                    space for the third time as commander of
                                    Crew Dragon Demo-2.
                                </p>
                            </div>
                            <div className="img-content-right">
                                <img src="./assets/crew/image-victor-glover.png" alt="douglas-hurley" />
                            </div>
                        </div>
                        {/* Slide B  */}
                        <div class="swiper-slide">
                            <div className="content-left">
                                <h2 className="section__title-normal">
                                    Commander
                                </h2>
                                <h3 className="section__subtitle">
                                    Douglas Hurley
                                </h3>
                                <p className="section__description">
                                    Douglas Gerald Hurley is an American
                                    engineer, former Marine Corps pilot and
                                    former NASA astronaut. He launched into
                                    space for the third time as commander of
                                    Crew Dragon Demo-2.
                                </p>
                            </div>
                            <div className="img-content-right">
                                <img src="./assets/crew/image-victor-glover.png" alt="douglas-hurley" />
                            </div>
                        </div>
                        {/* Slide C  */}
                        <div class="swiper-slide">
                            <div className="content-left">
                                <h2 className="section__title-normal">
                                    Commander
                                </h2>
                                <h3 className="section__subtitle">
                                    Douglas Hurley
                                </h3>
                                <p className="section__description">
                                    Douglas Gerald Hurley is an American
                                    engineer, former Marine Corps pilot and
                                    former NASA astronaut. He launched into
                                    space for the third time as commander of
                                    Crew Dragon Demo-2.
                                </p>
                            </div>
                            <div className="img-content-right">
                                <img src="./assets/crew/image-victor-glover.png" alt="douglas-hurley" />
                            </div>
                        </div>
                        {/* Slide D  */}
                        <div class="swiper-slide">
                            <div className="content-left">
                                <h2 className="section__title-normal">
                                    Commander
                                </h2>
                                <h3 className="section__subtitle">
                                    Douglas Hurley
                                </h3>
                                <p className="section__description">
                                    Douglas Gerald Hurley is an American
                                    engineer, former Marine Corps pilot and
                                    former NASA astronaut. He launched into
                                    space for the third time as commander of
                                    Crew Dragon Demo-2.
                                </p>
                            </div>
                            <div className="img-content-right">
                                <img src="./assets/crew/image-victor-glover.png" alt="douglas-hurley" />
                            </div>
                        </div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                </div>
            </>
        )
    }
}
export default CrewsSwiper
