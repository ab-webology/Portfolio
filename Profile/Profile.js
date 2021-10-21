import React from 'react'
import './Profile.css'

// import icons 
import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';


import bannerImg from '../imgs/Smile.jpg';
import { Typography, Container, Grid } from '@material-ui/core'


function Profile() {
    return (
        <div className="Container">
            <div className="icons">
                <a href="https://www.facebook.com/abdurahman.jemal.79/" target="_blank"><FaFacebook className="facebook" /></a>
                <a href="https://web.telegram.org/k/" target="_blank"><FaTelegram className="telegram" /></a>
                {/* <a href="" target="_blank"><FaTwitter className="twitter" /></a> */}
                <a href="https://github.com/ab-webology/firts-project" target="_blank"><FaGithubSquare className="github" /></a>
            </div>
            <div className="about_img">
                {/* <img src={bannerImg} alt="" /> */}
                <img src="https://docs.google.com/uc?id=1XHXPZ_kzQ1Sc06kvLvKQLXFSZ_2X3wGi" alt="" />
            </div>
            <div className="phone"> 
                <h3>+251920861401</h3>
            </div>
        </div>
    )
}

export default Profile
