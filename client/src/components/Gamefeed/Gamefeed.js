// NOTE: This file will feed brain games from other developers.  More to come.

import React from "react";
import { Link } from "react-router-dom";
import "./Gamefeed.css";

const Gamefeed = props => (
    // <div className="game-thumb">
    //     <a href="https://cdn.htmlgames.com/MergeIt/" target="_blank"><img src="https://www.htmlgames.com/uploaded/thumb500/mergeit500.jpg"></a>
    // </div>
    <div className="game-thumb">
        <Link to="/games/mergeit">
            <img
                style={{ width: 500, height: 300 }}
                src='https://www.htmlgames.com/uploaded/thumb500/mergeit500.jpg'

            />
        </Link>
    </div>
);

export default Gamefeed;