import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from '../../components/games/Mainpower';


function Mainpower() {
    return (
        <div className="game-thumb">
            <iframe src="https://cdn.htmlgames.com/MainPower/" width="1000px" height="600px" align="center"></iframe>
        </div>
    );
}



export default connect(null, { Mainpower })(withRouter(Mainpower));