// File: Hero.js
"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import Image from "next/image";
import profilePic from "../../../public/assets/Profile.png";

class Hero extends Component {
  container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  render() {
    return (
      <div
        id="hero"
        className="mt-20 border-b border-neutral-900 pb-4 lg:h-screen sm:mt-20"
      >
        <div className="w-full h-full flex flex-wrap justify-center items-center xl:pb-20">
          <div className="lg:w-1/2 xl:pb-1">
            <div className="flex flex-col justify-center items-center lg:items-start lg:ml-20 md:item-center">
              <motion.h1
                variants={this.container(0)}
                initial="hidden"
                animate="visible"
                className="pb-8 text-2xl font-light tracking-tight lg:mt-16 lg:text-6xl"
              >
                Aditya Kanthe
              </motion.h1>
              <motion.span
                variants={this.container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Full Stack Developer
              </motion.span>
              <motion.p
                variants={this.container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-wide text-sm text-justify"
              >
                I am a passionate Full Stack Developer with a knack for crafting
                robust and scalable web applications. I have honed my skills in
                front-end technologies like <b>HTML, CSS, ReactJS</b> and
                back-end technologies like{" "}
                <b>Node.js, Express.js, and MongoDB</b>. My goal is to leverage
                my expertise to create innovative solutions that drive business
                growth and deliver exceptional user experiences.
                <div className="hero-icons flex justify-between text-xl text-gray-500 py-2">
                  <div className="py-2icons flex gap-4 mt-2">
                    <a href="" className="hover:text-blue-50">
                      <FaLinkedin />
                    </a>
                    <a href="" className="hover:text-blue-50">
                      <FaGithub />
                    </a>
                    <a href="" className="hover:text-blue-50">
                      <FaSquareXTwitter />
                    </a>
                  </div>
                  <div className="resume-btn">
                    <button className="flex items-center gap-2 btn text-lg px-2 py-1 border-none outline-none rounded-md cursor-pointer font-bold bg-[#0e0e1a] shadow-[0px_0px_20px_#1f4c65] hover:bg-gradient-to-l hover:from-[#021d4e] hover:to-[#1fd7e8] hover:text-[#040426] transition-all duration-600 active:scale-90">
                      <LuDownload /> Resume
                    </button>
                  </div>
                </div>
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-3">
            <div className="flex justify-center">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <Image
                  src={profilePic}
                  alt="Aditya Profile"
                  width={350}
                  height={350}
                  className="object-contain shadow-neon"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
