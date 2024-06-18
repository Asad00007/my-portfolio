"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaUserTie } from "react-icons/fa6";

const About = () => {
  return (
    <main>
      <div className="w-[1200px] mx-auto max-w-full px-5  mt-[100px]">
        <div className="flex gap-3 items-center justify-center py-10 md:py-20 overflow-hidden ">
          <Fade duration={500} triggerOnce="true" direction="up">
            <FaUserTie className="text-4xl" />
            <h1 className="text-2xl md:text-[50px] font-semibold text-center">
              About Me
            </h1>
          </Fade>
        </div>
        <div className="space-y-5 pb-10 md:pb-20">
          <h1 className="text-xl text-primary">In a nutshell</h1>
          <p>
            Hi there, I&apos;m Asad Ullah! I&apos;m a Software Engineer, Tech
            Enthusiast, and Web Developer who loves to create innovative and
            unique websites. With a strong foundation in both front-end and
            back-end technologies, I thrive on turning complex problems into
            elegant solutions. My passion for continuous learning and innovation
            drives me to explore the latest trends in web development.
          </p>
          <h1 className="text-xl text-primary">Professional Life</h1>
          <p>
            Most recently, I led the development of a company website,
            transforming Figma designs into a fully functional and visually
            appealing web presence. In my role as a Front-End Developer, I
            utilized Next.js and Tailwind CSS to create a responsive and
            user-friendly interface. Currently, we are in the process of
            developing the admin panel, where I continue to contribute as a
            Front-End Developer. Additionally, I am leveraging my backend skills
            to create APIs using Node.js and Express, ensuring seamless
            integration and robust performance.
            <br />
            <br />
            Previously, I was an IT intern at IT Green Solutions, where I
            maintained their existing React and Next js applications. My main
            responsibilites included identifying and fixing bugs, implementing
            enhancements, and updating features as required. Moreover, I
            developed interactive and user-friendly UI components using
            React.js, HTML, CSS, and JavaScript to create seamless web
            applications and conducted thorough testing of the software to
            ensure it meets quality standards and functions correctly.
          </p>
          <h1 className="text-xl text-primary">Personal Life</h1>
          <p>
            When I&apos;m not creating websites, I engage in activities that
            stimulate my mind and foster creativity. I sharpen my strategic
            thinking through chess and explore cognitive games like the
            &quot;Schulte Table.&quot; These activities complement my technical
            skills and contribute to my overall growth.
            <br />
            <br />I actively pursue side projects as opportunities to acquire
            new languages and skills, leveraging them as practical learning
            experiences. These projects not only reinforce my technical
            proficiency but also foster innovation and creativity in
            problem-solving. Looking ahead, I am keen to explore emerging
            technologies in front-end development, aligning my learning path
            with current market trends and evolving industry demands. This
            proactive approach ensures that I stay at the forefront of
            technological advancements, ready to contribute effectively to
            future projects and initiatives
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
