import { Container } from "react-bootstrap"
import { Projects } from "./Projects"
import { projectData } from "./projectData";
import Fade from 'react-reveal/Fade';
import 'react-multi-carousel/lib/styles.css';
import "./Portfolio.css"

export const Portfolio = () =>{

    return(
            <section id="projects">
                <Container>
                <Fade>
                    <h2 className="animate__animated animate__fadeIn section-title">PROJECTS</h2>
                </Fade>
                    {
                        projectData.map((project,index) =>  
                            <Projects key={index} 
                            {...project}/>
                        )
                    }
                </Container>
            </section>
    )
}