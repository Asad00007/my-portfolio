"use client";
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
    <footer className="w-full  bg-primary">
      <div className="w-[1300px] px-5 py-10 max-w-full mx-auto  h-full text-white ">
        <div className="flex justify-center flex-col items-center gap-5 relative">
          <div
            className="absolute right-0 md:-right-5 top-0  p-2 bg-white text-primary rounded-full cursor-pointer"
            title="Back to top"
            onClick={handleScrollTop}
          >
            <FaChevronUp />
          </div>

          <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="text-3xl md:text-[40px] font-serif">Get in Touch</h1>
            <div className=" flex  items-center justify-center gap-2">
              <MdEmail className="text-3xl" />
              <span>asadsalim752@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <hr className="border-t w-[100px] border-2 rounded-full" />
              <div>OR</div>
              <hr className="border-t w-[100px] border-2 rounded-full" />
            </div>
            <p className="opacity-80 text-center">
              Visit the links given below to get in touch with me.
            </p>
            <div className="flex gap-5 mt-3">
              <a href="https://github.com/Asad00007" target="_blank">
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/asad-ullah-7500b0243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <div>
                <FaTwitter className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5">
          Copyright © 2024{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
