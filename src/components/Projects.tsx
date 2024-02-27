import img from "../assets/images/project1.webp";
import img1 from "../assets/images/wines (1).webp";
import img2 from "../assets/images/Snezana-Art.png";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      title: "Heavenly Wines-Project",
      img: img1,
      description: "napishi si text za tuka",
      siteLink:
        "https://www.figma.com/proto/sFGyrAxVRizGYO86xyHYGi/V1-HWS-Mobile-First?node-id=27-117&starting-point-node-id=27%3A117",

      color: "danger",
    },
    {
      title: "Giftcards.mk-Project",
      img: img,
      description: "napishi si text za tuka",
      siteLink:
        "https://www.figma.com/proto/cjzWuTTVKBqP4KaXAvcpLL/Redesign-giftcards.mk?node-id=34-5605&starting-point-node-id=34%3A5605&scaling=scale-down",

      color: "success",
    },
    {
      title: "Graphic Design, Illustration & Art",
      img: img2,
      description: "napishi si text za tuka",
      siteLink:
        "https://www.figma.com/proto/PkACjXAlYuMbMxZaIH5Hud/Illustrations-%26-Art?node-id=0-1",

      color: "danger",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-2 g-5  ">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`col-md-6 col-lg-6${
            index === projects.length - 1 && projects.length % 2 !== 0
              ? " offset-md-3 offset-lg-3"
              : ""
          }`}
        >
          <ProjectsCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
