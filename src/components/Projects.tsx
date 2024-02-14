import img from "../assets/images/project1.png";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      title: "Giftcards.mk-Project",
      img: img,
      description: "napishi si text za tuka",
      siteLink:
        "https://www.figma.com/proto/cjzWuTTVKBqP4KaXAvcpLL/Redesign-giftcards.mk?node-id=34-5605&starting-point-node-id=34%3A5605&scaling=scale-down",

      color: "danger",
    },
  ];
  return (
    <div className="row row-cols-1  g-5 ">
      {projects.map((project, index) => (
        <ProjectsCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
