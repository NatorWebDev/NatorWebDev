import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects({ setShow }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    inView ? setShow("3") : "";
  }, [inView]);

  return (
    <section id="projects" ref={ref} className="w-full h-screen bg-bgColor">
      Projects
    </section>
  );
}
