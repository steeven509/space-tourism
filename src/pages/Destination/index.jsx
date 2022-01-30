import React, { useState } from 'react'
import Header from '../../components/Header'
import TextTop from '../../components/TextTop'
import {
    DestinationA,
    DestinationB,
    DestinationC,
    DestinationD,
} from './components/TabsContent'

const Destination = () => {
    const [activeOnglets, setActiveOnglets] = useState(1)

    const Onglets = () => {
        switch (activeOnglets) {
            case 1:
                return <DestinationA />
            case 2:
                return <DestinationB />
            case 3:
                return <DestinationC />
            case 4:
                return <DestinationD />
            default:
        }
    }
    const ChangeOnglets = (number) => {
        setActiveOnglets(number)
    }

    return (
        <>
            <Header />
            <div className="destination section">
                <div className="destination__container container">
                    <TextTop title="Pick your destination" number="01" />
                    <div className="destination__box">
                        <ul className="destination__list-btns">
                            <li className="destina__item">
                                <button
                                    onClick={() => ChangeOnglets(1)}
                                    className={`btn ${
                                        activeOnglets === 1 ? 'active' : ''
                                    }`}
                                >
                                    Moon
                                </button>
                            </li>
                            <li className="destina__item">
                                <button
                                    onClick={() => ChangeOnglets(2)}
                                    className={`btn ${
                                        activeOnglets === 2 ? 'active' : ''
                                    }`}
                                >
                                    Mars
                                </button>
                            </li>
                            <li className="destina__item">
                                <button
                                    onClick={() => ChangeOnglets(3)}
                                    className={`btn ${
                                        activeOnglets === 3 ? 'active' : ''
                                    }`}
                                >
                                    Europa
                                </button>
                            </li>
                            <li className="destina__item">
                                <button
                                    onClick={() => ChangeOnglets(4)}
                                    className={`btn ${
                                        activeOnglets === 4 ? 'active' : ''
                                    }`}
                                >
                                    Titan
                                </button>
                            </li>
                        </ul>

                        <div className="destination__content">{Onglets()}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destination
