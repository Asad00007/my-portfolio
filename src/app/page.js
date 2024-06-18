"use client";
import Navbar from "@/components/navbar/Navbar";
import { Poppins } from "next/font/google";
import { ReactTyped } from "react-typed";
import { IoMdRefresh } from "react-icons/io";
import Asad from "@/assets/AsadUllah.jpg";
// import AsadResume from "@/assets/Asad-Ullah-Resume.pdf";
import Hand from "@/assets/hand.gif";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { side, work } from "../../data";
import { Fade, Flip } from "react-awesome-reveal";
import Image from "next/image";
import { skills } from "../../data";
import { useEffect, useState } from "react";
import Link from "next/link";
import Chat from "@/components/chat/Chat";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const half = skills.slice(0, 6);

  const [showMore, setShowMore] = useState(false);
  return (
    <main className={poppins.className}>
      {/* <Navbar /> */}
      <div className="w-[1300px] mx-auto max-w-full px-5 py-10 md-1230:py-10 flex flex-col md-1230:flex-row gap-5 justify-between md-1230:h-screen-minus-100 mt-[100px] items-center">
        <div className="basis-full md:basis-1/2 ">
          <h3 className="text-2xl md:text-3xl mb-3 flex items-center">
            Hello,
            <div className="w-[35px] h-[35px]">
              <Image src={Hand} alt="waving" />
            </div>
          </h3>

          <ReactTyped
            strings={["I'm Asad Ullah!"]}
            typeSpeed={40}
            className="text-3xl md:text-[55px] leading-normal"
          />
          <br />
          <div className="my-3"></div>
          <ReactTyped
            strings={["Web Developer", "Tech Enthusiast", "Software Engineer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="text-2xl md:text-3xl "
          ></ReactTyped>
          <p className="my-5 mb-10">
            I&apos;m a web developer with a strong background in creating
            dynamic and responsive websites. I have a deep understanding of
            front-end and back-end technologies, and I love bringing innovative
            web applications to life.
          </p>
          <a
            href="/Asad-Ullah-Resume.pdf"
            download="Asad_Ullah_CV.pdf"
            className="bg-primary py-2 px-7 text-white rounded-md transition duration-300 ease-in-out hover:bg-opacity-90"
          >
            Download CV
          </a>
        </div>
        <div className="basis-full md:basis-1/2 flex flex-col-reverse gap-5 md:gap-0 md:flex-row mt-10 md:mt-24 md-1230:mt-0">
          <div className="border-2 border-primary rounded-2xl md:w-[400px]  overflow-hidden md:translate-x-10 md-1100:translate-x-16 md:translate-y-12">
            <div className="w-full border-b-2  border-primary p-3 flex justify-center items-center gap-3 bg-primary bg-opacity-30 relative">
              <div className="flex gap-2 absolute top-4 left-4">
                <div className="border-2 border-primary p-2 rounded-full bg-white"></div>
                <div className="border-2 border-primary p-2 rounded-full bg-white"></div>
                <div className="border-2 border-primary p-2 rounded-full bg-white"></div>
              </div>
              <div className="uppercase text-primary font-semibold">Links</div>
            </div>
            <div className="p-10 text-primary">
              <h1 className="text-[18px] font-semibold mb-3 select-none">
                Me, elsewhere
              </h1>
              <p className="text-[14px] select-none">
                If you want to find me on the interwebs, I’ve got a bunch of
                links for you below. Explore them at your own peril.
              </p>
              <div className="flex gap-3 mt-3">
                <a
                  href="https://github.com/Asad00007"
                  target="_blank"
                  className="border-2 border-primary rounded-md p-1 bg-primary bg-opacity-30 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/asad-ullah-7500b0243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  className="border-2 border-primary rounded-md p-1 bg-primary bg-opacity-30 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                >
                  <FaLinkedin />
                </a>
                <div className="border-2 border-primary rounded-md p-1 bg-primary bg-opacity-30 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-primary rounded-2xl md:w-[400px] overflow-hidden md:-ml-16 md:-mt-24 md:self-start z-10">
            <div className="w-full border-b-2  border-primary p-3 flex justify-between items-center gap-3 bg-primary bg-opacity-30">
              <div className="flex gap-2">
                <div className="border-2 border-primary p-2 rounded-full bg-white"></div>
                <div className="border-2 border-primary p-2 rounded-full bg-white"></div>
                <div className="border-2 border-primary p-2 rounded-full bg-white"></div>
              </div>
              <div className="border-2 border-primary px-2 py-1 rounded-md flex-1 select-none text-[14px] text-primary bg-white">
                https://about.me
              </div>
              <div className="border-2 border-primary p-1.5 rounded-md bg-white">
                <IoMdRefresh className="text-primary" />
              </div>
            </div>
            <div className="p-10 bg-white text-primary">
              <h1 className="text-[18px] font-semibold mb-3 select-none">
                ABOUT ME
              </h1>
              <p className="text-[14px] select-none">
                I’m Asad Ullah, a web developer who enjoys building
                user-friendly websites, exploring new technologies, and making
                the web a better place for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Fade duration={1500} fraction={0.2} triggerOnce="true">
        <div className="w-[1300px] max-w-full mx-auto  px-4 md-1100:h-screen-minus-100 flex flex-col items-center justify-between py-5 gap-6 md:mt-10 md-1230:mt-0">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Featured project made using{" "}
            <span className="text-primary">MERN</span> stack
          </h1>
          <div className="px-5 py-10 md:px-10 md:py-10 bg-primary rounded-[30px] w-[95%] flex flex-col items-center justify-between gap-10 md:gap-2 text-white md:h-[450px] shadow-md">
            <h1 className="text-xl md:text-[26px] font-semibold text-center">
              Freelancing Website
            </h1>
            <p className="text-[14px] md:text-base">
              Created a freelancing website using the MERN stack that connects
              users with a diverse pool of skilled freelancers. The platform
              enables clients to post projects, review freelancer profiles, and
              hire talent based on specific requirements, ensuring seamless
              collaboration and efficient project completion. With features like
              secure user authentication, real-time messaging, and a
              user-friendly interface, it provides an optimal experience for
              both freelancers and clients.
            </p>
            <div className="flex gap-3 self-start items-center">
              <Flip triggerOnce="true">
                <div className="w-[75px] h-[75px] overflow-hidden rounded-full">
                  <Image
                    src={Asad}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Flip>
              <div>
                <h1 className="text-[18px]">Asad Ullah</h1>
                <h2 className="opacity-80">Air University, Islamabad</h2>
              </div>
            </div>
          </div>
          <button className="bg-primary rounded-[32px] py-5 px-20 text-white text-[18px] hover:bg-opacity-95 hover:scale-95 transition duration-300 ease-in-out ">
            Explore more
          </button>
        </div>
      </Fade>

      <Fade duration={1500} fraction={0.2} triggerOnce="true">
        <div
          className="w-[1300px] max-w-full mx-auto px-4 pt-5 pb-10 flex flex-col items-center justify-center "
          id="skills"
        >
          <h1 className="text-2xl md:text-4xl font-semibold text-center my-10">
            My Skills
          </h1>
          <div className=" w-[1200px] max-w-full mx-auto flex flex-wrap justify-center items-center my-5 gap-10">
            {(!showMore ? half : skills).map((item, index) => {
              return (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex items-center justify-center w-[120px] h-[120px] md:w-[150px]  md:h-[150px] bg-primary bg-opacity-30 rounded-lg md:grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer group">
                    <Image
                      src={item.link}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="group-hover:scale-105 transition duration-300 ease-in-out"
                    />
                  </div>
                  <div className="text-center text-primary font-semibold">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="text-primary font-semibold hover:underline cursor-pointer mt-5"
            onClick={() => setShowMore(!showMore)}
            id="projects"
          >
            {showMore ? "Show less" : "Show more"}
          </div>
        </div>
      </Fade>
      <div className="w-[1300px] max-w-full mx-auto px-5 py-10">
        <Fade duration={1500} fraction={0.2} triggerOnce="true">
          <div
            className="flex flex-wrap justify-between items-center gap-3"
            id="work"
          >
            <div className="md:w-[570px] md-900:w-[700px] space-y-3">
              <h1 className="text-2xl md:text-4xl font-semibold ">
                My Projects
              </h1>
              <p className="opacity-80">
                I&apos;ve been working as a front-end developer for the past
                year, specializing in creating dynamic, responsive web
                applications. My expertise lies in HTML, CSS, JavaScript, and
                React. I excel at translating design into interactive, efficient
                user experiences, ensuring high-quality code and optimal
                performance. I often take on additional responsibilities to
                ensure project success and user satisfaction. Outside of
                “work-work,” I love experimenting with new technologies and
                developing side projects, some of which are showcased here.
              </p>
            </div>
            <div className="flex flex-row md:flex-col gap-3">
              <Link
                href="#work"
                className="bg-[#d6ddff] self-start md:self-end md:text-right rounded-3xl py-2 px-3 flex gap-1"
              >
                <div className="scale-75 py-[1px] px-[11px] rounded-full bg-[#2e33cd]"></div>
                <span className="text-[#2e33cd] text-[14px]">Work</span>
              </Link>
              <Link
                href="#sideprojects"
                className="bg-[#ffcce9] self-end text-right rounded-3xl py-2 px-3 flex gap-1"
              >
                <div className="scale-75 py-[1px] px-[11px] rounded-full bg-[#891a80]"></div>
                <span className="text-[#891b80] text-[14px]">
                  Side Projects
                </span>
              </Link>
            </div>
          </div>
        </Fade>
        <div className="flex flex-col gap-5 md:gap-10 items-center justify-center my-8 md:my-14 overflow-hidden">
          <Fade
            duration={1500}
            fraction={0.1}
            triggerOnce="true"
            direction="up"
          >
            <div className="flex flex-col md-1000:flex-row justify-between  gap-10 w-full">
              {work.slice(0, 2).map((item, index) => {
                return (
                  <div className="flex flex-col gap-5" key={index}>
                    <div className=" bg-gray-200 rounded-3xl overflow-hidden shadow-md transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-custom-blue">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-[#d6ddff] self-start rounded-3xl py-2 px-3 flex gap-1">
                      <div className="scale-75 py-[1px] px-[11px] rounded-full bg-[#2e33cd]"></div>
                      <span className="text-[#2e33cd] text-[14px]">Work</span>
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold mb-2">
                        {item.name}
                      </h1>
                      <p className="opacity-80">{item.shortDesc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col md-1000:flex-row justify-between  gap-10 w-full">
              {work.slice(2, 4).map((item, index) => {
                return (
                  <div className="flex flex-col gap-5" key={index}>
                    <div className=" bg-gray-200 rounded-3xl overflow-hidden shadow-md transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-custom-blue">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-[#d6ddff] self-start rounded-3xl py-2 px-3 flex gap-1">
                      <div className="scale-75 py-[1px] px-[11px] rounded-full bg-[#2e33cd]"></div>
                      <span className="text-[#2e33cd] text-[14px]">Work</span>
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold mb-2">
                        {item.name}
                      </h1>
                      <p className="opacity-80">{item.shortDesc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
        <div
          className="flex flex-col md-1000:flex-row justify-between  gap-10 w-full"
          id="sideprojects"
        >
          {side.slice(0, 1).map((item, index) => {
            return (
              <div className="flex flex-col gap-5" key={index}>
                <div className=" bg-gray-200 rounded-3xl overflow-hidden shadow-md md-1230:h-[550px] transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-custom-blue">
                  <video
                    autoPlay
                    muted
                    controls
                    className="h-full md:w-full object-cover"
                  >
                    <source src={item.img} type="" />
                  </video>
                </div>
                <div className="bg-[#ffcce9] self-start rounded-3xl py-2 px-3 flex gap-1">
                  <div className="scale-75 py-[1px] px-[11px] rounded-full bg-[#891a80]"></div>
                  <span className="text-[#891b80] text-[14px]">
                    Side Project
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold mb-2">{item.name}</h1>
                  <p className="opacity-80">{item.shortDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="overflow-hidden">
          <Fade
            duration={1500}
            fraction={0.1}
            triggerOnce="true"
            direction="up"
          >
            <div className="flex flex-col md-1000:flex-row justify-between  gap-10 w-full mt-10 overflow-hidden">
              {side.slice(1, 3).map((item, index) => {
                return (
                  <div
                    className="flex flex-col gap-5 md-1000:w-1/2 "
                    key={index}
                  >
                    <div className=" bg-gray-200 rounded-3xl overflow-hidden shadow-md w-full h-full md-1000:max-w-[615px] md-1000:h-[378px] transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-custom-blue">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className=" object-cover w-full h-full"
                      />
                    </div>
                    <div className="bg-[#ffcce9] self-start rounded-3xl py-2 px-3 flex gap-1">
                      <div className="scale-75 py-[1px] px-[11px] rounded-full bg-[#891a80]"></div>
                      <span className="text-[#891b80] text-[14px]">
                        Side Project
                      </span>
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold mb-2">
                        {item.name}
                      </h1>
                      <p className="opacity-80">{item.shortDesc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>

        <div className="flex flex-col md-1000:flex-row justify-between  gap-10 w-full mt-10">
          {side.slice(3, 5).map((item, index) => {
            return (
              <div className="flex flex-col gap-5 md-1000:w-1/2" key={index}>
                <div className=" bg-gray-200 rounded-3xl overflow-hidden shadow-md transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-custom-blue">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#ffcce9] self-start rounded-3xl py-2 px-3 flex gap-1">
                  <div className="scale-75 py-[1px] px-[11px] rounded-full bg-[#891a80]"></div>
                  <span className="text-[#891b80] text-[14px]">
                    Side Project
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold mb-2">{item.name}</h1>
                  <p className="opacity-80">{item.shortDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
