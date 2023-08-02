import React from "react";
import style from "./style.module.css";
import countries from "../Images/countries.png";
import cliche from "../Images/cliche.png";
import ibera from "../Images/ibera.png";
import games from "../Images/games.png";
import { Link } from "react-router-dom";
export const Projects = () => {
  return (
    <div className={style.projects}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={style.cardContainer}>
          <h2 className={style.titleCard}>Skills</h2>
          <div>
            <div>
              <img
                style={{ margin: "1rem" }}
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=avif&w=256"
              />
              <img
                style={{ margin: "1rem" }}
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=avif&w=256"
              />
              <img
                style={{ margin: "1rem" }}
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-redux-283024.png?f=avif&w=256"
              />
              <img
                style={{ margin: "1rem" }}
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-html5-40-1175193.png?f=avif&w=256"
              />
              <img
                style={{ margin: "1rem" }}
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-css3-11-1175239.png?f=avif&w=256"
              />
              <img
                style={{ margin: "1rem" }}
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-226047.png?f=avif&w=256"
              />
              <img
                style={{ margin: "1rem" }}
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-sequelize-2-1175003.png?f=avif&w=256"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <img
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-3-1174937.png?f=avif&w=256"
              />
              <img
                style={{ margin: "1rem" }}
                height="40"
                backgroundcolor="white"
                src="https://cdn.iconscout.com/icon/free/png-512/free-express-9-1175170.png?f=avif&w=256"
              />
              <img
                style={{ margin: "1rem" }}
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=avif&w=256"
              />
              <img
                style={{ margin: "1rem" }}
                height="40"
                src="https://cdn.iconscout.com/icon/free/png-512/free-figma-3628771-3030133.png?f=avif&w=256"
              />
              <img
                src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                style={{ margin: "1rem" }}
                height="40"
              />
              <img
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                style={{ margin: "1rem" }}
                height="40"
              />
              <img
                src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*8hhfdEqRkRQSaJrJlx60zg.png"
                style={{ margin: "1rem" }}
                height="40"
              />
              <img
                src="https://www.bookmarks.design/media/image/ant-design.jpg"
                style={{ margin: "1rem" }}
                height="40"
              />
            </div>
          </div>
          <h2 className={style.titleCard}>Projects</h2>
          <div className={style.cardGroup}>
            <div className={style.card1}>
              <img
                src={countries}
                alt="countries"
                style={{ height: "20rem", margin: "1rem" }}
              />
              <h2 style={{ color: " rgb(230, 186, 238)" }}>
                Henry Countries Project
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  padding: "1rem",
                  fontSize: "17px",
                }}
              >
                My first Web Application. Filters, orders, search bar, create
                form. Lovely style made 100% CSS. Info from API. Technologies:
                React, Redux, CSS, Express, HTML, Postgres, Sequelize, NodeJS,
                Javascript, Git{" "}
                <span style={{ color: "pink" }}>Contribution here:</span>
                Backend and Frontend. Individual Project.
              </p>
              <Link
                to="https://github.com/mgs1987"
                style={{ color: "violet", fontSize: "15px" }}
              >
                Check CODE here
              </Link>
            </div>
            <div className={style.card2}>
              <img
                src={games}
                alt="games"
                style={{ height: "20rem", margin: "1rem" }}
              />
              <h2 style={{ color: " rgb(230, 186, 238)" }}>
                Board Games: "Bodu Gemu"
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  padding: "1rem",
                  fontSize: "17px",
                }}
              >
                Board Games Web Application. Filters, orders, search bar, admin
                dashboard, payment platform Paypal & Mercado Pago, cart,
                Firebase authentication. Lovely style made with CSS, Chakra UI,
                Ant Design. Technologies: React, Redux, Express, HTML, Postgres,
                Sequelize, NodeJS, Javascript, Git.{" "}
                <span style={{ color: "pink" }}>Contribution here:</span>{" "}
                Frontend: Design in Figma, Dashboard Admin, Firebase
                authentication
              </p>
              <Link
                to="https://front-project-board-games.vercel.app/"
                style={{ color: "violet", fontSize: "15px" }}
              >
                Check deploy here!
              </Link>
            </div>
          </div>
          <div className={style.cardGroup1}>
            <div className={style.card3}>
              <img
                src={ibera}
                alt="ibera"
                style={{ height: "20rem", margin: "1rem" }}
              />
              <h2 style={{ color: " rgb(230, 186, 238)" }}>
                Ibera Hotels Experience
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  padding: "1rem",
                  fontSize: "17px",
                }}
              >
                Ibera Hotels Web Application. Filters, orders, search bar, admin
                dashboard, payment platform, cart, Auth0 authentication. Lovely
                style made with CSS, Chakra UI. Technologies: React, Redux,
                Express, HTML, Postgres, Sequelize, NodeJS, Javascript, Git.
                <span style={{ color: "pink" }}> Contribution here:</span>{" "}
                Frontend: Design in Figma, Home styles, logo
              </p>
              <Link
                to="https://github.com/mgs1987"
                style={{ color: "violet", fontSize: "15px" }}
              >
                Check CODE here
              </Link>
            </div>
            <div className={style.card4}>
              <img
                src={cliche}
                alt="cliche"
                style={{ height: "20rem", margin: "1rem" }}
              />
              <h2 style={{ color: " rgb(230, 186, 238)" }}>Cliché Store</h2>
              <h2>==STILL IN PROGRESS==</h2>
              <p
                style={{
                  textAlign: "justify",
                  padding: "1rem",
                  fontSize: "17px",
                }}
              >
                Cliche Store Web Application. Filters, orders, search bar, admin
                dashboard, payment platform Paypal, cart, Firebase
                authentication. Lovely style made with CSS, Ant Design.
                Technologies: React, Redux, Express, HTML, Postgres, Sequelize,
                NodeJS, Javascript, Git.{" "}
                <span style={{ color: "pink" }}>Contribution here:</span>{" "}
                Frontend: Design in Figma, Home styles, Dashboard Admin, Forms.
              </p>
              <Link
                to="https://github.com/mgs1987"
                style={{ color: "violet", fontSize: "15px" }}
              >
                Check CODE here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
