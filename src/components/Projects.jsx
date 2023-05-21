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
    <section id="projects" ref={ref} className="w-full h-768 bg-bgColor relative z-20 flex flex-col text-white items-center">
      <h2 className="text-3xl ">My Projects</h2>
      <div className="w-full h-384 mt-48 px-64 flex">
        {projects.map((project,index)=>(
          <div className="h-full w-512 relative ml-8" key={index}>
            <img src={project.image} alt="project" className="w-full h-full object-cover absolute top-0 left-0"/>
            <div className={`w-full h-full bg-${(index%2 == 0)?'primary':'secondary'} opacity-30 absolute top-0 left-0`}></div>
      
          </div>
        ))}
        
      </div>
    </section>
  );
}
