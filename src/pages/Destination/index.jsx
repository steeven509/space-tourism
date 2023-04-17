import React, { useState } from 'react'
import Header from '../../components/Header'
import TextTop from '../../components/TextTop'
import data from '../../data/data.json'

const Destination = () => {
    const [destination] = useState(data.destinations)
    const [indexTable, setIndex] = useState(0)

    const { name, description, distance, travel, images } = destination[indexTable]

    return (
        <>
            <Header />
            <main className="destination section">
                <div className="destination__container container">
                    <TextTop title="Pick your destination" number="01" />
                    <div className="destination__content">
                        <div className="img-content-left">
                            <img src={images.png} alt={name} />
                        </div>
                        <div className="txt-content-right">
                            <ul className="btns-list">
                                {destination.map(({ name }, index) => {
                                    return (
                                        <li>
                                            <button
                                                key={index}
                                                onClick={() => setIndex(index)}
                                                className={`btn ${
                                                    index === indexTable
                                                        ? 'active'
                                                        : ''
                                                }`}
                                            >
                                                {name}
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                            <h1 className="section__title-big">{name}</h1>
                            <p className="section__description">
                                {description}
                            </p>
                            <div className="line"></div>

                            <div className="info">
                                <div className="info-box-left">
                                    <span>Avg. Distance</span>
                                    <p>{distance}</p>
                                </div>
                                <div className="info-box-right">
                                    <span>Est. Travel Time</span>
                                    <p>{travel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Destination
