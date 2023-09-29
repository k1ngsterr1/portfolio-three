import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";

import { Fade } from "react-awesome-reveal";
import MainBlock from "./blocks/MainBlock";
import MySkillsBlock from "./blocks/MySkillsBlock";
import Portfolio from "./blocks/Portfolio";

function App() {
  const [bgColor, setBgColor] = useState("#f4fdff ");
  const [headingColor, setHeadingColor] = useState("#023047");
  const [textColor, setTextColor] = useState("#ffb703");
  const [hoverClass, setHoverClass] = useState(
    "btn w-48 mt-8 h-12 dark-bluye flex items-center justify-center rounded cursor-pointer"
  );

  const heading = document.getElementsByTagName("h1");
  const secondHeading = document.getElementsByTagName("h2");
  const button = document.getElementById("button");
  const text = document.getElementsByTagName("p");
  const logo = document.getElementById("logo");
  const [buttonText, setButtonText] = useState("Dark Mode");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [color, setColor] = useState("black");

  // Toggle the theme
  function toggleTheme() {
    if (bgColor === "black") {
      setBgColor("white");
    } else {
      setBgColor("black");
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const targetScrollPosition = 200;
      const scrollPosition = window.scrollY; // Move this line inside handleScroll

      if (scrollPosition >= targetScrollPosition) {
        setBgColor("#023047");
        setHoverClass(
          "btn-blue w-48 mt-8 h-12 dark-bluye flex items-center justify-center rounded cursor-pointer"
        );

        if (button) {
          button.style.backgroundColor = "#ffb703";
        }
        if (heading) {
          for (let i = 0; i < heading.length; i++) {
            heading[i].style.color = "#ffb703";
          }

          if (secondHeading) {
            for (let i = 0; i < secondHeading.length; i++) {
              secondHeading[i].style.color = "#ffb703";
            }
          }
        }

        if (logo) {
          logo.style.color = "#ffb703";
        }

        if (text) {
          for (let i = 0; i < text.length; i++) {
            text[i].style.color = "#ffb703";
          }
        }
      } else {
        setBgColor("#f4fdff");
        setHoverClass(
          "btn w-48 mt-8 h-12 dark-bluye flex items-center justify-center rounded cursor-pointer"
        );
        if (button) {
          button.style.backgroundColor = "#023047";
        }
        if (heading) {
          console.log("heading");
          for (let i = 0; i < heading.length; i++) {
            heading[i].style.color = "#023047";
          }
        }

        if (secondHeading) {
          for (let i = 0; i < secondHeading.length; i++) {
            secondHeading[i].style.color = "#023047";
          }
        }

        if (logo) {
          logo.style.color = "#023047";
        }

        if (text) {
          for (let i = 0; i < text.length; i++) {
            text[i].style.color = "#023047";
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: bgColor,
        transition: " background-color 0.5s ease-in-out",
      }}
    >
      <div className=" mx-auto custom-container-width">
        <Header></Header>
        <div className="w-full mx-auto ">
          <MainBlock buttonClass={hoverClass}></MainBlock>
          <MySkillsBlock />
          <Portfolio />
          <div className="button-container"></div>
          <button
            id="theme-button"
            className="btn-blue w-48 mt-8 h-12 dark-bluye flex items-center justify-center rounded cursor-pointer"
            onClick={toggleTheme}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
