import React from 'react'
import './Projects.css'

// import project imgs 
import project1 from '../imgs/c1.jpg'
import project2 from '../imgs/c2.jpg'
import project3 from '../imgs/c3.jpg'
import project4 from '../imgs/c4.jpg'


function Projects() {
    return (
        <div className="Root">
            <h2 className="title">Projects</h2>
            <div className="underline"></div>
            <div className="projects_container">
                {/* single project  */}
                <a href="https://netflix-clone-ab.netlify.app/" target="_blank">
                    <div className="single_project one">
                        <div className="project_img">
                            <img src="https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ldGZsaXh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="project_title">
                            <h3>Netflix-Clone</h3>
                        </div>
                        <div className="project_desc">
                            <p>is a clone project for netflix  <br/> it uses netflix API to access <br /> realtime & updated data </p>
                            <span className="status">Status : Completed</span>

                        </div>

                    </div>
                </a>
                {/* single project  */}
                <a href="https://covid-tracker-ab.netlify.app/" target="_blank">
                    <div className="single_project two">
                        <div className="project_img">
                            <img src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        </div>
                        <div className="project_title">
                            <h3>Covid-Tracker</h3>
                        </div>
                        <div className="project_desc">
                            <p>is covid-19  <br/> tracker that shows the current status of covid-19</p>
                            <span className="status">Status : Completed</span>
                        </div>

                    </div>
                </a>
                {/* single project  */}
                <a href="#">
                    <div className="single_project three">
                        <div className="project_img">
                            <img src="https://images.unsplash.com/photo-1488509082528-cefbba5ad692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="project_title">
                            <h3>Let's Chat</h3>
                        </div>
                        <div className="project_desc">
                            <p>is a chat app that allow us to  <br/> send & recieve messages <br /> in realtime</p>
                            <span className="status">Status : Coming Soon </span>

                        </div>

                    </div>
                </a>
                {/* single project  */}
                <a href="#">
                    <div className="single_project four">
                        <div className="project_img">
                            <img src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="project_title">
                            <h3>Google-Clone</h3>
                        </div>
                        <div className="project_desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Saepe sed error at consectetur rem laborum?</p>
                            <span className="status">Status : Coming Soon </span>

                        </div>

                    </div>
                </a>

            </div>

        </div>
    )
}

export default Projects
