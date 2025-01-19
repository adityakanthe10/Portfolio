"use client";

import React, { Component } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-center tracking-light "
        >
          <div className="Icons flex justify-center px-2">
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="my-4 hover:text-blue-50 flex items-center justify-center text-2xl px-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/adityakanthe10"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="my-4 hover:text-blue-50 rounded flex items-center text-2xl px-2"
              target="_blank"
              rel="noopener noreferre"
              href="https://www.linkedin.com/in/aditya-kanthe-a63bb9214"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="my-4 hover:text-blue-50 flex items-center justify-center text-2xl px-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/aditya_kanthe"
            >
              <FaSquareXTwitter />
            </motion.a>
          </div>
          <p className="my-4">9324763679</p>
          <a href="#" className="border-b">
            adityakanthe10@gmail.com
          </a>
        </motion.div>
      </div>
    );
  }
}
// className="hover:text-blue-50" target="_blank" href="">< />

export default Contact;
