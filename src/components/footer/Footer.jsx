"use client";
import vlogger from "@/assets/vlogger.png";
import Image from "next/image";
import { FaChevronUp, FaPhone } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full h-[350px] bg-primary">
      <div className="w-[1300px] px-5 py-10 max-w-full mx-auto  h-full text-white flex flex-col items-center gap-5 relative">
        <div
          className="absolute right-0  top-10 p-2 bg-white text-primary rounded-full cursor-pointer"
          title="Back to top"
          onClick={handleScrollTop}
        >
          <FaChevronUp />
        </div>
        <div className="flex gap-5 items-center">
          <Image src={vlogger} alt="Profile" className="w-[60px]" />
          <h1 className="text-2xl md:text-4xl">Asad Ullah</h1>
        </div>
        <div className="flex gap-2 items-center">
          <MdEmail className="text-xl" /> asadsalim752@gmail.com
        </div>
        <div className="flex gap-2 items-center">
          <FaPhone /> 0310-9106369
        </div>
        <div className="flex gap-5 mt-3">
          <a href="https://github.com/Asad00007" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/asad-ullah-7500b0243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <div>
            <FaTwitter />
          </div>
        </div>
        <div>Copyright © 2024 </div>
      </div>
    </footer>
  );
};

export default Footer;
