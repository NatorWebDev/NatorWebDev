import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {FaLinkedin,FaGithubSquare} from "react-icons/fa"

export default function About({ setShow }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    inView ? setShow("2") : "";
  }, [inView]);

  return (
    <section id="about" ref={ref} className="w-full h-768 bg-bgColor flex flex-col justify-end items-center relative shadow-xl text-white">
      <div className="bg-primary w-640 h-192 rounded-xl absolute top-96 mt-8"></div>
      <div className="bg-bgColor w-256 h-256 relative z-30 top-64 shadow-xl rounded-2xl"></div>
      <div className="h-384 w-full bg-bgColor z-20 flex flex-col items-center justify-center font-bold pb-64 relative">
        <p className="w-512 text-center">I am a 21 years old front-end developer from Venezuela, passionate about creating attractive and functional digital experiences. I am always looking to learn something new and contribute to the field of technology</p>

        <div className="flex w-640 h-48 absolute bottom-64 justify-between">
            <div className="flex items-center cursor-pointer group">
              <FaLinkedin  className="text-4xl text-black bg-white rounded group-hover:bg-primary transition-all duration-100"/>
              <p className="m-8 group-hover:text-primary transition-all duration-100"><a href="">Visit my Linkedin</a></p>
            </div>
            <div className="flex items-center cursor-pointer group">
              <p className="m-8 group-hover:text-secondary transition-all duration-100"><a href="">Visit my github</a></p> 
              <FaGithubSquare className="text-4xl text-black bg-white rounded group-hover:bg-secondary transition-all duration-100"/>
            </div>
        </div>
      </div>
    </section>
  );
}
