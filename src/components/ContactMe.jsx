import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
export const ContactMe = () => {
  return (
    <div className={style.projects}>
      <div className={style.cardContainer}>
        <h1 className={style.titleCard}>Would you like to talk to me? </h1>
        <h2 style={{ color: "grey" }}>
          <span style={{ color: "pink", fontSize: "20px" }}>
            You can send me an email
          </span>
          : mgdesampaio@gmail.com
        </h2>
        <div>
          <h1 style={{ color: "pink", fontSize: "20px" }}>
            Also you can find me here :{" "}
            <Link to="https://www.linkedin.com/in/mercedesgdes/">Linkedin</Link>
          </h1>
          <div
            style={{
              color: "pink",
              backgroundColor: "violet",
              fontSize: "20px",
            }}
          >
            Thank you for time!
          </div>
        </div>
      </div>
    </div>
  );
};
