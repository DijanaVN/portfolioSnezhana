import img from "../assets/images/Gamehub-image.webp";
import img1 from "../assets/images/shop-shopping-site.webp";
import img2 from "../assets/images/Delicious.webp";
import img3 from "../assets/images/Moshify.webp";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      title: "Game-Hub-Project",
      img: img,
      description:
        "This project was crafted as part of Mosh Hamedani's React + Typescript courses. It represents the culmination of my learning journey, covering beginner to intermediate topics in React. Through this course, I gained a deep understanding of React and Typescript.",
      siteLink: "https://game-hub-alpha-nine.vercel.app/",
      githubLink: "https://github.com/DijanaVN/game-hub",
      color: "danger",
    },
    {
      title: "Shop-Shopping-Site-Project",
      img: img1,
      description:
        "This is my second personal project where I implemented a wider range of components, delved deeper into React possibilities, and gained more hands-on practice. I utilized the Fake Store API to fetch data and successfully implemented a payment checkout system using Stripe. This project also marked my first experience in separating the server and client components. These challenges motivated me to explore React libraries further, and my next goal is to learn Next.js.",
      siteLink: "https://shop-shopping-site-uop84c985-dijanavn.vercel.app/",
      githubLink: "https://github.com/DijanaVN/shop-shopping-site",
      color: "warning",
    },
    {
      title: "Delishes-Recipes-Project",
      img: img2,
      description:
        "After completing the React courses, I started my own project where I implemented the knowledge and skills I learned. This project was developed using React, Typescript, and Vite, and deployed on Vercel. I integrated the Edamam Recipe API to enhance its functionality.",
      siteLink: "https://delishes-recipes-page.vercel.app/",
      githubLink: "https://github.com/DijanaVN/delishes-recipes-page",
      color: "success",
    },
    {
      title: " Moshify-Project",
      img: img3,
      description:
        "This project, created during my early learning stages, is a result of my participation in Mosh Hamedani's 'The Ultimate HTML5 & CSS3 Series' course. It showcases my foundational skills in HTML and CSS, gained through Mosh's comprehensive lessons and hands-on projects.",
      siteLink: "https://chipper-medovik-3c1af1.netlify.app/",
      githubLink: "https://github.com/DijanaVN/moshifyd",
      color: "info",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-2 g-5 ">
      {projects.map((project, index) => (
        <ProjectsCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
