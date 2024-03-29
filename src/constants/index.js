import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  amideast,


driss_professionel_picture,

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

export const resumeLink = "https://drive.google.com/file/d/1d0ukovwwgjq4pIdOnd4NQSPAn_BRdJ7H/view";
export const repoLink = "";

export const callToAction = "";

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
    icon: amideast,
    title: "Amideast",
    degree: "High English level",
    duration: "December 2022 - May 2023",
    content1: " Amideast is an American nonprofit organization that works to build mutual understanding and cooperation between Americans and the peoples of the Middle East and North Africa, and to provide learning and training opportunities",
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
        "Interior Ministry ",
    logo: province,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        //title: "Web Lead",
        duration: "august 2022 ",
        content: [
          {
            text: "During my internship, I had the invaluable opportunity to enhance my professional skills through various" +
                " activities. One notable achievement was the creation of a desktop application dedicated to managing " +
                "internships. This hands-on experience allowed me to apply my programming skills and gain practical knowledge " +
                "in software development.\n" +
                "I am confident that the skills I acquired during this internship, including programming, project management, communication, " +
                "planning, and problem-solving, will be instrumental in shaping my future career trajectory.",
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
  // {
  //   organisation: "Internship, Urban Agency of Skhirate-Témara",
  //   logo: agtemera,
  //   link: "https://cdc.nitk.ac.in/",
  //   positions: [
  //     {
  //       // title: "Lead Developer",
  //       duration: "July 2022",
  //       content: [
  //         {
  //           text: "  this internship allowed  me to  know the  importance of security in society cannot be overstated, especially in the digital age. With the rise in cybercrime, securing personal and confidential information has become paramount",
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
    organisation: "Membre in EMI-CATRONIC club",
    logo: emicatronic,
    link: "https://cdc.nitk.ac.in/",
    positions: [
      {
       // title: "Lead Developer",
        duration: "Septembre 2022",
        content: [
          {
            text: "Active membership in the EMI Catronic club has been instrumental in cultivating essential skills that have enriched both my personal and professional life. Primarily, it has significantly enhanced my communication abilities, allowing me to effectively express ideas and thoughts.\n" +
                "\n" +
                "By actively participating in the club's activities, I have developed strong interpersonal skills, enabling me to build and maintain meaningful social connections. Through interactions with fellow members, I have learned the art of active listening, fostering a deeper understanding of others' perspectives and fostering a collaborative environment.",
            link: "",
          },

        ],
      },
    ],
  },
  {
    organisation: "Membre in IT Academi club",
    logo: cdc,
    link: "https://cdc.nitk.ac.in/",
    positions: [
      {
        //title: "Lead Developer",
        duration: "Septembre 2022",
        content: [
          {
            text: "During my academic journey, I had the privilege of being an active member of the IT Academy. This invaluable experience exposed me to a vibrant learning environment focused on various aspects of information technology. As a member, I immersed myself in a wide range of activities that greatly expanded my knowledge and skills in the field.\n" +
                "\n" +
                "At the IT Academy, I had the opportunity to participate in specialized training sessions and engaging workshops. These immersive experiences deepened my understanding of fundamental IT concepts and cutting-edge technologies. Through hands-on practice and interactive learning, I honed my technical proficiency and stayed up to date with the latest industry trends.",
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
    organisation: "Math content teacher",
    logo: math,
    link: "https://attoumidriss2001.github.io/Portfolio/",
    positions: [
      {
       // title: "Lead Developer",
        duration: "2020-2022",
        content: [
          {
            text: "With extensive experience as a math assistant, I have established myself as a proficient math expert. Throughout several years, I have had the privilege of assisting numerous students in comprehending and conquering challenging math problems, spanning from fundamental concepts to advanced topics.\n" +
                "\n" +
                "My expertise in teaching mathematics is deeply rooted, allowing me to create a dynamic and captivating learning atmosphere for students. By employing various techniques and resources, I ensure that the learning process is not only informative but also engaging and interactive." +
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
    status: "closed",
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
    organisation: "Amazon Web Services",
    logo: publiclab,
   // repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "AWS Knowledge: Cloud Essentials ",
    link: "https://www.credly.com/earner/earned/badge/3d559269-b58b-4169-9691-a792e7d940f8",
   // number: "#10681",
    date: "July 13 2023",
    // linesAdded: "86",
    // linesDeleted: "106",
  },

  {
    id: "os-2",
    organisation: "Amazon Web Services",
    logo: publiclab,
   // repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "AWS Knowledge: Serverless ",
    link: "https://www.credly.com/earner/earned/badge/9f4ff879-dbed-4c84-90e6-04ce63629759",
   // number: "#10681",
    date: "July 20 2023",
    // linesAdded: "86",
    // linesDeleted: "106",
  },
    {
    id: "os-2",
    organisation: "Amazon Web Services",
    logo: publiclab,
   // repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "AWS Knowledge: Architecting",
    link: "https://www.credly.com/earner/earned/badge/03c573bd-526d-48d6-9061-49cdb4d27122",
   // number: "#10681",
    date: "July 13 2023",
    // linesAdded: "86",
    // linesDeleted: "106",
  },
  {
    id: "os-2",
    organisation: "Amazon Web Services",
    logo: publiclab,
   // repo: "plots2",
    type: "pull-request",
    status: "closed",
    title: "AWS Knowledge: File Storage ",
    link: "https://www.credly.com/earner/earned/badge/2c81f38c-5fb5-4eaa-bca8-1da4fc66a3a2",
   // number: "#10681",
    date: "July 21 2023",
    // linesAdded: "86",
    // linesDeleted: "106",
  },

  {
    id: "os-3",
    organisation: "Google",
    logo: publiclab,
    //repo: "plots2",
    type: "pull-request",
    status: "closed",
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
    status: "closed",
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
  // {
  //   id: "os-6",
  //   organisation: "AWS Amazon",
  //   logo: publiclab,
  //   //repo: "plots2",
  //   type: "pull-request",
  //   status: "closed",
  //   title: "AWS Cloud Practitioner Essentials",
  //   link: "https://github.com/publiclab/plots2/issues/11115",
  //  // number: "#11115",
  //   date: "May 4 2022",
  //   // linesAdded: "",
  //   // linesDeleted: "",
  // },
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

  // {
  //   id: "os-10",
  //   organisation: "Google",
  //   logo: publiclab,
  //   //repo: "plots2",
  //   type: "pull-request",
  //   status: "closed",
  //   title: "AWS Cloud Technical Essentials",
  //   link: "hhttps://www.coursera.org/account/accomplishments/verify/G2XWGDHS5HDE",
  //   //number: "#10985",
  //   date: "Apr 8 2022",
  //   // linesAdded: "",
  //   // linesDeleted: "",
  // },




];

export const projects = [

  {
    id: "project-1",
    title: "Ecommerce Application",
    github: "",
    link: "",
    // image: ecomm,
    content:
      "This development project aims to create an e-commerce application using the Flutter framework and integrating it with Firebase. The application will offer a user-friendly interface for product navigation, cart management, and the payment process. Users will be able to sign up and log in through Firebase authentication, ensuring their data is securely stored. Simultaneously, the design aspect of the application will be crafted using the Figma graphic design tool, allowing for the creation of a modern and visually appealing interface. Figma designs will be utilized to maintain consistency between the concepts and the actual implementation of the application. Once developed, the application will be deployed on major mobile platforms for customer use. Regular updates and maintenance will be conducted to ensure optimal performance and an enhanced user experience. Figma will play a crucial role in facilitating collaboration between designers and developers",
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
    id: "project-2",
    title: "Online Store",
    github: "https://github.com/Attoumidriss2001/online_Shop_store_With_React",
    // link: "driss-portfolio.netlify.app/",
    // image: portfolio,
    content: "The project is an impressive e-commerce store built using React, Firebase, and Material UI. Leveraging React's interactive component-based architecture, Firebase's real-time database and user authentication capabilities, and Material UI's aesthetic and user-friendly design elements, the application offers a seamless and responsive user experience across various devices. Key features include intuitive navigation, product search, detailed product pages, a shopping cart, secure payment processing, and real-time inventory updates. The development process involved overcoming challenges, learning valuable lessons, and implementing robust security measures. Overall, the project showcases the developer's proficiency in modern web development and the successful creation of a practical and visually appealing online shopping platform.",
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
    id: "project-3",
    title: "Fire detection ",
    github: "https://github.com/Attoumidriss2001/projet-Detection-fire",
    // link: "",
    // image: fire,
    content:
      "The program I developed utilizes Python and image processing techniques to detect fire through a camera. By capturing the live video stream, the program goes through several steps, including image preprocessing, segmentation to isolate potential fire regions, classification using machine learning methods to determine the presence of fire, and finally issuing an alert upon detection. Despite challenges related to changing lighting conditions and false alarms, improvements like using more advanced neural networks could make the program even more effective. This technology finds applications in security, surveillance, and fire prevention in various contexts such as buildings, drones, and security systems.",
    stack: [
      {
        id: "icon-6",
        icon: FaPython,
        name: "Python with OpenCV"
      },
      
,

    ],
  },
  {
    id: "project-4",
    title: "Ecommerce website with EC2",
    github: "https://github.com/Attoumidriss2001/EC2_commands_for_website-creation_with_wordpress/tree/main/8c35a05f43635da4cbd06b47c0d91e93-5963d5ebf42e61f7361714296571430cb4423ec7",
    link: "https://github.com/Attoumidriss2001/EC2_commands_for_website-creation_with_wordpress/tree/main/8c35a05f43635da4cbd06b47c0d91e93-5963d5ebf42e61f7361714296571430cb4423ec7",
    // image: portfolio,
    content: "This project aims to create an e-commerce website using WordPress with the assistance of an EC2 instance on the AWS platform (Amazon Web Services). Firstly, I configured an EC2 instance to obtain a virtual server in the cloud. Then, I installed Apache, PHP, and MySQL on this instance to host and manage the website's data. For setting up the e-commerce site, I installed WordPress and added WooCommerce plugins for specific e-commerce functionalities. Additionally, I customized the site by selecting a suitable theme. Prior to deployment, I conducted comprehensive testing to ensure everything works correctly and the site is secure. Once the site was ready, I made it accessible to the public by associating a public IP address. ",
    stack: [
  

    ],
  },
    {
    id: "project-5",
    title: "AWS S3 Bucket and Website Configuration with Terraform",
    github: "https://github.com/Attoumidriss2001/AWS-S3-Bucket-and-Website-Configuration/tree/main/mys3StaticWebsite",
     link: "https://github.com/Attoumidriss2001/AWS-S3-Bucket-and-Website-Configuration/tree/main/mys3StaticWebsite",
    //image: portfolio,
   content: "Using Terraform, I created an AWS S3 bucket to store and serve the static content of my website. This bucket acts as a reliable and scalable storage solution for web assets. For the website content, I uploaded index.html and error.html files to the bucket. These files contain the main page content and an error page, respectively. They are publicly readable as well. With the help of Terraform, I configured the AWS S3 bucket to serve my website content correctly. The index.html file serves as the index document, and the error.html file acts as the error document when needed.",
    stack: [
  

    ],
  },
  {
    id: "project-6",
    title: "AWS Three Tier Web Architecture & implementation",
    github: "https://github.com/Attoumidriss2001/AWS_Three_Tier_Web-_Architecture",
     link: "https://github.com/Attoumidriss2001/AWS_Three_Tier_Web-_Architecture",
    //image: portfolio,
   content: "In this architecture, a public-facing Application Load Balancer forwards client traffic to our web tier EC2 instances. The web tier is running Nginx webservers that are configured to serve a React.js website and redirects our API calls to the application tier’s internal facing load balancer. The internal facing load balancer then forwards that traffic to the application tier, which is written in Node.js. The application tier manipulates data in an Aurora MySQL multi-AZ database and returns it to our web tier. Load balancing, health checks and autoscaling groups are created at each layer to maintain the availability of this architecture.",
    stack: [
  

    ],
  },



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
    link: "https://wa.me/+212676874434",
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
    intro: "As a software engineer with a deep interest in development and cloud computing, I am a dedicated" +
        " professional who combines technical expertise with a passion for creating innovative solutions. With a strong grasp " +
        "of software development principles and methodologies, I excel in designing, building, and maintaining robust" +
        " applications. My skills extend to the realm of cloud computing, where I leverage the power of distributed systems " +
        "to deliver scalable and flexible solutions. "
}
