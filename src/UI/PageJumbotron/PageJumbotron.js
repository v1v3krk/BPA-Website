import React from 'react';
import "./PageJumbotron.scss";

const PageJumbotron = (props) => {
    return (
        <div className="PageJumbotron">
            <div className="ImageArea">
                <p>{props.title}</p>
            </div>
            <div className="RedStrip"></div>
        </div>
    )
}

export default PageJumbotron;