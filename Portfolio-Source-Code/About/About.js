import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import './About.css'

function About() {
    return (
        <div className="containers">
            <div className="about_info">
                <div className="left_info">
                    <Typography variant="h5" className="items">Name:</Typography>
                    <Typography variant="h5" className="items">Phone:</Typography>
                    <Typography variant="h5" className="items">Email:</Typography>
                </div>
                <div className="right_info">
                    <Typography variant="h5" className="items">
                        ABDURAHMAN JEMAL
                    </Typography>
                    <Typography variant="h5" className="items">
                        +251920861401
                    </Typography>
                    <Typography variant="h5" className="items">
                        jabdurahman5695@gmail.com
                    </Typography>
                </div>
            </div>
        </div>
 
    )
}

export default About
