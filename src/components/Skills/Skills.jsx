import { Container,Col,Row } from "react-bootstrap"
import { SkillsItem } from "./SkillsItem"
import { frontSkillData } from "./skillData"
import { otherSkillData } from "./skillData"
import { backSkillData } from "./skillData"
import "./Skills.css"
import "../../App.css"

export const Skills = () =>{
    
    return(
        <section id="skills">
            <Container>
                <h2 className="section-title" style={{color:"white"}}>SKILLS</h2>
                <Row id="skills-container">
                    <Col xl={4} sm={10} md={8} xs={11}>
                        <div className="skills-card-container">
                            <h3>Front End</h3>
                            <div className="skills-card">
                                <Row>
                                    {
                                        frontSkillData.map((skillItem,index) => {
                                            return (
                                                <SkillsItem key={index} 
                                                {...skillItem}/>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} sm={10} md={8} xs={11}>
                        <div className="skills-card-container">
                            <h3>Back End</h3>
                            <div className="skills-card">
                                <Row>
                                    {
                                        backSkillData.map((skillItem,index) => {
                                            return (
                                                <SkillsItem key={index} 
                                                {...skillItem}/>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} sm={10} md={8} xs={11}>
                        <div className="skills-card-container">
                            <h3>Other</h3>
                            <div className="skills-card">
                                <Row>
                                    {
                                        otherSkillData.map((skillItem,index) => {
                                            return (
                                                <SkillsItem key={index} 
                                                {...skillItem}/>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}