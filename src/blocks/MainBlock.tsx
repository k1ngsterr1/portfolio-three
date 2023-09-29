import React, { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

interface ButtonProps {
  buttonClass?: any;
}

const MainBlock = (props: ButtonProps) => {
  return (
    <main className="w-full">
      <div className="flex flex-col items-center justify-center">
        <Bounce delay={800} triggerOnce={true}>
          <h1
            className="text-8xl font-extrabold dark-blue flex mt-32"
            id="heading"
          >
            Ruslan Makhmatov
          </h1>
        </Bounce>
        <Bounce delay={900} className="flex justify-center" triggerOnce={true}>
          <p
            className="text-center dark-blue text-base mt-8 w-10/12"
            id="paragraph"
          >
            Hello, I'm Ruslan Makhmatov, an 18-year-old self-taught programmer
            with a passion for creating engaging and user-friendly web
            experiences. Over the past two years, I've embarked on an exciting
            journey as a frontend developer freelancer, honing my skills and
            crafting digital solutions that captivate and inspire. With a strong
            foundation in web technologies, I am dedicated to pushing the
            boundaries of what's possible in web development. I am thrilled to
            bring creativity, innovation, and a fresh perspective to every
            project I undertake, ensuring that the user's experience is nothing
            short of exceptional.
          </p>
        </Bounce>
        <Bounce delay={1000} triggerOnce={true}>
          <Link to="" className={props.buttonClass} id="button">
            Explore More
          </Link>
        </Bounce>
      </div>
    </main>
  );
};

export default MainBlock;
