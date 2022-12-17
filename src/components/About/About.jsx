import { Container,Col,Row } from "react-bootstrap"

import selfie from "../../assets/images/me1.png"
import "./About.css"

export const About = () =>{

    return (
      <section id="about">
        <Container>
          <h2 className="section-title">ABOUT</h2>
          <Row>
            <Col lg={6} sm={12}>
              <div className="selfie-container">
                <img alt="selfie" src={selfie} />
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <p>
                As a dedicated and hardworking postgraduate from Cardiff
                University, I have built a solid foundation of software
                development concepts and practice through courses and projects.
                Finally got the first class degree.
              </p>
              <p>
                As a software engineer, I believe that technology represents
                unlimited possibilities. I was an IT lover since I was a child.
                New technologies change our lives again and again. The
                fast-changing world also means I need strong adaptability and
                continuous learning. I love this kind of challenge. I hope I can
                dive into this area and use my power to make our life better.
              </p>
              <p>
                In my spare time, I love doing sports and music. I am always
                sweating on the basketball court or playing the guitar in a lazy
                afternoon.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
}