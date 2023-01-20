import { Container } from "react-bootstrap"
import { FaGithub,FaLinkedinIn,FaFileAlt } from "react-icons/fa"
import { RiArrowUpSLine } from "react-icons/ri"
import { Nav } from "react-bootstrap";

import "./Footer.css"
export const Footer = () =>{

    return(
        <footer>
            <Container>
                <Nav.Link href="#home"><RiArrowUpSLine className="backtotop" style={{ fill: "#fff" }}/></Nav.Link>
                    <div className="social-icon">      
                        <a title="Github" rel="noreferrer" target="_blank" href="https://github.com/KendrickCao/"><FaGithub className="social-icon-svg" style={{ fill: "#fff" }}/></a>
                        <a title="LinkedIn" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/yanguocao/"><FaLinkedinIn className="social-icon-svg" style={{ fill: "#fff" }}/></a>
                        <a title="Resume" rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/1FD15aMrSRAvsK0zhQgegQYhn5vbxbI7u4GO3--VI_I8/edit?usp=sharing"><FaFileAlt className="social-icon-svg"style={{ fill: "#fff" }}/></a>
                    </div>
            </Container>
        </footer>
    )
}