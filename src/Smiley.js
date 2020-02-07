import React, { Component } from "react";
import neutralFace from "./neutralFace.png";
import loudlyCryingFace from "./loudlyCryingFace.png";
import smilingFace from "./smilingFace.png";

class Smiley extends Component {

    state = {
        iconSmiley : neutralFace
    };

    randomNb = () => {
        const nbRandom = (-1) + (1 - (-1)) * Math.random();
        console.log(nbRandom);
        if (nbRandom > 0.3) { 
            this.setState({iconSmiley : smilingFace});
        }
        if (nbRandom <= 0.3 && nbRandom > -0.3) { 
            this.setState({iconSmiley : neutralFace});
        }
        if (nbRandom <= -0.3) { 
            this.setState({iconSmiley : loudlyCryingFace});
        }
    };

    render() {
        return (
            // <div className="Smiley">
                <bouton onClick={this.randomNb} className="Smiley">
                    <img src={this.state.iconSmiley} alt="smiley" />
                </bouton>
            // </div>
        );
    }
}


export default Smiley;
