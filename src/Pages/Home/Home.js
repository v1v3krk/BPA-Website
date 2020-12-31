import React from 'react';
import Jumbotron from '../../UI/Jumbotron/Jumbotron';
import "./Home.scss";
import { FaCar, FaMapMarkedAlt, FaUtensils, FaUserTie } from "react-icons/fa";

const Home = (props) => {

    return (
        <div className="Home">
            <Jumbotron fillColor="#ff297b"></Jumbotron>
            <div className="Menu">
                <div className="MenuItems">
                    <a href="/transit" className="MenuItem"><div >
                        <FaCar className="MenuIcon"></FaCar>
                        <p>Transit</p>
                    </div></a>
                    <a href="/attractions" className="MenuItem"><div>
                        <FaMapMarkedAlt className="MenuIcon"></FaMapMarkedAlt>
                        <p>Attractions</p>
                    </div></a>
                    <a href="/food" className="MenuItem"><div>
                        <FaUtensils className="MenuIcon"></FaUtensils>
                        <p>Food</p>
                    </div>
                    </a>
                    <a href="/attire" className="MenuItem"> <div>
                        <FaUserTie className="MenuIcon"></FaUserTie>
                        <p>Attire</p>
                    </div>
                    </a>
                </div>
            </div>
            <div style={{height: "1000px"}}></div>
        </div>
    )

}

export default Home;