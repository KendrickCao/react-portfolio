import { Col,Row } from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Fade } from 'react-awesome-reveal';

export const Projects = ({title,description,tech,gitLink,liveLink,imgSrc}) =>{

    const responsive = {
        large: {
          // the naming can be any
          breakpoint: { max: 4000, min: 1366 },
          items: 1
        },
        small:{
            breakpoint: { max: 1365, min: 0 },
            items:1
        }
    };
    return(
        <Row>
            
            <Col sm={12} xl={4}>
                <Fade direction="left">
                    <div>
                        <h2 className="mb-3 project-title">{title}</h2>
                        <div>
                            <div className="project-tech mb-3">
                            {
                                tech.map((techitem,index) => <div key={index} className="techbox">{techitem}</div>)
                            }
                            </div>
                            <p className="project-description">{description}</p>
                            <div className="button-wrapper mb-3">
                                <a href={gitLink} target="_blank" rel="noreferrer"><div className="connectBtn"><span>Github</span></div></a>
                                {liveLink!==""&&<a href={liveLink} target="_blank" rel="noreferrer"><div className="connectBtn"><span>Live</span></div></a>}
                            </div>                                
                        </div>               
                    </div>
                </Fade>
            </Col>
            <Col sm={12} xl={8} className="project-img-wrapper">
                <Fade direction="right">
                    <div>
                        <Carousel responsive={responsive} infinite={true}  removeArrowOnDeviceType={"small"}>
                        {
                            imgSrc.map((imgitem,index) => <img key={index} src={imgitem} alt={title}/>)
                        }
                        </Carousel>
                    </div>
                </Fade>
            </Col>
            
        </Row>
    )
}