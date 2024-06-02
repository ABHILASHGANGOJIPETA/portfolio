import React from "react";
import styles from "./Projectstyles.module.css";
import proj_1 from "../../assets/olx.jpg";
import proj_2 from "../../assets/proj_2.png";
import proj_3 from "../../assets/proj_3.png";
import proj_4 from '../../assets/proj_4.png';
import proj_5 from '../../assets/proj_5.webp';

import Projectscard from "../../common/Projectscard";
export default function Project() {
  let projectsarr = [
    {
      link: "https://github.com/ABHILASHGANGOJIPETA/olx-clone",
      photo:proj_1,
      title: "OLX",
      description: "Kind of ecommerce website where the seller can sell the products which are used.",
    },
    // {
    //   link: "#",
    //   photo:proj_2,
    //   title: "Quiz Application",
    //   description: "interview preparing app",
    // },
    // {
    //   link: "https://naveenreddy7571.github.io/2048-Game/",
    //   photo: proj_4,
    //   title: "2048 Game",
    //   description: "best Game",
    // },
    // {
    //   link: "https://naveenreddy7571.github.io/Simon-Game/",
    //   photo: proj_3,
    //   title: "Simon Game",
    //   description: "memory game",
    // },
    // {
    //   link: "https://github.com/Naveenreddy7571/AI-TIC-TAC-TOE",
    //   photo:proj_5,
    //   title: "AI tic tac toe",
    //   description: "you can never win",
    // },
  ];
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsarr.map((prob,index)=><Projectscard key={index} obj={prob}/>)}
      </div>
    </section>
  );
}
