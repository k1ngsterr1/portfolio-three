import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

import photo from "../assets/photo.jpg";
import { BiLogoReact } from "react-icons/bi";

const MySkillsBlock = () => {
  return (
    <div className="w-full mt-32 flex-col" id="skills">
      <div className="flex flex-col items-center justify-between">
        <Fade direction="left" className="w-full" triggerOnce={true}>
          <h2
            className="text-4xl font-extrabold dark-blue flex mt-32 w-full text-left"
            id="heading"
          >
            My Skills
          </h2>
        </Fade>
        <div className="flex flex-col justify-start w-full">
          <Fade
            direction="left"
            delay={200}
            triggerOnce={true}
            className="flex justify-start w-full "
          >
            <p className="text-left text-2xl mt-8 custom-orange" id="paragraph">
              React
            </p>
          </Fade>
          <Fade
            direction="left"
            delay={300}
            triggerOnce={true}
            className="flex justify-start w-full "
          >
            <p className="text-left text-2xl mt-8 custom-orange" id="paragraph">
              React Native
            </p>
          </Fade>
          <Fade
            direction="left"
            delay={400}
            triggerOnce={true}
            className="flex justify-start w-full "
          >
            <p className="text-left text-2xl mt-8 custom-orange" id="paragraph">
              HTML/CSS
            </p>
          </Fade>
          <Fade
            direction="left"
            delay={500}
            triggerOnce={true}
            className="flex justify-start w-full "
          >
            <p className="text-left text-2xl mt-8 custom-orange" id="paragraph">
              JavaScript/TypeScript
            </p>
          </Fade>
        </div>
      </div>
      <img className="img mt-32" src={photo}></img>
    </div>
  );
};

export default MySkillsBlock;
