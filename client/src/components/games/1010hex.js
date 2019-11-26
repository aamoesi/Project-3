import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from '../../components/games/1010hex';


function Tentenhex() {
    return (
        <div className="game-thumb">
            <div>
                <iframe src="https://cdn.htmlgames.com/1010Hex/" width="1000px" height="600px" align="center"></iframe>
            </div>
        </div>
    );
}



export default connect(null, { Tentenhex })(withRouter(Tentenhex));