import React from 'react'
import './containers.css'
import video_1 from '../../videos/video.mp4';

function Container() {

    return (

        <div className='Nansen'> 

            <div className="container">
                <div className="containers">
                    <div className="left">
                        <div className="text">
                            <h1>Navigate Fast</h1>
                            <p>Search, explore, and find what you need all in one place. Type the name
                                of your desired token, wallet or entity. Effortlessly navigate through
                                dashboards and apply filters to show only the data you want to see.</p>
                        </div>
                    </div>
                    <div className="right">
                        <video src={video_1} autoPlay muted loop></video>
                    </div>
                </div>
                <div className="containers">
                    <div className="left">
                        <div className="text">
                            <h1>Navigate Fast</h1>
                            <p>Search, explore, and find what you need all in one place. Type the name
                                of your desired token, wallet or entity. Effortlessly navigate through
                                dashboards and apply filters to show only the data you want to see.</p>
                        </div>
                    </div>
                    <div className="right">
                        <video src={video_1} autoPlay muted loop></video>
                    </div>
                </div>
                <div className="containers">
                    <div className="left">
                        <div className="text">
                            <h1>Navigate Fast</h1>
                            <p>Search, explore, and find what you need all in one place. Type the name
                                of your desired token, wallet or entity. Effortlessly navigate through
                                dashboards and apply filters to show only the data you want to see.</p>
                        </div>
                    </div>
                    <div className="right">
                        <video src={video_1} autoPlay muted loop></video>
                    </div>
                </div>
                <div className="containers">
                    <div className="left">
                        <div className="text">
                            <h1>Navigate Fast</h1>
                            <p>Search, explore, and find what you need all in one place. Type the name
                                of your desired token, wallet or entity. Effortlessly navigate through
                                dashboards and apply filters to show only the data you want to see.</p>
                        </div>
                    </div>
                    <div className="right">
                        <video src={video_1} autoPlay muted loop></video>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Container;