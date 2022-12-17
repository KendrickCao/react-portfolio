import { Container } from "react-bootstrap"
import { Projects } from "./Projects"
import { projectData } from "./projectData";
import 'react-multi-carousel/lib/styles.css';
import "./Portfolio.css"
export const Portfolio = () =>{

    return(
        <section id="projects">
            <Container>
                <h2 className="section-title">PROJECTS</h2>
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