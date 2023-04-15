import {
  airbnb,
  binance,
  coinbase,
  dropbox,


  portfolio,
  publiclab,

  cdc,
 emi, cpge, agtemera, emicatronic, math, province, supermarket, fire, lycee, ecomm
} from "../assets";

import {
  AiFillGithub,

  AiFillLinkedin,
  AiFillMail,

  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {

  SiJavascript,
  SiBootstrap,
  SiReact,

  SiTailwindcss,
  SiGraphql,
  SiPython,

  SiC,

  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps, SiJava, SiDart, SiTypescript, SiAngular, SiSpring, SiDocker, SiWireshark, SiCss3
} from "react-icons/si";

import {
  FaAws, FaBrain, FaChartBar, FaDAndD,
  FaHardHat, FaHtml5, FaJira, FaNetworkWired, FaPython, FaTrello
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {DiCss3, DiJavascript1, DiMsqlServer, DiRuby} from "react-icons/di";
import {IoLogoReact} from "react-icons/all.js";

export const resumeLink = "https://drive.google.com/file/d/1fjJO5tSlObCaUXR3kr4Or-2538BfSSEf/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/mittal-parth";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Certificats",
  },
  {
    id: "extraCurricular",
    //title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: emi,
    title: "Mohammadia School of Engineers",
    degree: "Software Enginner",
    duration: "December 2021 - May 2024",
    content1: "After completing the preparatory classes (CPGE), I joined the Mohammadia School of Engineering in Rabat in the IT and digitalization sector, A high-level technical training and a solid paramilitary regime allowed me to develop several skills and life techniques such as discipline...etc",
    //content2: "Minor: Information Technology",
  },
  {
    id: "education-1",
    icon: cpge,
    title: "Preparatory class for high schools",
    degree: "CMC degree",
    duration: "December 2019 - May 2020",
    content1: "A solid framework and a generalist education, The program provided in the preparatory classes is generalist and therefore has the advantage of preparing as well as possible for the tests of the various post-preparatory competitions.",
    //content2: "Minor: Information Technology",
  },
  {
    id: "education-1",
    icon: lycee,
    title: "High School Abdellah Guenoun",
    degree: "Bac with honors",
    duration: "December 2017 - May 2019",
    content1: "Abdellah Guenoun, this is the place where I spent my two years, 1st year baccalaureate and 2nd year baccalaureate in mathematics A. It was a difficult stage, especially at the beginning, but with persistence, patience and hard work, I passed with honors.",
    //content2: "Minor: Information Technology",
  },
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-6",
        icon: SiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-8",
        icon: SiTypescript,
        name: "TypeScript",
      },

      {
        id: "pl-4",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-8",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "pl-7",
        icon: SiDart,
        name: "Dart",
      },



    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "pl-9",
        icon: SiSpring,
        name: "Spring Boot",
      },

      {
        id: "pl-10",
        icon: SiFlutter,
        name: "Flutter",
      },

      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "pl-11",
        icon: SiAngular,
        name: "Angular",
      },

      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
      {
        id: "pl-25",
        icon: FaPython,
        name: "NumPy",
      },
      {
        id: "rn-1",
        icon: IoLogoReact,
        name: "React Native",
      },




    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "pl-13",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "pl-14",
        icon: SiWireshark,
        name: "Wireshark",
      },


      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "pl-15",
        icon: FaTrello,
        name: "Trello",
      },
      {
        id: "pl-16",
        icon: FaJira,
        name: "Jira",
      },
      {
        id: "pl-12",
        icon: FaAws,
        name: "AWS Amazon",
      },
      {
        id: "pl-18",
        icon: FaNetworkWired,
        name: "Packet Tracer",
      },
      {
        id: "pl-20",
        icon: FaChartBar,
        name: "Power BI",
      },





      {
        id: "t-8",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Internship," +
        "\n" +
        "Province of Khouribga ",
    logo: province,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        //title: "Web Lead",
        duration: "august 2022 ",
        content: [
          {
            text: "This internship allowed me to develop my professional skills through creating a desktop application " +
                "to manage internships, observing professionals in real-life situations, and being involved in multiple" +
                " projects that gave me significant responsibility. This experience enabled me to develop skills in programming," +
                " project management, " +
                "communication, planning, and problem-solving, which will be useful for my future career.",
            link: "",
          },
        ],
      },
      // {
      //   title: "Web Developer",
      //   duration: "Nov 2021 - Apr 2022",
      //   content: [
      //     {
      //       text: "Added Conditional Fields support to the Forms Module.",
      //       link: "",
      //     },
      //   ],
      // },
      // {
      //   title: "Web Developer Intern",
      //   duration: "Jun 2021 - Oct 2021",
      //   content: [
      //     {
      //       text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
      //       link: "",
      //     },
      //   ],
      // },
    ],
  },
  {
    organisation: "Internship, Urban Agency of Skhirate-Témara",
    logo: agtemera,
    link: "https://cdc.nitk.ac.in/",
    positions: [
      {
        // title: "Lead Developer",
        duration: "July 2022",
        content: [
          {
            text: "  this internship allowed  me to  know the  importance of security in society cannot be overstated, especially in the digital age. With the rise in cybercrime, securing personal and confidential information has become paramount",
            link: "",
          },
          // {
          //   text: "Setup an admin interface for dynamic content management by different stakeholders.",
          //   link: "",
          // },
        ],
      },
    ],
  },
  {
    organisation: "Membre in EMI-CATRONIC club",
    logo: emicatronic,
    link: "https://cdc.nitk.ac.in/",
    positions: [
      {
       // title: "Lead Developer",
        duration: "Septembre 2022",
        content: [
          {
            text: "Being a membre  in the EMI Catronic club taught me  valuable skills in communication, social connections, and explaining ideas. These skills are useful in personal and professional life, helping me  better listen, communicate, and persuade others.",
            link: "",
          },
          // {
          //   text: "Setup an admin interface for dynamic content management by different stakeholders.",
          //   link: "",
          // },
        ],
      },
    ],
  },
  // {
  //   organisation: "Membre in IT Academi club",
  //   logo: cdc,
  //   link: "https://cdc.nitk.ac.in/",
  //   positions: [
  //     {
  //       //title: "Lead Developer",
  //       duration: "Septembre 2022",
  //       content: [
  //         {
  //           text: "Participating in the EMI Catronic club taught me  valuable skills in communication, social connections, and explaining ideas. These skills are useful in personal and professional life, helping me  better listen, communicate, and persuade others.",
  //           link: "",
  //         },
  //         // {
  //         //   text: "Setup an admin interface for dynamic content management by different stakeholders.",
  //         //   link: "",
  //         // },
  //       ],
  //     },
  //   ],
  // },
  {
    organisation: "Math content teacher",
    logo: math,
    link: "https://attoumidriss2001.github.io/Portfolio/",
    positions: [
      {
       // title: "Lead Developer",
        duration: "2020-2022",
        content: [
          {
            text: "I am a math expert with several years of experience as a math assistant. Over the years, I have helped hundreds of students understand and solve complex math problems, ranging from basic math to advanced math. I have a strong background in teaching math and creating an engaging and interactive learning environment for students.\n" +
                "\n",
            link: "",
          },
          // {
          //   text: "Setup an admin interface for dynamic content management by different stakeholders.",
          //   link: "",
          // },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "Huawei",
    logo: publiclab,
    //repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "HCIA-5G Course ",
    link: "",
    //number: "#10731",
    date: "Feb 24 2022",
    // linesAdded: "101",
    // linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "IBM",
    logo: publiclab,
   // repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Introduction to Cybersecurity Tools&Cyber Attacks ",
    link: "https://www.coursera.org/account/accomplishments/verify/GW4M4M4LPR8M",
   // number: "#10681",
    date: "Feb 9 2022",
    // linesAdded: "86",
    // linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "Google",
    logo: publiclab,
    //repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Foundation of project management",
    link: "https://www.coursera.org/account/accomplishments/verify/VSK8UDLX6UYC",
   // number: "#11114",
    date: "May 4 2022",
    // linesAdded: "1",
    // linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "Google",
    logo: publiclab,
    // repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Google Data Analytics",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/JHZK35LVAZ6R",
    // number: "#10634",
    date: "Feb 24 2022",
    // linesAdded: "64",
    // linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "Google",
    logo: publiclab,
    //repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "Foundations of Digital marketing and E-commerce",
    link: "https://www.coursera.org/account/accomplishments/verify/L6VCP8KS96VN",
    //number: "#11120",
    date: "May 6 2022",
    // linesAdded: "",
    // linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "AWS Amazon",
    logo: publiclab,
    //repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "AWS Cloud Practitioner Essentials",
    link: "https://github.com/publiclab/plots2/issues/11115",
   // number: "#11115",
    date: "May 4 2022",
    // linesAdded: "",
    // linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "Udemy",
    logo: publiclab,
    //repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "Développez en Full Stack avec Spring Boot et Angular",
    link: "https://drive.google.com/file/d/1wueJOwNYYamD0Wz6YJfMmazxw0ExMCDe/view",
    //number: "#10986",
    date: "Apr 8 2022",
    // linesAdded: "",
    // linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "Udemy",
    logo: publiclab,
    //repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "Bien débuter avec Spring et Spring boot pour Java",
    link: "https://drive.google.com/file/d/1k6_cUbUw8BKYnMziEi5yaRnMjW-0wE13/view",
    //number: "#10985",
    date: "Apr 8 2022",
    // linesAdded: "",
    // linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "Amazon",
    logo: publiclab,
    //repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "Cloud for CEOs",
    link: "https://drive.google.com/file/d/11DTOctVEgCamEJUYdAy0kil7JVtWm-YF/view",
    //number: "#10985",
    date: "Apr 8 2022",
    // linesAdded: "",
    // linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "Google",
    logo: publiclab,
    //repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "AWS Cloud Technical Essentials",
    link: "hhttps://www.coursera.org/account/accomplishments/verify/G2XWGDHS5HDE",
    //number: "#10985",
    date: "Apr 8 2022",
    // linesAdded: "",
    // linesDeleted: "",
  },




];

export const projects = [
  {
    id: "project-1",
    title: "management of a supermarket",
    github: "",
    link: "",
    image: supermarket,
    content:
      "development of an Desktop App(management of a supermarket) with Java/JavaFx",
    stack: [
      {
        id: "icon-3",
        icon: SiJava,
        name: "Java"
      },

      {
        id: "icon-2",
        icon: SiJava,
        name: "JavaFX"
      },

      {
        id: "icon-4",
        icon: SiMysql,
        name: "MySQL"
      },


    ],
  },
  {
    id: "project-2",
    title: "Ecommerce App",
    github: "",
    link: "",
    image: ecomm,
    content:
      "Development of an Ecommerce App with framework Flutter",
    stack: [
      {
        id: "icon-4",
        icon: SiMysql,
        name: "MySQL"
      },
      {
        id: "icon-5",
        icon: FaDAndD,
        name: "Dart"
      },

      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },

    ],
  },

  {
    id: "project-8",
    title: "Portfolio version 1",
    // github: "https://github.com/mittal-parth/bank-landing-page-react",
    // link: "https://bank-landing-page-parth.netlify.app/",
    image: portfolio,
    content:
        "A Personal portfolio website with Html,Css and Javascript.",
    stack: [
      {
        id: "icon-2",
        icon: FaHtml5,
        name: "HTML5"
      },

      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS3"
      },

      {
        id: "icon-5",
        icon: SiJquery,
        name: "jQuery"
      },


    ],
  },
  {
    id: "project-7",
    title: "Portfolio version 2",
    // github: "https://github.com/mittal-parth/personal-portfolio",
    // link: "https://parthmittal.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },

  {
    id: "project-9",
    title: "Fire detection ",
    github: "https://github.com/mittal-parth/Freadom",
    link: "",
    image: fire,
    content:
      "A simple tool to scrape articles. Works even on websites that dont allow users to read the content without logging in.",
    stack: [
      {
        id: "icon-6",
        icon: FaPython,
        name: "Python with OpenCV"
      },
      {
        id: "icon-7",
        icon: FaBrain,
        name: "Machine Learning"
      }
,

    ],
  },
  // {
  //   id: "project-10",
  //   title: "GraphQL API",
  //   github: "https://github.com/mittal-parth/GSDC-NITK-CRUD-API",
  //   link: "",
  //   image: graphql,
  //   content:
  //     "A Django based CRUD API using GraphQL to manage employees in an organization.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiGraphql,
  //       name: "GraphQL"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiDjango,
  //       name: "Django"
  //     },
  //   ],
  // },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  // {
  //   organisation: "Google Developer Student Club, NITK",
  //   title: "Executive Member",
  //   duration: "December 2021 - Present",
  //   content: [
  //     {
  //       text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
  //       link: "https://incident.nitk.ac.in/",
  //     },
  //   ],
  //   logo: gdsc,
  // },
  // {
  //   organisation: "Genesis, NITK",
  //   title: "Executive Member",
  //   duration: "Sep 2021 - Present",
  //   content: [
  //     {
  //       text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
  //       link: "",
  //     },
  //     {
  //       text: "Won 7 inter-college solo dance competitions",
  //       link: "",
  //     },
  //   ],
  //   logo: genesis,
  // },
  //
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/driss-attoumi-1b2bb321b/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Attoumidriss2001",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "attoumi2001@gmail.com",
  },
  // {
  //   id: "social-media-4",
  //   icon: AiOutlineTwitter,
  //   link: "https://www.twitter.com/mittalparth_",
  // },
  // {
  //   id: "social-media-5",
  //   icon: AiFillInstagram,
  //   link: "https://www.instagram.com/mittalparth_",
  // },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const aboutMe = {
    name: "ATTOUMI DRISS",
    tagLine: "Greetings! I would like to extend an invitation to have a conversation with me. " +
        "I am genuinely interested in learning about your experiences, interests, and perspectives. " +
        "Please don't hesitate to reach out and connect with me. " +
        "I am open-minded and eager to get to know you better. Thank you for your time, and I hope to hear from you soon.",
    intro: "I am passionate about programming and I have a solid development experience with Java and Angular.\n" +
        "            I also have knowledge in cybersecurity, which allows me to design and develop safe and secure computer systems. In addition,\n" +
        "            I am able to work in a team and communicate effectively with my colleagues. In short, I am a dynamic and motivated person who likes\n" +
        "            to stay up to date with the latest technological trends."
}
