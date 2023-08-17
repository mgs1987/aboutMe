import React from "react";
import style from "./style.module.css";
import me from "../Images/me.jpg";
export const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.itemTwo}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={me} alt="me" className={style.img} />
        </div>

        <div style={{ margin: "2rem" }}>
          <h1 className={style.titleCard}>About Me</h1>
          <h2 style={{ color: " rgb(230, 186, 238)", fontSize: "20px" }}>
            As a Full-Stack Developer . . .
          </h2>
          <p
            style={{
              textAlign: "justify",
              fontSize: "16px",
            }}
          >
            I have a strong preference for Front-end development.
          </p>
          <p style={{ textAlign: "justify", fontSize: "16px" }}>
            I am fascinated by this world and my heart lies in crafting
            beautiful and interactive front-end experiences. I believe that the
            front-end is the face of any application, and it is crucial to make
            it not only functional but also visually appealing. My attention to
            detail and design sensibility drive me to create interfaces that
            captivate users and provide a seamless user experience
          </p>
          <h2 style={{ color: " rgb(230, 186, 238)", fontSize: "20px" }}>
            What defines me ?
          </h2>
          <ul style={{ textAlign: "justify", fontSize: "16px" }}>
            <li>
              My Charismatic and Positive attitude. I firmly believe in
              spreading positivity and creating a warm and welcoming work
              environment.
            </li>
            <li>Resilience</li>
            <li>
              Curiosity, is my driving FORCE, and I am constantly seeking new
              knowledge and skills to grow both personally and professionally.
            </li>
          </ul>
          <h2 style={{ color: "rgb(230, 186, 238)", fontSize: "20px" }}>
            Background
          </h2>
          <p style={{ textAlign: "justify", fontSize: "16px" }}>
            Before embarking on my journey as a developer, I worked in the
            fields of health and food. In that role, I led a team of seven
            individuals, which taught me the value of perseverance and
            adaptability in the face of challenges.These experiences have shaped
            me into a person who is ready to take on any obstacle that comes my
            way.
          </p>
          <p style={{ textAlign: "justify", fontSize: "16px" }}>
            I am more than just a developer—I am a passionate and spirited
            individual with a love for front-end development, a creative soul,
            and a resilient mindset. My positive attitude, coupled with my
            communication skills and eagerness to learn, makes me a valuable
            asset to any team.
          </p>
        </div>
      </div>
    </div>
  );
};
