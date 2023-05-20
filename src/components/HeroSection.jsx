import { useEffect } from "react";
import { NavBar } from "./NavBar";
import { useInView } from "react-intersection-observer";
import logo from "../assets/Logo.png";

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
      className="w-full h-screen bg-bgColor text-white flex items-center justify-center"
      ref={ref}
    >
      <NavBar show={show} />

      <div className="h-384 w-full px-64 flex justify-between items-center">
        <div className="w-1/2 h-full flex flex-col">
          <h2 className="text-4xl mt-32">Luis Velasquez</h2>
          <h1 className="text-5xl mt-48">Web Developer</h1>
          <h2 className="text-5xl mt-4">Front-End</h2>
          <div className="flex w-full justify-start mt-64 items-center text-xl">
            <div className="bg-secondary px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 hover:bg-primary">
              <a href="#projects">See my Work</a>
            </div>
            <div className="text-secondary pl-32 cursor-pointer transition-all duration-200 hover:text-primary">
              <a href="#projects">Contact</a>
            </div>
          </div>
          <div className="pt-32 opacity-75 ">
            in the digital world, everyone needs a website
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-end relative">
          <img src={logo} className="h-384" alt="logo" />
          <div className="w-128 h-128 bg-secondary right-0 bottom-0 absolute rounded-full translate_full"></div>
          <div className="w-64 h-64 bg-primary left-0 bottom-0 absolute rounded-full translate_full"></div>
        </div>
      </div>
    </section>
  );
};
