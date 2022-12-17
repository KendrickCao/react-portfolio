import { Col } from "react-bootstrap"

export const SkillsItem = ({imgSrc,title}) =>{

    return (
          <Col className="animate__animated animate__fadeInLeft">
            <img src={imgSrc} alt={title} />
            <h5>{title}</h5>
          </Col>
    )
}
