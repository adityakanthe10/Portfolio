// File: Hero.js
"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import Image from "next/image";
import ThemeToggle from "../../components/ThemeToggle";
import profilePic from "../../../public/assets/Profile.png";

class Hero extends Component<{}, { hasAnimated: boolean }> {
  state = {
    hasAnimated: false,
  };

  componentDidMount(): void {
    this.setState({ hasAnimated: true });
  }

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
        className="mt-20 border-b border-neutral-900 pb-4 lg:h-screen "
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Row */}
          <div className="flex justify-end lg:justify-end">
            <div className="lg:w-1/2 flex justify-end">
              <ThemeToggle />
            </div>
          </div>
          <div className="w-full h-full flex flex-wrap justify-center items-center xl:pb-20">
            <div className="lg:w-1/2 xl:pb-1">
              <div className="flex flex-col justify-center items-center lg:items-start lg:ml-20 md:item-center">
                <motion.h1
                  variants={this.container(0)}
                  initial={this.state.hasAnimated ? false : "hidden"}
                  animate="visible"
                  className="pb-8 text-2xl font-light tracking-tight lg:mt-16 lg:text-6xl"
                >
                  Aditya Kanthe
                </motion.h1>
                <motion.span
                  variants={this.container(0.5)}
                  initial={this.state.hasAnimated ? false : "hidden"}
                  animate="visible"
                  className="bg-gradient-to-r from-purple-500 via-slate-500 to-pink-300 bg-clip-text text-3xl tracking-tight text-transparent dark:from-purple-300 dark:via-indigo-400 dark:to-cyan-200"
                >
                  Full Stack Developer
                </motion.span>
                <motion.div
                  variants={this.container(1)}
                  initial={this.state.hasAnimated ? false : "hidden"}
                  animate="visible"
                  className="my-2 max-w-xl py-6 font-light tracking-wide text-sm text-justify"
                >
                  I’m a Full Stack Developer skilled in building secure,
                  high-performance web applications using modern frameworks like
                  React, Next.js, Node.js, etc. From responsive UIs to scalable
                  backends, I specialize in crafting end-to-end solutions that
                  blend functionality, aesthetics, and performance to elevate
                  user experience and business outcomes.
                  <br />
                  <div className="hero-icons flex justify-between text-xl text-gray-500 py-2">
                    <div className="py-2icons flex gap-4 mt-2">
                      <a
                        href="https://www.linkedin.com/in/adityakanthe10/"
                        className="hover:text-blue-50"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="https://github.com/adityakanthe10"
                        className="hover:text-blue-50"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://x.com/aditya_kanthe"
                        className="hover:text-blue-50"
                      >
                        <FaSquareXTwitter />
                      </a>
                    </div>
                    <div className="resume-btn">
                      <a
                        href="https://drive.google.com/file/d/1ztsRQiR9vU2jwx5VF-LZNnSArqudT8s1/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 btn text-lg px-2 py-1 border-none outline-none rounded-md cursor-pointer font-bold text-white bg-gradient-to-r from-purple-500 via-slate-500 to-pink-300 shadow-[0px_0px_20px_#1f4c65] hover:from-purple-600 hover:via-slate-600 hover:to-pink-400 transition-all duration-600 active:scale-90 dark:from-purple-300 dark:via-indigo-400 dark:to-cyan-200 dark:hover:from-cyan-200 dark:hover:via-indigo-400 dark:hover:to-purple-300 dark:text-[#040426]"
                      >
                        <LuDownload /> Resume
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-3">
              <div className="flex justify-center">
                <motion.div
                  initial={this.state.hasAnimated ? false : { x: 100, opacity: 0 }}
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
      </div>
    );
  }
}

export default Hero;
