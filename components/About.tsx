"use client";

import React from "react";
import { motion } from "framer-motion";
import personalImage from "@/public/assets/images/my-image.jpg";
import darkLogo from "@/public/assets/images/logo-icon-dark.svg";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { BsLinkedin, BsGithub, BsDribbble, BsStackOverflow } from "react-icons/bs";
import PrimaryLinkButton from "./ui/PrimaryLinkButton";
import SecondaryLinkButton from "./ui/SecondaryLinkButton";
import IconLinkButton from "./ui/IconLinkButton";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

const containerChildren = {
  initial: { opacity: 0, y: 200 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.5,
    },
  },
};

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="flex flex-col justify-center items-center gap-8 w-full text-left leading-8 lg:h-[75vh] px-[2%] sm:px-[5%] max-lg:my-28 lg:mb-40 scroll-mt-28"
      id="about"
    >
      <div className="flex flex-col gap-20 lg:flex-row justify-between lg:items-center min-w-fit z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            amount: 0.8,
          }}
          className="flex items-center w-fit"
        >
          <motion.div
            variants={containerChildren}
            className="z-10 w-fit lg:w-full"
          >
            <Image
              src={personalImage}
              alt="William Greer's Image"
              priority={true}
              className="h-60 w-60 lg:h-72 lg:w-72 xl:h-96 xl:w-96 rounded-full shadow-xl object-cover"
            />
          </motion.div>
          <motion.div
            variants={containerChildren}
            className="-ml-20 lg-ml-28 xl:-ml-52 w-36 lg:w-48 h-fit xl:w-96 z-0 "
          >
            <Image
              src={darkLogo}
              alt="William Greer Logo"
              priority={true}
              className=""
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            amount: 0.8,
          }}
          className="md:w-[80%] lg:w-[50%]"
        >
          <motion.h2
            variants={containerChildren}
            className="text-4xl sm:text-6xl text-left font-semibold !leading-[1.5] capitalize overflow-clip inline-block"
          >
            William Greer
          </motion.h2>
          <motion.div
            variants={containerChildren}
            className="space-y-4 text-[1.25em] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.25vw] text-left font-normal leading-[1.4] text-secondaryDarkerColor"
          >
            <p>
            A Full Stack and Blockchain Engineer with expertise in building scalable web applications, designing robust back-end systems using Node.js and Python, creating intuitive front-end interfaces with React and Angular, and developing secure blockchain solutions with Solidity and Web3.js.
            </p>

            <p>
            Skilled in solving complex problems, communicating effectively across diverse teams, and fostering strong collaboration to ensure the successful delivery of impactful projects.
            </p>
          </motion.div>

          <motion.div
            variants={containerChildren}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-start mt-8 gap-4 sm:gap-2 text-lg font-medium "
          >
            <div className="flex flex-row justify-center gap-4 sm:gap-2 max-sm:items-center max-sm:w-full">
              <PrimaryLinkButton title="My work" link="/work" />

              <SecondaryLinkButton
                title="Resume"
                link="https://drive.google.com/file/d/1qVe8EkJrbGi4mwXhRFl2DbxN9dd8QrLg/view?usp=sharing"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-2 ">
              <IconLinkButton
                link="https://www.linkedin.com/in/william-greer-chase/"
                icon={BsLinkedin}
              />

              <IconLinkButton
                link="https://github.com/0x4k-helios"
                icon={BsGithub}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
