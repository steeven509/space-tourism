import React from 'react'
import moon from '../../../assets/destination/image-moon.png'
import mars from '../../../assets/destination/image-mars.png'
import europa from '../../../assets/destination/image-europa.png'
import titan from '../../../assets/destination/image-titan.png'

export const DestinationA = () => {
    return (
        <div className="content section">
            <div className="img-content-left ">
                <img src={moon} alt="moon" />
            </div>

            <div className="content-right">
                <h2 className="section__title-big"> Moon </h2>
                <p className="section__description">
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                </p>

                <div className="line"></div>

                <div className="info">
                    <div className="info-box-left">
                        <span>Avg. Distance</span>
                        <p>384,400 KM</p>
                    </div>
                    <div className="info-box-right">
                        <span>Est. Travel Time</span>
                        <p>3 Days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const DestinationB = () => {
    return (
        <div className="content section">
            <div className="img-content-left ">
                <img src={mars} alt="moon" />
            </div>

            <div className="content-right">
                <h2 className="section__title-big"> Mars</h2>
                <p className="section__description">
                    Don’t forget to pack your hiking boots. You’ll need them to
                    tackle Olympus Mons, the tallest planetary mountain in our
                    solar system. It’s two and a half times the size of Everest!
                </p>

                <div className="line"></div>

                <div className="info">
                    <div className="info-box-left">
                        <span>Avg. Distance</span>
                        <p>225 MIL. km</p>
                    </div>
                    <div className="info-box-right">
                        <span>Est. Travel Time</span>
                        <p>9 months</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const DestinationC = () => {
    return (
        <div className="content section">
            <div className="img-content-left ">
                <img src={europa} alt="moon" />
            </div>

            <div className="content-right">
                <h2 className="section__title-big"> Europa</h2>
                <p className="section__description">
                    The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover’s dream. With an icy surface, it’s
                    perfect for a bit of ice skating, curling, hockey, or simple
                    relaxation in your snug wintery cabin.
                </p>

                <div className="line"></div>

                <div className="info">
                    <div className="info-box-left">
                        <span>Avg. Distance</span>
                        <p>628 MIL. km</p>
                    </div>
                    <div className="info-box-right">
                        <span>Est. Travel Time</span>
                        <p>3 years</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const DestinationD = () => {
    return (
        <div className="content section">
            <div className="img-content-left ">
                <img src={titan} alt="moon" />
            </div>

            <div className="content-right">
                <h2 className="section__title-big"> Titan</h2>
                <p className="section__description">
                    The only moon known to have a dense atmosphere other than
                    Earth, Titan is a home away from home (just a few hundred
                    degrees colder!). As a bonus, you get striking views of the
                    Rings of Saturn.
                </p>

                <div className="line"></div>

                <div className="info">
                    <div className="info-box-left">
                        <span>Avg. Distance</span>
                        <p>1.6 BIL. km</p>
                    </div>
                    <div className="info-box-right">
                        <span>Est. Travel Time</span>
                        <p>7 Days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
