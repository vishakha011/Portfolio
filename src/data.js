import React from 'react';
import { v4 as uuid } from 'uuid';
import { SiHtml5, SiJavascript, SiTypescript, SiReact, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { FaNodeJs, FaSass } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';


export const skillSet = [
  {
    "id": uuid(),
    "skill": "HTML",
    "img": <SiHtml5 className="skill-icon"/>
  },
  {
    "id": uuid(),
    "skill":"CSS",
    "img": <DiCss3 className="skill-icon" />
  },
  {
    "id": uuid(),
    "skill": "JavaScript",
    "img": <SiJavascript className="skill-icon" />
  },
  {
    "id": uuid(),
    "skill": "TypeScript",
    "img": <SiTypescript className="skill-icon" />
  },
  {
    "id": uuid(),
    "skill": "Nodejs",
    "img": <FaNodeJs className="skill-icon" />
  },
  {
    "id": uuid(),
    "skill": "MongoDB",
    "img": <SiMongodb className="skill-icon" />
  },
  {
    "id": uuid(),
    "skill": "React",
    "img": <SiReact className="skill-icon" />
  },
  {
    "id": uuid(),
    "skill": "Scss/Sass",
    "img": <FaSass className="skill-icon" />
  },
  {
    "id": uuid(),
    "skill": "TailwindCss",
    "img": <SiTailwindcss className="skill-icon" />
  },
  {
    "id": uuid(),
    "skill": "Git",
    "img": <AiOutlineGithub className="skill-icon" />
  }
];

export const Projects = [
  {
    "id": uuid(),
    "tags": ["Highlight", "HTML"],
    "title": "Kriya",
    "description": "Kriya is a Yoga and Spiritual Wellness theme website. The layout is created for Yoga trainer, Meditation centers, Physical & Mental wellness center and is kind of a final project based on my learnings of HTML & CSS.",
    "img": "/images/project/kriya.png",
    "deploymentLink": "ikushaldave.github.io/kriya/",
    "githubLink":"https://github.com/vishakha011/kriya"
  },
  {
    "id": uuid(),
    "tags": ["Highlight", "JavaScript"],
    "title": "The Epic Stories",
    "description": "A JavaScript based project which is a Curated collection of long-form stories on people and companies from various fields.",
    "img": "/images/project/epic-stories.png",
    "deploymentLink": "",
    "githubLink":"https://github.com/vishakha011/TheEpicStories"
  },
  // {
  //   "id": uuid(),
  //   "tags": ["Highlight", "Reactjs"],
  //   "title": "Shopping Cart",
  //   "description": "",
  //   "img": shopping-cart,
  //   "deploymentLink": "",
  //   "githubLink":"https://github.com/vishakha011/TA-FRONTEND-state-and-forms-TRaaab/tree/block-BRaabw/block-BRaabw/code"
  // },
  // {
  //   "id": 5,
  //   "tags": ["Highlight", "Nodejs"],
  //   "title": "Zoom App Clone",
  //   "description": "",
  //   "img": zoomapp,
  //   "deploymentLink": "",
  //   "githubLink":""
  // },
  {
    "id": uuid(),
    "tags": ["Highlight", "Extension"],
    "title": "Quosh",
    "description": "A browser extension for learning Marathi. When you visit a website, Quosh automatically translates certain words into marathi. That way, you can learn words while browsing the internet",
    "img": "/images/project/quosh.png",
    "deploymentLink": "",
    "githubLink":"https://github.com/bharat-patodi/quosh"
  },
  
  {
    "id": uuid(),
    "tags": ["HTML"],
    "title": "Hydro",
    "description": "A layout based on my learning of different types of media in the form of images, audio, video.",
    "img": "/images/project/hydro.png",
    "deploymentLink": "https://adding-media-hydro.vercel.app/",
    "githubLink":"https://github.com/vishakha011/Adding-media/tree/master/Ex2-Assignment-level-2"
  },
  {
    "id": uuid(),
    "tags": ["HTML"],
    "title": "Social Media Dashboard",
    "description": "A layout built based on my learning of Background and Css gradient",
    "img": "/images/project/dashboard.png",
    "deploymentLink": "https://socialmediadashboard-sigma.vercel.app/",
    "githubLink":"https://github.com/vishakha011/Backgrounds-and-Gradients/tree/master/Ex2-Assignment-level-2"
  },
  {
    "id": uuid(),
    "tags": ["HTML"],
    "title": "Journey",
    "description": "A layout build to practice building and styling Html forms",
    "img": "/images/project/journey.png",
    "deploymentLink": "building-html-forms-journey.vercel.app",
    "githubLink":"https://github.com/vishakha011/Building-html-forms/tree/master/Ex3-assignment-level-2"
  },
  {
    "id": uuid(),
    "tags": ["HTML"],
    "title": "Stimulus",
    "description": "Stimulus is a layout build using CSS Grid",
    "img": "/images/project/stimulus.png",
    "deploymentLink": "css-grid-stimulus.vercel.app",
    "githubLink":"https://github.com/vishakha011/CSS_Grid/tree/master/Assignment-level-1"
  },
  {
    "id": uuid(),
    "tags": ["HTML"],
    "title": "Pixelarity",
    "description": "It is a layout built to to practice and understand positioning of the content.",
    "img": "/images/project/pixelarity.png",
    "deploymentLink": "https://altitutde-by-pixelarity.vercel.app/",
    "githubLink":"https://github.com/vishakha011/Positioning-content/tree/master/Project-1"
  },
  {
    "id": uuid(),
    "tags": ["HTML"],
    "title": "Massively",
    "description": "It is a layout built for understanding SCSS",
    "img": "/images/project/massively.png",
    "deploymentLink": "https://massively-9t4esmuug-vishakha011.vercel.app/",
    "githubLink":"https://github.com/vishakha011/SASS/tree/master/Assignment-lvel-1-Massively"
  },
  {
    "id": uuid(),
    "tags": ["HTML"],
    "title": "Training Studio",
    "description": "A layout built yo learn how to organize data with tables.",
    "img": "/images/project/trainingstudio.png",
    "deploymentLink": "https://gym-website-six.vercel.app/",
    "githubLink":"https://github.com/vishakha011/Tables"
  },

  // {
  //     "id": uuid(),
  //     "tags": ["JavaScript"],
  //     "title": "To-do",
  //     "description": "DOM and events block-BJaaez",
  //     "img": "/images/project/todo.png",
  //     "deploymentLink": "",
  //     "githubLink":"https://github.com/vishakha011/TA-JS-DOM-and-Events-TJaaaf/tree/block-BJaaez/block-BJaaez/code"
  // },
  {
    "id": uuid(),
    "tags": ["JavaScript"],
    "title": "Memory game",
    "description": "It a game where you have to match the two similar icons, the icons are displayed on click.",
    "img": "/images/project/memory.png",
    "deploymentLink": "",
    "githubLink":"https://github.com/vishakha011/TA-JS-DOM-and-Events-TJaaaf/tree/block-BJaaex/block-BJaaex/code"
  },
  {
    "id": uuid(),
    "tags": ["JavaScript"],
    "title": "Calculator",
    "description": "A simple calcular that can perform basic mathematical operations.",
    "img": "/images/project/calculator.png",
    "deploymentLink": "",
    "githubLink":"https://github.com/vishakha011/TA-JS-DOM-and-Events-TJaaaf/tree/block-BJaaeo/block-BJaaeo/code"
  },
  {
    "id": uuid(),
    "tags": ["JavaScript"],
    "title": "Github Finder",
    "description": "This is a simple application built using github API's wherein you can search for github users using their username.",
    "img": "/images/project/github-finder.png",
    "deploymentLink": "",
    "githubLink":"https://github.com/vishakha011/js_async/tree/master/03%20-%20Promise/02%20-%20fetch/github-user"
  },

  // {
  //     "id": uuid(),
  //     "tags": ["Nodejs"],
  //     "title": "",
  //     "description": "Blog App",
  //     "img": "/images/project/blogapp.png",
  //     "deploymentLink": "",
  //     "githubLink":""
  // },
  // {
  //     "id": uuid(),
  //     "tags": ["Nodejs"],
  //     "title": "Conduit API and JWT",
  //     "description": "Clone of Conduit API. Aim was to understand the concept of building API's and testing them using POSTMAN. Used JWT for login and registration.",
  //     "img": "/images/project/nodeconduit.png",
  //     "deploymentLink": "",
  //     "githubLink":""
  // },
  // {
  //     "id": uuid(),
  //     "tags": ["Nodejs"],
  //     "title": "Chat App",
  //     "description": "",
  //     "img": "/images/project/chatapp.png",
  //     "deploymentLink": "",
  //     "githubLink":""
  // },
  {
    "id": uuid(),
    "tags": ["React"],
    "title": "Manzr",
    "description": "A platform for showcasing portfolios. It's a Full-stack application where a user can login can and upload their portfolios, built using React, Express, Nodejs & MongoDB.",
    "img": "/images/project/manzr.png",
    "deploymentLink": "https://manzr.me/",
    "githubLink":"https://github.com/bharat-patodi/manzar"
  },
  
  // {
  //     "id": uuid(),
  //     "tags": ["React"],
  //     "title": "React Conduit App",
  //     "description": "",
  //     "img": "/images/project/conduitapp.png",
  //     "deploymentLink": "",
  //     "githubLink":"https://github.com/vishakha011/React-Blog-App"
  // },
  {
    "id": uuid(),
    "tags": ["React"],
    "title": "Github Top Stars / Github Battle",
    "description": "This application includes two individual application. Github Top stars displays top 20 most starred repo based on different category. Github Battle accept two github username and based on number of repositories declare a winner.",
    "img": "/images/project/github-battle.png",
    "deploymentLink": "",
    "githubLink":"https://github.com/vishakha011/TA-FRONTEND-lifecycle-and-routing-TRaaac/tree/block-BRaace/block-BRaace/code"
  },
  
  // {
  //     "id": uuid(),
  //     "tags": ["React"],
  //     "title": "Tic Tak Toe",
  //     "description": "",
  //     "img": "/images/project/tictactoe.png",
  //     "deploymentLink": "",
  //     "githubLink":"https://github.com/vishakha011/TA-FRONTEND-lifecycle-and-routing-TRaaac/tree/block-BRaacd/block-BRaacd/code"
  // },
];

export const Blogs = [
  {
    "id": uuid(),
    "title": "Hello to the World of HTML and CSS",
    "img": "/images/blog/blog-1.jpg",
    "description": "We know HTML and CSS are computer languages used to design beautiful websites. HTML defines the structure of the content on ...",
    "mediumLink":"https://medium.com/@khatadevishakha01/hello-to-the-world-of-html-and-css-4b12a0785cc"
  },
  {
    "id": uuid(),
    "title": "Semantic HTML",
    "img": "https://miro.medium.com/max/875/1*aFxpLx2Ckw56ORvrLKKHaA.jpeg",
    "description": "The meaning of the content on a web page can be reinforce by the correct use of HTML. In HTML, semantics means using proper e...",
    "mediumLink":"https://medium.com/@khatadevishakha01/semantic-html-528365e0150a"
  },
  {
    "id": uuid(),
    "title": "CSS : The Box-Model",
    "img":"https://miro.medium.com/max/875/1*gkBRbZzPOG8utbnFIBc0oA.jpeg",
    "description": "HTML is all about the content, which resides into HTML elements and every HTML element is a box. Before discussing Box-model...",
    "mediumLink":"https://medium.com/@khatadevishakha01/hello-to-the-world-of-html-and-css-4b12a0785cc"
  },

];