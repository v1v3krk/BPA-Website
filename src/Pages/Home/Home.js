import React from 'react';
import Jumbotron from '../../UI/Jumbotron';
import "./Home.scss";
import {FaCar, FaMapMarkedAlt, FaUtensils, FaUserTie} from "react-icons/fa";

const Home = (props) => {

    return (
        <div className="Home">
            <Jumbotron fillColor="#ff297b"></Jumbotron>
            <div className="Menu">
                <div className="MenuItems">
                    <div className="MenuItem">
                        <FaCar className="MenuIcon"></FaCar>
                        <p>Transit</p>
                    </div>
                    <div className="MenuItem">
                        <FaMapMarkedAlt className="MenuIcon"></FaMapMarkedAlt>
                        <p>Attractions</p>
                    </div>
                    <div className="MenuItem">
                        <FaUtensils className="MenuIcon"></FaUtensils>
                        <p>Food</p>
                    </div>
                    <div className="MenuItem">
                        <FaUserTie className="MenuIcon"></FaUserTie>
                        <p>Attire</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Home;