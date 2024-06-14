"use client";
import { useEffect, useState, useRef } from "react";
import { IoMenu } from "react-icons/io5";
const Sidebar = ({ showSideBar, setShowSideBar }) => {
  return (
    <div
      className={`flex flex-col md:hidden gap-14 text-[18px] p-10 py-12 w-[200px] text-white transition-all bg-primary h-screen fixed top-0 right-0 duration-300 ease-in-out ${
        showSideBar ? " translate-x-0" : " translate-x-[100%]"
      }`}
    >
      <span>Home</span>
      <span>About</span>
      <span>Skills</span>
      <span>Projects</span>
      <span>Contact</span>
      <span
        className="text-3xl cursor-pointer"
        onClick={() => setShowSideBar(false)}
      >
        &times;
      </span>
    </div>
  );
};
const BlinkPage = ({ blink, currentIndex, setCurrentIndex }) => {
  const arr = ["Don't Blink... ", "Don't Blink... ", 3, 2, 1];

  useEffect(() => {
    if (!blink) return;

    if (currentIndex < arr.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentIndex, blink]);
  return (
    <div
      className={`bg-primary h-screen w-full flex top-0 left-0 items-center justify-center fixed z-50 transition duration-300 ease-out ${
        blink ? "translate-y-0" : "-translate-y-[100%]"
      } text-white text-xl`}
    >
      {blink && <p>{arr[currentIndex]}</p>}
    </div>
  );
};

const Navbar = () => {
  const [blink, setBlink] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const resizeTimeout = useRef(null); // Using useRef to store the timeout ID

  useEffect(() => {
    const toggleResize = () => {
      if (window.innerWidth < 1100) {
        setBlink(true);

        if (resizeTimeout.current) {
          clearTimeout(resizeTimeout.current);
        }
        resizeTimeout.current = setTimeout(() => setBlink(false), 1500);
      }
    };

    window.addEventListener("resize", toggleResize);

    return () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      window.removeEventListener("resize", toggleResize);
      setTimeout(() => setBlink(false), 1500);
      setCurrentIndex(0);
    };
  }, [blink]);
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 bg-primary h-[100px] w-full px-4 shadow-md">
        <BlinkPage
          blink={blink}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

        <div className="flex justify-between items-center w-[1400px] max-w-full h-full mx-auto text-white">
          <span className="text-3xl md:text-4xl font-bold">Portfolio.</span>
          <div className="hidden md:flex gap-10 text-[18px]">
            <span className="relative group transition">
              Home
              <div className="absolute bg-white scale-0 group-hover:scale-100 group-hover:w-full h-1 rounded-full transition-all duration-300 ease-in-out "></div>
            </span>
            <span className="relative group transition">
              About
              <div className="absolute bg-white scale-0 group-hover:scale-100 group-hover:w-full h-1 rounded-full transition-all duration-300 ease-in-out "></div>
            </span>
            <span className="relative group transition">
              Skills
              <div className="absolute bg-white scale-0 group-hover:scale-100 group-hover:w-full h-1 rounded-full transition-all duration-300 ease-in-out "></div>
            </span>
            <span className="relative group transition">
              Projects
              <div className="absolute bg-white scale-0 group-hover:scale-100 group-hover:w-full h-1 rounded-full transition-all duration-300 ease-in-out "></div>
            </span>
            <span className="relative group transition">
              Contact
              <div className="absolute bg-white scale-0 group-hover:scale-100 group-hover:w-full h-1 rounded-full transition-all duration-300 ease-in-out "></div>
            </span>
          </div>
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <IoMenu className="text-4xl" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
