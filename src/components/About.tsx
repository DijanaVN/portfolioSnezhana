import React from "react";
import { useEffect } from "react";
import img1 from "../assets/images/cv-slika.webp";
import img2 from "../assets/images/20240218_000844.webp";
import img3 from "../assets/images/nordwood-themes-ubIWo074QlU-unsplash.webp";
import img4 from "../assets/images/ux journey section illustration.webp";
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
      text: "I am Snezhana and I can find a creative user friendly solution for your digital product that can turn your idea into reality. I am a creative soul that graduated in telecommunication engineering, has working experience in sales and passion for UX/UI Design, Graphic Design and Art. Scroll down to find out more about me and my work. ",
      link: "/certificates",
      img: img1,
    },
    {
      title: "Career Evolution:",
      text: "Having nine years of experience in sales for international company with diverse demographics has enabled me to have better understanding of the human behaviors and users needs, which also he­­lped me to develop my problem solving and user centric mindset. I am also very detail oriented and I like to get to the heart of the problems, find simplified and beautiful creative solutions.",
      link: "/cv",
      img: img2,
    },
    {
      title: "Journey into UI/UX Design",
      text: "My journey as UX/UI designer started with a spark of curiosity and a passion for creating intuitive digital experiences for the users.",
      text1:
        "My quest for knowledge led me to complete UX/UI Academy and various design courses, serving as crucial milestones in my professional development, and helped me to gain proficiency in essential tools such as Ai, XD, Figma, and Photoshop, UX design research and iterative design process. I also remain dedicated to refining and continuously upgrading my knowledge and skills.",
      link: "/projects",
      img: img3,
    },
    {
      title: "What I Offer:",
      list: [
        "* User-Centered design for intuitive interfaces that prioritize user needs and behaviors.",
        "* Prototyping and wireframing with tools like Adobe XD, Ai, Ps and Figma, and to create interactive prototypes for rapid iteration and user testing.",
        "* Applying design principles such as typography, color, layout composition and Gestalt principles to create appealing and functional visual designs.",
        "* Conducting usability tests to gather valuable feedback and insights for refining and improving designs.",
        "* Effective team play, communication and collaboration for successful project outcomes.",
        "* Analytical and problem-solving skills, with the ability to identify user pain points and find solutions for them.",
        "* Quick learner and adaptable to new tools, technologies, and design trends.",
      ],
      img: img4,
    },
    {
      title: "My Ideal Working Environment:",
      list: [
        "Fostering a culture of friendly teamwork and open communication to nurture creativity and innovation.",
        "Cultivating a positive atmosphere that inspires motivation, alongside resources that amplify productivity and effectiveness.",
        "Offering mentorship and avenues for professional growth and development.",
      ],
      img: img5,
    },
    {
      title: "Let's Connect:",
      text: "I enthusiastically welcome new challenges and strive to make a meaningful impact. Whether you're seeking a dedicated and motivated team member or have exciting projects where I can contribute, I'm ready and eager to collaborate. Please don't hesitate to contact me.",
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
