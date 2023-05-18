import { useEffect } from "react";
import { NavBar } from "./NavBar";
import { useInView } from "react-intersection-observer";

export const HeroSection = ({ show, setShow }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    inView ? setShow("1") : "";
  }, [inView]);

  return (
    <section
      id="home"
      className="w-full h-screen bg-bgColor text-white"
      ref={ref}
    >
      <NavBar show={show} />
    </section>
  );
};
