import { SkillsProps } from "./types";
import stockManagementSystem from "@/public/assets/Portfolio/development/stock-management-system.png";
import atlasEstate from "@/public/assets/Portfolio/development/atlas-estate.jpg";
import techhub from "@/public/assets/Portfolio/development/techhub.jpg";
import doctorCam from "@/public/assets/Portfolio/development/doctorCam.png";
import riotRacer from "@/public/assets/Portfolio/blockchain/riotRacer.png";
import stabilityFarm from "@/public/assets/Portfolio/blockchain/stabilityFarm.png";
import poinSwap from "@/public/assets/Portfolio/blockchain/poinSwap.png";

export const headerLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const footerLinks = [
  {
    name: "My projects",
    url: "/work",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/william-greer-chase",
  },
  {
    name: "Github",
    url: "https://github.com/0x4k-helios",
  }
] as const;

export const categories = ["Full Stack Development", "Blockchain Development"] as const;

export const projects = [
  {
    id: "dev-10",
    image: techhub,
    title: "TechHub | IT Community Platform",
    description:
      "TechHub is a community platform for IT enthusiasts. Built with Next.js, MongoDB, Shadcn UI, Tailwind CSS, and Clerk for authentication and user management.",
    technologies: ["Next.js", "MongoDB", "Clerk", "Shadcn UI", "Tailwind CSS"],
    link: "https://tech-hub-tau.vercel.app/",
    repo: "https://github.com/0x4k-helios/teck-hub",
    category: "Full Stack Development",
    preferred: true,
    color: "#4775F1",
  },
  {
    id: "dev-9",
    image: atlasEstate,
    title: "Atlas Estate",
    description:
      "Atlas Estate, a real estate platform built with React, Node.js with Express.js, and MongoDB with Prisma. Tailwind CSS and Mantine UI for styling. And Auth0 for authentication. ",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Auth0",
      "Tailwind CSS",
      "Mantine UI",
    ],
    link: "https://atlas-estate.vercel.app/",
    repo: "https://github.com/0x4k-helios/atlas-web",
    category: "Full Stack Development",
    preferred: true,
    color: "#F97432",
  },
  {
    id: "dev-8",
    image: stockManagementSystem,
    title: "Stock Management System",
    description:
      "The Stock Management System is a C# (ASP.Net ) and PostgreSQL project designed to streamline stock management processes.",
    technologies: ["C#", "PostgreSQL", "ASP.Net"],
    link: "https://github.com/0x4k-helios/stock-management",
    repo: "https://github.com/0x4k-helios/stock-management",
    category: "Full Stack Development",
    preferred: false,
    color: "#3263BB",
  },
  {
    id: "dev-7",
    image: doctorCam,
    title: "Doctor Cam",
    description:
      "Online medical booking appointment platform for different diseases and health problems in Australia. Made in Next.js and handled CMS by integrating Sanity.",
    technologies: ["Next.js", "Builder.io", "Headless CMS", "Sanity"],
    link: "https://doctorcam.com.au",
    repo: "https://github.com/0x4k-helios/medic-schedule",
    category: "Full Stack Development",
    preferred: false,
    color: "#4775F1",
  },
  {
    id: "dev-3",
    image: poinSwap,
    title: "Decentralized Exchange Platform",
    description:
      "The first Decentralized Exchange with interoperability web3 ecosystem designed for retailers, companies & institutions by bridging DeFi into real-world utilities by utilizing Supernet on Polygon.",
    technologies: ["Next.js", "Styled Components", "Tailwind CSS", "Flask", "DeFi", "Ethers.js", "Netlify", "Socket.io"],
    link: "https://poinswap.com/",
    repo: "https://github.com/0x4k-helios/poinswap-dex",
    category: "Blockchain Development",
    preferred: true,
    color: "#4775F1",
  },
  {
    id: "dev-2",
    image: riotRacer,
    title: "Crypto Car Racing Game",
    description:
      "Riot Racers is a GameFi platform earning crypto by winning car racings with different NFT cars, drivers, mechanisms and gas stations. The project is built with React and NestJS",
    technologies: ["React", "Chakra UI", "Tailwind CSS", "NestJS", "AR/VR", "NFT", "Web3.js"],
    link: "https://riotracers.com",
    repo: "https://riotracers.com",
    category: "Blockchain Development",
    preferred: false,
    color: "#A682E2",
  },
  {
    id: "dev-1",
    image: stabilityFarm,
    title: "Stability Contracts",
    description:
      "Smart contracts of Defi Asset Management Platform. Developed with Solidity, Hardhat, Truffle, EVM",
    technologies: [
      "Solidity",
      "Smart Contract",
      "Hardhat",
      "Truffle",
      "EVM",
    ],
    link: "https://stability.farm/",
    repo: "https://github.com/0x4k-helios/stability-contracts",
    category: "Blockchain Development",
    preferred: true,
    color: "#F97432",
  },
] as const;

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaWordpress,
  FaFigma,
  FaAngular,
  FaEthereum,
  FaAnchor,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiCsharp,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBlender,
  SiDjango,
  SiDotnet,
  SiMui,
  SiTypescript,
  SiBlockchaindotcom,
  SiSolidity,
  SiRust,
  SiGo,
  SiWeb3Dotjs,
  SiSolana,
  SiEthers,
  SiPolkadot,
  SiOracle,
  SiIpfs,
  SiPostgresql,
  SiNtfy,
  SiParitysubstrate,
  SiChainlink,
  SiRemix,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaHardHat } from "react-icons/fa";

export const skills: SkillsProps[] = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Sass", icon: FaSass },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MUI", icon: SiMui },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Angular", icon: FaAngular },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Django", icon: SiDjango },
  { name: "C#", icon: SiCsharp },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Postgres", icon: SiPostgresql },
  { name: "Solidity", icon: SiSolidity },
  { name: "Rust", icon: SiRust },
  { name: "Golang", icon: SiGo },
  { name: "Web3.js", icon: SiWeb3Dotjs },
  { name: "Ethers.js", icon: SiEthers },
  { name: "Ethereum", icon: FaEthereum },
  { name: "Solana", icon: SiSolana },
  { name: "Anchor", icon: FaAnchor },
  { name: "Hardhat", icon: FaHardHat },
  { name: "Polkadot", icon: SiPolkadot },
  { name: "Oracle", icon: SiOracle },
  { name: "IPFS", icon: SiIpfs },
  { name: "ChainLink", icon: SiChainlink },
  { name: "Remix", icon: SiRemix },
] as const;
