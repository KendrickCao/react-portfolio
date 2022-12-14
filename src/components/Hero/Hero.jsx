import { Container } from "react-bootstrap"
import { FaGithub,FaLinkedinIn,FaFileAlt } from "react-icons/fa"
import { Skills } from '../../components/Skills/Skills';
import  plumtreeImg  from "../../assets/images/plumtree.png"
import 'animate.css'
import "./Hero.css"

export const Hero = () => {

    return(
        <section className="hero" id="home">
            <Container>
                <div className="aligh-items-center">
                    <h1 className="hero-title animate__animated animate__fadeInLeft">Hi, I'm <span className="linearText">Yanguo.</span><br />
                    I'm a Full Stack Developer.
                    </h1>
                    <div className="connectBtn animate__animated animate__fadeInLeft animate__delay-1s" onClick={() => console.log('connect')}><span>Let’s Connect</span></div>
                    {/* Give linear-gradient color to the icons */}
                    <svg width="0" height="0">
                        <linearGradient id="color-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#02aab0" offset="0%" />
                            <stop stopColor="#00cdac" offset="100%" />
                        </linearGradient>
                    </svg>  
                    <div className="social-icon animate__animated animate__fadeInLeft animate__delay-1s">      
                        <a target="blank" href="https://github.com/KendrickCao/"><FaGithub className="social-icon-svg" style={{ fill: "url(#color-gradient)" }}/></a>
                        <a target="blank" href="https://www.linkedin.com/in/yanguocao/"><FaLinkedinIn className="social-icon-svg" style={{ fill: "url(#color-gradient)" }}/></a>
                        <a target="blank" href="https://drive.google.com/file/d/11iSpHAFuoUEUs0MhtJ96e-MClyqBjodM/view?usp=sharing"><FaFileAlt className="social-icon-svg"style={{ fill: "url(#color-gradient)" }}/></a>
                    </div>
                </div>
            </Container>
                <div id="island">
                    <img src={plumtreeImg} alt="plumtree" className="animate__animated animate__bounce animate__delay-2s"/>
                    <div className="background-image-right"></div>
                </div>
                <Skills />
        </section>
    )
}