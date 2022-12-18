import { Container, Col, Row } from "react-bootstrap";
import { SkillsItem } from "./SkillsItem";
import { frontSkillData } from "./skillData";
import { otherSkillData } from "./skillData";
import { backSkillData } from "./skillData";
import plumtreeImg from "../../assets/images/plumtree.png";
import { Fade } from "react-awesome-reveal";
import { AttentionSeeker } from "react-awesome-reveal";
import "./Skills.css";
import "../../App.css";

export const Skills = () => {
  return (
    <section id="skills">
      <div id="island">
        <Fade duration={300}>
          <AttentionSeeker effect="bounce" delay={1000}>
            <img
              src={plumtreeImg}
              alt="plumtree"
              className="animate__animated animate__bounce animate__delay-2s"
            />
          </AttentionSeeker>  
        </Fade>
      </div>
      <Container>
        <Fade>
          <h2 className="section-title" style={{ color: "white" }}>
            SKILLS
          </h2>
        </Fade>
        <Row id="skills-container">
          <Col xl={4} sm={10} md={8} xs={11}>
            <Fade direction="up">
              <div className="skills-card-container">
                <h3>Front End</h3>
                <div className="skills-card">
                  <Row>
                    {frontSkillData.map((skillItem, index) => (
                      <SkillsItem key={index} {...skillItem} />
                    ))}
                  </Row>
                </div>
              </div>
            </Fade>
          </Col>
          <Col xl={4} sm={10} md={8} xs={11}>
            <Fade direction="up">
              <div className="skills-card-container">
                <h3>Back End</h3>
                <div className="skills-card">
                  <Row>
                    {backSkillData.map((skillItem, index) => {
                      return <SkillsItem key={index} {...skillItem} />;
                    })}
                  </Row>
                </div>
              </div>
            </Fade>
          </Col>
          <Col xl={4} sm={10} md={8} xs={11}>
            <Fade direction="up">
              <div className="skills-card-container">
                <h3>Other</h3>
                <div className="skills-card">
                  <Row>
                    {otherSkillData.map((skillItem, index) => {
                      return <SkillsItem key={index} {...skillItem} />;
                    })}
                  </Row>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
