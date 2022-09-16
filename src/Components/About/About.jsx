import React from "react";
import "./about.css";
import me from "../../assets/me2.jpg";
import { BsAwardFill, BsFillFolderFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="me2" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about_card">
              <BsFillFolderFill className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            temporibus exercitationem maiores dignissimos, adipisci consequatur
            molestiae a hic eos harum, reprehenderit, numquam ratione? Aperiam
            accusamus nesciunt accusantium distinctio qui vel.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
