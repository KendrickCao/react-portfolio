import { Container } from "react-bootstrap"
import { Projects } from "./Projects"
import { projectData } from "./projectData";
import {Fade} from 'react-awesome-reveal';
import 'react-multi-carousel/lib/styles.css';
import "./Portfolio.css"

export const Portfolio = () =>{

    return(
            <section id="projects">
                <Container>
                <Fade fraction="1">
                    <h2 className="section-title">PROJECTS</h2>
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