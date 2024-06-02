import React from "react";
import Styles from "./Aboutt.module.css";

const AboutMe = () => {

  return (
    <section id="aboutme" className={Styles.container}>
      <h2 className={Styles.sectionTitle}>About Me</h2>
      <p className={Styles.aboutmedescription}>
        Aspiring Full-Stack Developer with a Strong Foundation in Data
        Structures and Algorithms I am a fresher with a passion for full-stack
        development and a solid understanding of data structures and algorithms.
        My expertise in Java full stack development, combined with my dedication
        to continuous learning and hands-on projects, makes me a promising
        candidate for tech industry roles.
      </p>
    </section>
  );
};

export default AboutMe;
