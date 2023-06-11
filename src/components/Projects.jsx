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
      className="w-full h-768 bg-bgColor relative z-20 flex flex-col text-white items-center overflow-hidden"
    >
      <h2 className="text-3xl ">My Projects</h2>
      <div className="w-full h-384 mt-48 px-64 flex justify-end overflow-x-hidden group/pause relative">
        {projects.map((project, index) => {
  

          
          return(
          <div className={`h-384 absolute group/details w-512 ml-16 flex items-center justify-center overflow-hidden cursor-pointer shadow-2xl left-[100%] group-hover/pause:[animation-play-state:paused]`} key={index}>


            <img
              src={project.image}
              alt="project"
              className="w-full h-full object-cover absolute top-0 left-0 group-hover/details:scale-125 transition-all duration-300"
            />
            <div
              className={`w-full h-full bg-${
                index % 2 == 0 ? "primary" : "secondary"
              } opacity-30 group-hover/details:opacity-20 transition-all duration-300 absolute top-0 left-0`}
            ></div>

            <div className="absolute flex items-center bottom-0 left-0 w-full h-32 bg-[#00000077] transition-all duration-300 px-8 group-hover/details:scale-y-[200%] origin-bottom group-hover/details:bg-[#000000cc] justify-between">
              <h3 className="text-xs group-hover/details:scale-y-[50%] origin-left transition-all duration-300">{project.title}</h3>
              <h3 className="font-black group-hover/details:scale-y-[50%] origin-left transition-all duration-300 opacity-0 group-hover/details:opacity-100">Click to see More</h3>
            </div>

      
          </div>
          )
      })}
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
