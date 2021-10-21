import React from 'react';
import SingleLink from './SingleLink';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <SingleLink className="active" LinkName="Resume" LinkUrl="/" />
                    {/* <SingleLink LinkName="About Me" LinkUrl="About" /> */}
                    <SingleLink LinkName="Projects" LinkUrl="Projects" />
                    <SingleLink LinkName="Contact" LinkUrl="Contacts" />
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
