import React from 'react'
import "./Resume.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Grid, Typography } from '@material-ui/core'

// importig icons 
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';



import howAmI from '../imgs/howamI.png'
import skillsImg from '../imgs/skill-icon.jpg'
import education from '../imgs/education.png'




// google fonts link 
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
</style>


function Resume({bg}) {
    return (
        <div className="containers">
            <div className="all_info">
                <div className="About">
                    <div className="my_mame">
                    {/* https://drive.google.com/file/d/19XzNxV_0Qf7xu--tHeKf2bgIesJOIvYb */}
                        <div className="skills_img howAmI">
                            <img src="https://docs.google.com/uc?id=19XzNxV_0Qf7xu--tHeKf2bgIesJOIvYb" alt="" />
                               <div className="skills_title education_title">
                                   <h4>How i'm?</h4> 
                               </div>
                        </div>
                        <div className="name-info">
                            <span>hi, my Name is</span>
                            <h3>Abdurahman jemal</h3>
                        <div className="my_role">
                            <span>and i'm</span>
                            <h3> 
                                front end web developer <br/>
                                <span> with more than 2 years of experiance</span> 
                            </h3>
                        </div>
                        </div>
                    </div>
                    <div className="skills_cont">
                        <div className="skills_info">
                            <div className="single_icon">
                                <FaHtml5 className="html"/><br />  
                                <h5 className="skill_lists">HTML</h5>                            
                            </div>
                            <div className="single_icon">
                                <FaCss3 className="css"/><br />   
                                <h5 className="skill_lists">CSS</h5>                            
                            </div>
                            <div className="single_icon">
                                <FaJs className="js"/><br /> 
                                <h5 className="skill_lists">Javascript</h5>                            
                            </div>
                            <div className="single_icon">
                                <FaReact className="react"/><br /> 
                                <h5 className="skill_lists">REACT</h5>                            
                            </div>
                        </div>
                        <div className="skills_img skills_img2">
                        <img src="https://docs.google.com/uc?id=1Kot0eUr21w332maeiz-dYdZo4KF9ysF0" alt="" />
                            
                            <div className="skills_title">
                                <h4>Skills</h4> 
                            </div>
                        </div>
                    </div>
                    <div className="skills_cont education_cont" >
                        <div className="skills_info">
                           <div className="skills_img ">
                           {/* https://drive.google.com/file/d/130yYmKUshePcCTc-pG4cL2Hnrf_wFbxs */}
                           <img src="https://docs.google.com/uc?id=130yYmKUshePcCTc-pG4cL2Hnrf_wFbxs" alt="" />

                               <div className="skills_title education_title">
                                   <h4>Education</h4> 
                               </div>
                           </div>
                            <div className="single_icon">
                                <h5 className="skill_lists education_desc">
                                    Currently i'm 3rd Year Software <br /> 
                                    Engineering Student at Debremarkos <br /> 
                                    University in Ethiopia
                                </h5>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resume
