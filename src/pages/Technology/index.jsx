import React from 'react'
import Header from '../../components/Header'
import TextTop from '../../components/TextTop'

const Technology = () => {
    const range = [1, 2, 3]
    return (
        <>
            <Header />
            <div className="technology section">
                <div className="technology__container">
                    <TextTop title="Space launch 101" number="03" />
                    <div className="technology__content">
                        <div className="content-left">
                            <ul className="btns-list">
                                {range.map(() => (
                                    <button>1</button>
                                ))}
                            </ul>
                        </div>
                        <div className="content-right"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technology
