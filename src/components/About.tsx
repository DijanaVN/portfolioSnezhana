import React from "react";
import { useEffect } from "react";
import img1 from "../assets/images/dijana.webp";
import img2 from "../assets/images/FB_IMG_1609052446671.webp";
import img3 from "../assets/images/scott-graham-5fNmWej4tAA-unsplash.webp";
import img4 from "../assets/images/gabriel-heinzer-EUzk9BIEq6M-unsplash.webp";
import img5 from "../assets/images/israel-andrade-YI_9SivVt_s-unsplash.webp";
import img6 from "../assets/images/firmbee-com-SpVHcbuKi6E-unsplash.webp";
import AboutCard from "./AboutCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      title: "About Me:",
      text: "Thank you for taking the time to explore my portfolio. Your visit is greatly appreciated. Within the upcoming pages, you'll get a glimpse into my passion, work principles, projects,  career path, and education. ",
      link: "/certificates",
      img: img1,
    },
    {
      title: "Strategic Career Evolution:",
      text: "With over a decade as a successful store manager, I excel in operations, team leadership, and customer service. Skilled in problem-solving and thriving under pressure, I consistently surpass goals. Recently, I expanded my skills with courses in Scrum Master, Project Manager, and React, reflecting my commitment to staying current with industry trends. I am poised to leverage this diversified skill set to contribute effectively in roles requiring a strategic blend of leadership, project management, and technical proficiency.",
      link: "/cv",
      img: img2,
    },
    {
      title: "Skills Expansion: Journey into Web Development with React:",
      text: "Driven by my enthusiasm for technology and problem-solving, I decided to embark on a new journey in the world of web development.  Throughout my learning journey, I've successfully completed and implemented several projects. I invite you to explore these projects on my dedicated project page to witness firsthand the practical application of my skills and knowledge in React development.",
      link: "/projects",
      img: img3,
    },
    {
      title: "What I Offer:",
      list: [
        "💡 Understanding of HTML, CSS, JavaScript, React, and TypeScript, Git & GitHub.",
        "🛠️ Knowledge of Scrum methodology for effective project coordination.",
        "🤝 Strong teamwork, ethics and collaboration skills honed through 10+ years of team management and leadership experience.",
        "🌟 Readiness  to learn, adapt, and grow in the ever-evolving technologies and dynamic tech industry.",
      ],
      img: img4,
    },
    {
      title: "My Ideal Working Environment:",
      list: [
        "Seeking an innovative, dynamic, and team-oriented company environment.",
        "Aim to leverage expertise in web development to enhance the company's digital presence and contribute to its growth.",
        "Excited about collaborating on impactful projects that align with personal and company objectives.",
        "Value a company that encourages a collaborative culture, respects, values, and invests in ongoing professional development opportunities for its employees.",
      ],
      img: img5,
    },
    {
      title: "Let's Connect:",
      text: "I am open to new challenges and eager to make a meaningful impact. If you are looking for a dedicated and motivated team member or have exciting projects where I can contribute, please feel free to reach out.",
      link: "/contact",
      img: img6,
    },
  ];

  return (
    <>
      {cardData.map((data, index) => (
        <AboutCard key={index} index={index} {...data} />
      ))}
    </>
  );
};

export default About;
