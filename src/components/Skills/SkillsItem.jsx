import { Col } from "react-bootstrap";

export const SkillsItem = ({ imgSrc, title }) => {
  return (
    <Col>
      <img src={imgSrc} alt={title} />
      <span>{title}</span>
    </Col>
  );
};
