"use client";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { IoMenu } from "react-icons/io5";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const pathname = usePathname();
  const router = useRouter();
  const toggleRedirect = (title) => {
    setShowSideBar(false);
    if (pathname === "/") {
      return;
    } else {
      setTimeout(() => router.push(`#${title}`), 750);
    }
  };
  return (
    <div
      className={`flex flex-col md:hidden gap-14 text-[18px] p-10 py-12 w-[200px] text-white transition-all bg-primary h-screen fixed top-0 right-0 duration-300 ease-in-out ${
        showSideBar ? " translate-x-0" : " translate-x-[100%]"
      }`}
    >
      <Link href="/" onClick={() => setShowSideBar(false)}>
        Home
      </Link>
      <Link href="/about" onClick={() => setShowSideBar(false)}>
        About
      </Link>
      <Link
        href={pathname !== "/" ? "/" : "#skills"}
        onClick={() => toggleRedirect("skills")}
      >
        Skills
      </Link>
      <Link
        href={pathname !== "/" ? "/" : "#projects"}
        onClick={() => toggleRedirect("projects")}
      >
        Projects
      </Link>
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

const SplashScreen = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setSplash(true);
    setTimeout(() => {
      setSplash(false);
    }, 750);
  }, []);

  return (
    <div
      className={`w-full h-screen bg-primary fixed top-0 left-0 flex items-center justify-center text-white z-50 transition duration-300 ease-in-out ${
        splash ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" text-2xl md:text-[40px] py-5 flex gap-3 overflow-hidden relative">
        <Fade delay={0} duration={750} direction="up">
          <span>Imagine.</span>
        </Fade>
        <Fade delay={0} duration={750} direction="up">
          <span> Create.</span>
        </Fade>
        <Fade delay={0} duration={750} direction="up">
          <span> Amaze.</span>
        </Fade>
        <div className="absolute w-full bg-gray-300 h-1 rounded-full bottom-0">
          <div
            className={`${styles.expands} bg-white rounded-l-full bottom-0 h-1`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [blink, setBlink] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const resizeTimeout = useRef(null); // Using useRef to store the timeout ID
  const pathname = usePathname();
  const router = useRouter();

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
  const toggleRedirect = (title) => {
    if (pathname === "/") {
      return;
    } else {
      setTimeout(() => router.push(`#${title}`), 750);
    }
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 bg-primary h-[100px] w-full px-4 shadow-md">
        <BlinkPage
          blink={blink}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <SplashScreen />
        <div className="flex justify-between items-center w-[1400px] max-w-full h-full mx-auto text-white">
          <Link href="/" className="text-3xl md:text-4xl font-bold">
            Portfolio.
          </Link>
          <div className="hidden md:flex gap-10 text-[18px]">
            <Link href="/" className="relative group transition">
              Home
              <div className="absolute bg-white scale-0 group-hover:scale-100 group-hover:w-full h-1 rounded-full transition-all duration-300 ease-in-out "></div>
            </Link>
            <Link href="/about" className="relative group transition">
              About
              <div className="absolute bg-white scale-0 group-hover:scale-100 group-hover:w-full h-1 rounded-full transition-all duration-300 ease-in-out "></div>
            </Link>
            <Link
              href={pathname !== "/" ? "/" : "#skills"}
              className="relative group transition"
              onClick={() => toggleRedirect("skills")}
            >
              Skills
              <div className="absolute bg-white scale-0 group-hover:scale-100 group-hover:w-full h-1 rounded-full transition-all duration-300 ease-in-out "></div>
            </Link>
            <Link
              href={pathname !== "/" ? "/" : "#projects"}
              className="relative group transition"
              onClick={() => toggleRedirect("projects")}
            >
              Projects
              <div className="absolute bg-white scale-0 group-hover:scale-100 group-hover:w-full h-1 rounded-full transition-all duration-300 ease-in-out "></div>
            </Link>
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
