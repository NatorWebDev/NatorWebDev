import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About({ setShow }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    inView ? setShow("2") : "";
  }, [inView]);

  return (
    <section id="about" ref={ref} className="w-full h-screen bg-bgColor">
      About
    </section>
  );
}
