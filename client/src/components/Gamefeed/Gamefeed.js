// NOTE: This file will feed brain games from other developers.  More to come.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Gamefeed.css";
import mergeItGif from "../../gif/merge-it.gif";
import tenTenHexGif from "../../gif/1010-hex.gif";
import mainPowerGif from "../../gif/main-power.gif";


const Gamefeed = props => {


    const [activeGif, setActiveGif] = useState( null );

    const gifSwitch = (event) => {

        setActiveGif( event.currentTarget.getAttribute("src") )
        // console.log(event.currentTarget.getAttribute("src"))

    }

    return (
    // Games Produced by Other Developers
    <div className="game-thumb">
        <Link to="/games/mergeit">
            <img 
                onMouseEnter={ gifSwitch }
                onMouseLeave={ () => setActiveGif(null)}
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src={ activeGif === "https://www.htmlgames.com/uploaded/thumb500/mergeit500.jpg" ? mergeItGif : "https://www.htmlgames.com/uploaded/thumb500/mergeit500.jpg" }
            />
        </Link>
        <Link to="/games/1010hex">
            <img
                onMouseEnter={ gifSwitch }
                onMouseLeave={ () => setActiveGif(null)}
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src={ activeGif === "https://www.htmlgames.com/uploaded/thumb500/1010hex500.jpg" ? tenTenHexGif : "https://www.htmlgames.com/uploaded/thumb500/1010hex500.jpg" }
            />
        </Link>
        <Link to="/games/mainpower">
            <img
                onMouseEnter={ gifSwitch }
                onMouseLeave={ () => setActiveGif(null)}
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src={ activeGif === "https://cdn.htmlgames.com/MainPower/img/icon/image-300x200.jpg" ? mainPowerGif : "https://cdn.htmlgames.com/MainPower/img/icon/image-300x200.jpg" }
            />
        </Link>
    </div>
    )
    };

export default Gamefeed;