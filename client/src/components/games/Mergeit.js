import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from '../../components/games/Mergeit';

{/* NOTE: Please do not delete any commented out lines.  Stil working / tweaking. */}

function Mergeit() {
    // useEffect(() => {
    //     const script = document.createElement('script');

    //     script.src = "https://cdn.htmlgames.com/embed.js?game=MergeIt&amp;&amp;bgcolor=white";
    //     script.async = true;

    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, []);
    return (
        <div className="game-thumb">
            <div>
                <iframe src="https://cdn.htmlgames.com/MergeIt/" width="1000px" height="600px" align="center"></iframe>
                {/* <script src="https://cdn.htmlgames.com/embed.js?game=MergeIt&amp;&amp;bgcolor=white"></script> */}
            </div>
        </div>
    );
}

// To explore: useEffect React Hook.
// useEffect(() => {

//   }, []);


export default connect(null, { Mergeit })(withRouter(Mergeit));