"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chat App",
    description: "A perfect place to chat with your friends",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TusharKhatter24/ChatApp.github.io",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Secrets Website",
    description: "A perfect place to store all your secrets",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TusharKhatter24/SecretsWebsite",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Shop for all your needs heer",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/TusharKhatter24/ShoppingCart",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Keepers App",
    description: "Store all your notes here",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/TusharKhatter24/KeepersApp",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard key={project.id} card={project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
