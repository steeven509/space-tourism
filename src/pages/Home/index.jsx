import React from 'react'
import Header from '../../components/Header'

const Home = () => {
    return (
        <>
            <Header />
            <main className="home">
                <div className="home__container">
                    <div className="home__content-left">
                        <h1 className="home__title">
                            So, You Want To Travel To
                        </h1>
                        <h2 className="home__subtitle">Space</h2>
                        <p className="home__description">
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </div>

                    <div className="home__btn-box-right">
                        <button className="home__btn btn">Explore</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
