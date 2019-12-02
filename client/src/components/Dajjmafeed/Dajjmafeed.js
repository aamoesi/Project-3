// NOTE: This file will feed brain games from DAJJMA!  More to come.

import React from "react";
import { Link } from "react-router-dom";
// import "./Gamefeed.css";

const Dajjmafeed = props => (

    
    // Games Produced by DAJJMA!
    <div className="game-thumb">
        <Link to="/games/mergeit">
            <img
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src='https://www.htmlgames.com/uploaded/thumb500/mergeit500.jpg'
            />
        </Link>
        <Link to="/games/1010hex">
            <img
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src='https://www.htmlgames.com/uploaded/thumb500/1010hex500.jpg'
            />
        </Link>
        <Link to="/pokemon-clicky">
            <img
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src='https://cdn.htmlgames.com/MainPower/img/icon/image-300x200.jpg'
            />
        </Link>
    </div>
);

export default Dajjmafeed;