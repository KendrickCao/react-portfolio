import { Col } from "react-bootstrap";

export const SkillsItem = ({ imgSrc, title }) => {
  return (
    <Col>
      <img src={imgSrc} alt={title} />
      <h5>{title}</h5>
    </Col>
  );
};
