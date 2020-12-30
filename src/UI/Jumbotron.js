import React from 'react';
import "./Jumbotron.scss";

const Jumbotron = (props) => {
    return (
        <div className="JumbotronHolder">
            <div className="Jumbotron">
                <div className="Toolbar">

                </div>
                <div className="Content">
                    <p className="Header">BPA National Leadership Conference</p>
                    <p className="SubHeader">2021 - Orlando, Florida</p>
                    <div className="Button">
                        <p>Explore</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="shadow" viewBox="0 0 1440 150">
                    <path fill={props.fillColor} fill-opacity="1" d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Jumbotron;