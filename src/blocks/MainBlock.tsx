import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";

const MainBlock = () => {
  return (
    <main className="w-full">
      <div className="flex column items-center justify-center">
        <Bounce delay={800}>
          <h1 className="text-8xl font-extrabold dark-blue flex ">
            Ruslan Makhmatov
          </h1>
        </Bounce>
      </div>
    </main>
  );
};

export default MainBlock;
