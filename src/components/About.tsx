import React from "react";
import { useEffect } from "react";
import img1 from "../assets/images/cv-slika.webp";
import img2 from "../assets/images/1488204_10152105470004181_2141946011_n.webp";
import img3 from "../assets/images/nordwood-themes-ubIWo074QlU-unsplash.webp";
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
      text: "I am Snezhana and I can find a creative user friendly solution for your digital product that can turn your idea into reality. I am a creative soul that graduated in telecommunication engineering, has working experience in sales and passion for UX/UI Design, Graphic Design and Art. Scroll down to find out more about me and my work. ",
      link: "/certificates",
      img: img1,
    },
    {
      title: "Strategic Career Evolution:",
      text: "Having nine years of experience in sales for international company with diverse demographics has enabled me to have better understanding of the human behaviors and users needs, which also he­­lped me to develop my problem solving and user centric mindset. I am also very detail oriented and I like to get to the heart of the problems, find simplified and beautiful creative solutions.",
      link: "/cv",
      img: img2,
    },
    {
      title: "Skills Expansion: Journey into UI/UX",
      text: "napisi si text",
      link: "/projects",
      img: img3,
    },
    {
      title: "What I Offer:",
      list: ["💡 skills.", "🛠️ skills.", "🤝 skills.", "🌟 skills."],
      img: img4,
    },
    {
      title: "My Ideal Working Environment:",
      list: ["napisi si text."],
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
