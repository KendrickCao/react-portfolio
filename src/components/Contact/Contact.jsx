import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap"
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";
import "./Contact.css"

export const Contact = () =>{
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_v0i7i0b",
          "template_gsjteh7as",
          form.current,
          "WgmCi7M2QnhgijWjY"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            document.getElementById("email-form").reset()
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
      <section id="contact">
        <Container>
          <Fade>
          <h2 className="section-title">CONTACT</h2>
          </Fade>
          <Fade fraction={0.5}>
          <div className="form-container">
            <form ref={form} id="email-form">
                <input
                required
                type="text"
                name="user_name"
                className="email-input"
                placeholder="Your Name"
                />
                <input
                required
                type="email"
                name="user_email"
                className="email-input"
                placeholder="Your Email"
                />
                <textarea required name="message" className="email-input" placeholder="Your Message" />
                <div className="connectBtn" onClick={sendEmail}><span>Send</span></div>
                <span>{done && "Thanks for Contacting"}</span>
            </form>
          </div>
          </Fade>
          
        </Container>
      </section>
    );
}