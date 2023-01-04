import { Container } from "react-bootstrap"
import { FaGithub,FaLinkedinIn,FaFileAlt } from "react-icons/fa"
import { Nav } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import "./Hero.css"

export const Hero = () => {

    return(
        <section className="hero" id="home">
            <Container style={{padding:"30vh 0"}}>
                <div>
                    <Fade direction="left" cascade damping={0.2}>
                    <h1 className="hero-title animate__animated animate__fadeInLeft">Hi, I'm <span className="linearText">Yanguo.</span><br />
                    I'm a Full Stack Developer.
                    </h1>
                    <Nav.Link href="#contact"><div className="connectBtn animate__animated animate__fadeInLeft animate__delay-1s"><span>Let’s Connect</span></div></Nav.Link>
                    {/* Give linear-gradient color to the icons */}
                    <svg width="0" height="0">
                        <linearGradient id="color-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#02aab0" offset="0%" />
                            <stop stopColor="#00cdac" offset="100%" />
                        </linearGradient>
                    </svg>  
                    <div className="social-icon animate__animated animate__fadeInLeft animate__delay-1s">      
                        <a title="Github" rel="noreferrer" target="_blank" href="https://github.com/KendrickCao/"><FaGithub className="social-icon-svg" style={{ fill: "url(#color-gradient)" }}/></a>
                        <a title="LinkedIn" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/yanguocao/"><FaLinkedinIn className="social-icon-svg" style={{ fill: "url(#color-gradient)" }}/></a>
                        <a title="Resume" rel="noreferrer" target="blank" href="https://drive.google.com/file/d/1ZqbMUezQkTWjO-KDDcbSNDl406yxgaIj/view?usp=sharing"><FaFileAlt className="social-icon-svg"style={{ fill: "url(#color-gradient)" }}/></a>
                    </div>
                    </Fade>
                </div>
                    
            </Container>
        </section>
    )
}