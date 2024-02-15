import img from "../assets/images/project1.png";
import img1 from "../assets/images/wines (1).webp";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      title: "Heavenly Wines-Project",
      img: img,
      description: "napishi si text za tuka",
      siteLink:
        "https://www.figma.com/proto/cjzWuTTVKBqP4KaXAvcpLL/Redesign-giftcards.mk?node-id=34-5605&starting-point-node-id=34%3A5605&scaling=scale-down",

      color: "danger",
    },
    {
      title: "Giftcards.mk-Project",
      img: img1,
      description: "napishi si text za tuka",
      siteLink:
        "https://www.figma.com/proto/sFGyrAxVRizGYO86xyHYGi/V1-HWS-Mobile-First?node-id=27-117&starting-point-node-id=27%3A117",

      color: "success",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-2 g-5  ">
      {projects.map((project, index) => (
        <ProjectsCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
