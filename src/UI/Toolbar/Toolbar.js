import "./Toolbar.scss";

import React, { Component } from 'react';

class Toolbar extends Component {

    state = {
        opaque: false,
    }

    componentDidMount() {
        var scrollEnabled = true;

        document.addEventListener("scroll", () => {

            if (scrollEnabled) {
                const currentScroll = window.scrollY;
                this.setState({
                    opaque: currentScroll > 70,
                });
            }

        });


    }

    render() {

        return (
            <div className="Toolbar" style={{backgroundColor: this.state.opaque ? "#342f7a" : "transparent"}}>
                <a href="/" className="Brand"><div>
                    <p>BPA NLC</p>
                </div></a>
                <div className="Pages">
                    <a href="/maps" className="Page"><div>
                        <p>Maps</p>
                    </div></a>
                    <a href="/transit" className="Page"><div>
                        <p>Transit</p>
                    </div></a>
                    <a href="/attractions" className="Page"><div>
                        <p>Attractions</p>
                    </div></a>
                    <a href="/food" className="Page"><div>
                        <p>Food</p>
                    </div></a>
                    <a href="/attire" className="Page"><div>
                        <p>Attire</p>
                    </div></a>
                </div>
            </div>
        )

    }
}

export default Toolbar;