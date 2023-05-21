import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "../projectsData/data";

export default function Projects({ setShow }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    inView ? setShow("3") : "";
  }, [inView]);

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full h-768 bg-bgColor relative z-20 flex flex-col text-white items-center"
    >
      <h2 className="text-3xl ">My Projects</h2>
      <div className="w-full h-384 mt-48 px-64 flex">
        {projects.map((project, index) => (
          <div className="h-full w-512 relative ml-16 group flex items-center justify-center overflow-hidden cursor-pointer shadow-2xl" key={index}>
            <img
              src={project.image}
              alt="project"
              className="w-full h-full object-cover absolute top-0 left-0 group-hover:scale-125 transition-all duration-300"
            />
            <div
              className={`w-full h-full bg-${
                index % 2 == 0 ? "primary" : "secondary"
              } opacity-30 group-hover:opacity-20 transition-all duration-300 absolute top-0 left-0`}
            ></div>

            <div className="absolute flex items-center bottom-0 left-0 w-full h-32 bg-[#00000077] transition-all duration-300 px-8 group-hover:scale-y-[200%] origin-bottom">
              <h3 className="text-xs group-hover:scale-y-[50%] origin-left transition-all duration-300">{project.title}</h3>
            </div>

            <h2 className="text-4xl absolute z-30 -translate-y-384 transition-all duration-300 group-hover:translate-y-0 underline">Click To See More</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col relative items-center w-full mt-96">
        <h2 className="text-3xl">Contact</h2>
        <h3 className="text-2xl mt-48">natorwebdeveloper@gmail.com</h3>
        <div className="absolute bg-primary top-0 left-64 rounded-full w-96 h-96"></div>
        <div className="absolute bg-secondary bottom-0 right-64 rounded-full w-96 h-96"></div>
      </div>
    </section>
  );
}
