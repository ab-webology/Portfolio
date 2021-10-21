import "./App.css";
import { useState,useEffect } from "react";
// importing components 
import NavBar from "./NavBar/NavBar";
import Resume from './Resume/Resume'
import About from './About/About'
import Projects from './Projects/Projects'
import Contacts from './Contacts/Contacts'
import Four04 from './Four04/Four04'

import { FaSun } from 'react-icons/fa';//FaMoon 
import { FaRegMoon } from 'react-icons/fa';//FaMoon 

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Profile/Profile'
import { Container, Grid } from '@material-ui/core'
import { light } from "@material-ui/core/styles/createPalette";

function App({model}) {
  const [isMode,setMode]=useState(true)
  model=isMode

  return (
    <div className={`light ${isMode && "dark"}`} id="app" >
      <div className={`nav_container ${!isMode && "nav_light"}`}>
        <NavBar className="navBar" />
      </div>
      <div className="themeMode">
              <FaRegMoon id="moon" className={`modes  moon ${isMode && "not_active"}`} onClick={()=>setMode(true)}/>
              <FaSun id="sun" className={`modes sun ${!isMode && "not_active"}`} onClick={()=>setMode(false)}/>
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="profile_container">
            <Profile />
          </div>
        </Grid>
        <Router>
          <Switch>
            <Route exact path="/">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Resume />
              </Grid>
            </Route>
            <Route exact path="/About">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <About />
              </Grid>
            </Route>
            <Route exact path="/Projects">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Projects />
              </Grid>
            </Route>
            <Route exact path="/Contacts">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Contacts />
              </Grid>
            </Route>
            <Route path="/">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Four04 />
              </Grid>
            </Route>
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}

export default App;