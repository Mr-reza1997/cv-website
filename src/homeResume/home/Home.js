import React from "react";
import "./home.css";
const Home = () => {
  return (
    <section id="Home" className=" section home">
      <div className="container">
        <div className="row home-row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <small className="name">Reza Amiri</small>
            </h3>
            <h3 className="my-profession">
              I' m a <small className="typing">FrontEnd Developer</small>
            </h3>
            <p>
            Experienced Frontend Developer with a demonstrated<br />
                    history of working in the computer software industry.<br />
                    Skilled in HTML, Front-end Development, Bootstrap, <br />
                    Cascading Style Sheets (CSS) <br />
                    Proficient in JavaScript,  React js; plus few other related libraries. <br />

            </p>
            <a href="resume.pdf" className="btn hire-me" download="Reza resume.pdf">
              Download CV
            </a>
          </div>
          <div className="home-img padd-15">
            <img src="./rezaaa.jpg" alt="Reza" />
          </div>
          <div className="menu">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
