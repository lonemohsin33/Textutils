import React from 'react'
import gt from "./github-mark.svg";
import ln from "./icons8-linkedin-circled.svg";
import './about.css'
import bot from "./bot.png"


export default function About(props) {
  return (
    <>
      <div className="main">
        <div className="d-flex justify-content-evenly my-4">
          <div>
            <h1 className={props.mode === "dark" ? "wt" : "bt"}>About Me</h1>
            <div
              className="my-4"
              style={{
                color: props.mode === "dark" ? "white" : "#5e513d",
                fontWeight: "bold",
                fontSize: "20px",
                width: "700px",
                textAlign: "center",
                
                fontFamily: "monospace",
              }}
            >
              Currently working on becoming a full-stack developer 🤩. Learning
              while having fun is my goal 🎯, and making applications is the
              most effective way to achieve this. Data Structures and Analogs
              are my focus, and I believe it is all about solving problems at
              the end of the day. Kudos🤗 Check out my projects. Though there
              aren't many😁
            </div>
            <div className="sp">
              <h1 className={props.mode === "dark" ? "wt" : "bt"}>Projects</h1>

              <h4
                style={{
                  color: props.mode === "dark" ? "white" : "#5e513d",
                  fontWeight: "bold",
                  fontSize: "20px",
                  width: "700px",
                  height: "50px",

                 
                  fontFamily: "monospace",
                }}
              >
                Github &nbsp;
                <a
                  rel="noreferrer"
                   href="https://github.com/lonemohsin33"
                  target="_blank"
                >
                  <img style={{ width: "30px" }} src={gt} alt="github Logo"></img>
                </a>
              </h4>
              <h4
                style={{
                  color: props.mode === "dark" ? "white" : "#5e513d",
                  fontWeight: "bold",
                  fontSize: "20px",
                  width: "700px",
                  height: "50px",

                  
                  fontFamily: "monospace",
                }}
              >
                LinkedIn &nbsp;
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/lone-mohsin/"
                  target="_blank"
                >
                  <img style={{ width: "40px" }} src={ln} alt="LinkedIn Logo"></img>
                </a>
              </h4>
            </div>
          </div>
          <div class="mb-3">
            <img src={bot} alt="My profile but Bot"/>
          </div>
        </div>
      </div>
    </>
  );
}
