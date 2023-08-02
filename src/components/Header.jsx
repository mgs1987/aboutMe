import React from "react";
import style from "./style.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.itemOne}>
          <h3>
            <Link to="/" style={{ color: "aqua", textDecoration: "none" }}>
              About Me
            </Link>
          </h3>
          <h3>
            <Link
              to="/projects"
              style={{ color: "violet", textDecoration: "none" }}
            >
              Projects & Technologies
            </Link>
          </h3>

          <h3>
            <Link
              to="/contactme"
              style={{ color: "aqua", textDecoration: "none" }}
            >
              Contact Me
            </Link>
          </h3>
          <h3>
            <Link to="https://github.com/mgs1987">
              <AiFillGithub style={{ color: "grey", fontSize: "3rem" }} />
            </Link>
          </h3>
          <h3>
            <Link to="https://www.linkedin.com/in/mercedesgdes/">
              <BsLinkedin style={{ color: "grey", fontSize: "3rem" }} />
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
