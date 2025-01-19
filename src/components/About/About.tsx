"use client"; // Mark the file as a client component for compatibility with client-specific libraries.

import React, { Component } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "../../../public/assets/about.jpg";

class About extends Component {
  render() {
    return (
      <div id="about" className="lg:h-screen border-b neutral-900 pb-10">
        <h1 className="my-20 text-center text-4xl">
          ABOUT <span className="text-neutral-500">ME</span>
        </h1>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-3"
          >
            <div className="flex items-center justify-center">
              <Image
                className="w-[400px] h-[400px] rounded-xl object-cover shadow-neon p-8"
                src={aboutImage}
                alt="about"
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-xl py-10 tracking-wide text-justify text-sm lg:pr-12">
                I am a dedicated and versatile Full Stack Developer with a
                passion for creating efficient and user-friendly web
                applications. With hands-on experience in both frontend and
                backend development, I excel at creating seamless user
                experiences and efficient server-side logic. My portfolio
                includes diverse projects like a course selling website with JWT
                authentication and a fully functional online food delivery
                platform. I am dedicated to continuous learning and currently
                enhancing my skills through the #100DaysOfCode challenge.
                Outside of coding, I enjoy staying active, exploring new
                technologies, and contributing to open-source projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default About;
