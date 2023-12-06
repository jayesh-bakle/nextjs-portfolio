"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A simple mobile friendly Portfolio Web Application created using Reactjs,Js,Tailwindcss and some frameworks for simple animations where I showcased all my works and other stuffs related to me.",
    image: "/images/projects/personal-portfolio.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 2,
    title: "Character Counter App",
    description: "This is a webpage made up using html css and javascript through which one can efficiently write his/her BIO correctly.",
    image: "/images/projects/character-counter-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jayesh-bakle/Instagram-Bio_spellingchecker_and_wordCounter",
    previewUrl: "https://jayesh-bakle.github.io/Instagram-Bio_spellingchecker_and_wordCounter/",
  },

  {
    id: 3,
    title: "Snake Game",
    description: "A simple Snake game made to enjoy in the free time with the help of HTML,CSS AND JS.It also has some good sound effects and other stuffs to make the game interesting.",
    image: "/images/projects/snake-game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jayesh-bakle/snake-game-using-js",
    previewUrl: "https://jayesh-bakle.github.io/snake-game-using-js/",
  },

  {
    id: 4,
    title: "Moving Car Animation",
    description: "An animation of a moving car from the dusk to dawn made with simple Html,css and js",
    image: "/images/projects/moving-car-animation.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/jayesh-bakle/car-animation-js",
    previewUrl: "https://jayesh-bakle.github.io/car-animation-js/",
  },
  {
    id: 5,
    title: "Rock Paper Scissor Game",
    description: "A game full of fun created with my own personalized sound which you can play with the computer and see If you can win or not!",
    image: "/images/projects/rock-paper-game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jayesh-bakle/rock-paper-scissor-game",
    previewUrl: "https://jayesh-bakle.github.io/rock-paper-scissor-game/",
  },
  {
    id: 6,
    title: "Tic Tac Toe",
    description: "Tic Tac Toe Game is the same game which we used to play in our childhood.Enjoy it",
    image: "/images/projects/tic-tac-toe-game.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;