import { Container,Col,Row } from "react-bootstrap"
import "./Skills.css"
import "../../App.css"
import jsIcon from "../../assets/images/javascript.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 40
        }
      };

    return(
        <section id="skills">
            <Container>
                <h2 className="section-title">SKILLS</h2>
                {/* <Carousel responsive={responsive} infinite={true} partialVisible={true} className="owl-carousel owl-theme skill-slider">
                    <Col>
                        <div className="skills-card-container">
                            <h3>Front End</h3>
                            <div className="skills-card">
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML5</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS3</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="skills-card-container">
                            <h3>Front End</h3>
                            <div className="skills-card">
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML5</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS3</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="skills-card-container">
                            <h3>Front End</h3>
                            <div className="skills-card">
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML5</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS3</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Carousel> */}
                <Row className="skills-container">
                    <Col xl={4} sm={10} md={8} xs={11}>
                        <div className="skills-card-container">
                            <h3>Front End</h3>
                            <div className="skills-card">
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML5</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS3</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} sm={10} md={8} xs={11}>
                        <div className="skills-card-container">
                            <h3>Front End</h3>
                            <div className="skills-card">
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML5</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS3</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML5</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS3</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} sm={10} md={8} xs={11}>
                        <div className="skills-card-container">
                            <h3>Front End</h3>
                            <div className="skills-card">
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML5</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS3</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>HTML5</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>CSS3</h5>
                                    </Col>
                                    <Col>
                                        <img src={jsIcon} alt="javascript"/>
                                        <h5>JavaScript</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}