/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-30891377-3",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Jesiel Sopzak",
  logo_name: "je.sopzak()",
  nickname: "@jesopzak",
  full_name: "Jesiel Sopzak Campos",
  subTitle:
    " a .Net Full Stack Developer, Unity Enthusiast 🔥. Always learning.",
  resumeLink: [
    {
      role: "Full Stack Developer",
      link:
        "https://docs.google.com/document/d/1Gt55IC6O3rvq0rfNTggYl3hTE0ZTMmXa/edit?usp=sharing&ouid=106141536438293278350&rtpof=true&sd=true",
    },
    {
      role: "Unity Developer",
      link:
        "https://docs.google.com/document/d/1GXb1eYL8BU7U9VhXUkHxd6A9FKBuHYcSTCfW-emqOs4/edit?usp=sharing",
    },
  ],
  mail: "mailto:je.sopzak@gmail.com",
};

const calendarInfo = {
  calendarHeader:
    "You can also check my availability and schedule a meeting through the button below.",
  calendarTitle: "Booking page",
  calendarLink: "https://calendly.com/jesopzak",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Sopzak/",
  linkedin: "https://www.linkedin.com/in/jesiel-sopzak",
  gmail: "je.sopzak@gmail.com",
  facebook: "https://www.facebook.com/je.sopzak/",
  instagram: "https://www.instagram.com/jesopzak/",
  youtube: "https://www.youtube.com/channel/UCltmGwbi67ESMSejVFIDuyg",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in C# or Node js",
        "⚡ Integration of third party services such as Firebase/ AWS",
        "⚡ Creating games and VR interfaces (I am learning VR) with Unity 3D",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          src: "",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          src: "",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          src: "",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        /*{
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },*/
        {
          skillName: ".Net C#",
          fontAwesomeClassname: "vscode-icons:file-type-csharp2",
          src: "",
          style: {
            color: "#631f74",
          },
        },

        {
          skillName: "ASP",
          fontAwesomeClassname: "vscode-icons:file-type-asp",
          src: "",
          style: {
            color: "#631f74",
          },
        },
        {
          skillName: ".Net",
          fontAwesomeClassname: "mdi:dot-net",
          src: "",
          style: {
            color: "#631f74",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          src: "",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          src: "",
          style: {
            color: "#339933",
          },
        },
        /*{
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },*/
        /*{
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },*/
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        /*{
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },*/
        /*{
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },*/
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        /*{
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },*/
        /*{
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },*/
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          src: "",
          style: {
            color: "#49494b",
          },
        },
        {
          skillName: "Git Hub",
          fontAwesomeClassname: "simple-icons:github",
          src: "",
          style: {
            color: "#E94E32",
          },
        },
        /*{
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },*/
      ],
    },
    {
      title: "Cloud Infra-Architecture And Database",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on cloud platforms",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MS SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#b13f33",
          },
        },
        {
          skillName: "Oracle pl SQL",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#4479A1",
          },
        },
        /*{
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },*/
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Federal University of State of Parana",
      subtitle: "Technologist in Information Systems",
      logo_path: "ufpr.png",
      alt_name: "UFPR",
      duration: "2006 - 2009",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, Object Oriented Programming, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
        "⚡ Developed a Business Intelligence at .Net based on online stores as a final project.",
      ],
      website_link: "https://www.ufpr.br/",
    },
  ],
};

const certifications = {
  certifications: [
    /*{
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },*/
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a System Analyst with 14 years of experience in developing new features and apps for the most diversified products and company by using variety of technologies like ASP.Net, C#, React, Node.js, Oracle, Sql Servers. I am looking for the opportunity to collaborate as a Full Stack Developer where I can use my skills to build the most high quality applications focusing on the company's needs and interests.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Systems Analyst",
          company: "CELEPAR",
          company_url: "https://www.celepar.pr.gov.br/",
          logo_path: "celepar.png",
          duration: "Oct 2016 - present",
          location: "Office / Work From Home",
          description:
            "The company CELEPAR is one of the most important public IT companies in Brazil, with more than 11 million indirect users in the state of Paraná.",
          tasksList: [
            "Develop and maintain the taxpayer financial registry of the State of Paraná using .Net, C#, ASP, HTML, Javascript, Oracle and SQL Server, delivering solutions used by millions of people in southern Brazil.",
            "Lead a small team with different skills with AGILE methodology and SCRUM in the last 4 years, of which the last was remotely.",
          ],
          color: "#0071C5",
        },
        {
          title: "Software Developer",
          company: "CELEPAR",
          company_url: "https://www.celepar.pr.gov.br/",
          logo_path: "celepar.png",
          duration: "Jan 2010 - 10/2016",
          location: "Office",
          description: "",
          tasksList: [
            "Created the web front-end in a legacy system with about 40 years, increasing the performance by 300%.",
            "Develop and maintain applications and microservices using Rest API in different technologies such as PHP, ASP Classic, VB and javascript.",
          ],
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Trainee English teacher",
          company: "Escola da Fluencia",
          company_url: "https://escoladafluencia.com.br/",
          logo_path: "escoladafluencia.png",
          duration: "Mar 2021 - Present",
          location: "Work from Home",
          description:
            "English teacher trainee, assisting and developing speak, listening, reading and writing in online classes by zoom. Helping adults to develop another language, opening doors to new opportunities and transforming lives through fluency in English.",
          tasksList: [],
          color: "#196acf",
        },
        {
          title: "Hackathon code mentor",
          company: "GENIUS.CONECTA",
          company_url: "https://geniuscon.com.br/",
          logo_path: "genius.svg",
          duration: "Set 2021",
          location: "Work From Home",
          tasksList: [],
          description:
            "Mentorship responsibilities were to help students plan the project and discuss ideas.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Portfolio",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create C# Backend Projects with MVC, ASP.Net and React Project. In my spare time I develop games in Unity and participate in Hackathons to test new technologies. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jesiel.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Resume Delivery",
      url: "https://github.com/Sopzak/ResumeDelivery",
      description:
        "A game about a character who needs to send my resume to a game studio in Halifax",
      languages: [
        {
          name: "C#",
          iconifyClass: "vscode-icons:file-type-csharp2",
        },
        {
          name: "Unity",
          iconifyClass: "simple-icons:unity",
        },
      ],
      source: ["Resume.gif"],
    },
    {
      id: "2",
      name: "Llamas's Game",
      url: "https://master.d15c5dgfiphued.amplifyapp.com/",
      description:
        "A game where you have to place as Llamas in the pen in less than 2 minutes. This game was made to run on the web.",
      languages: [
        {
          name: "C#",
          iconifyClass: "vscode-icons:file-type-csharp2",
        },
        {
          name: "Unity",
          iconifyClass: "simple-icons:unity",
        },
      ],
      source: ["llama.gif"],
    },
    {
      id: "1",
      name: "Cycle of the Extraordinary ",
      url: "https://github.com/Sopzak/ExtraordinaryCycle",
      description:
        "The cycle of the extraordinary is a concept of a calendar in cycles to focus on proposed goals.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
      source: ["ciclo.gif"],
    },
    {
      id: "3",
      name: "Spider Attack",
      url:
        "https://play.google.com/store/apps/details?id=com.Sopzak.FPSSpiderAttack",
      description:
        "An FPS game for android created in Unity. Available on Google Play Store.",
      languages: [
        {
          name: "C#",
          iconifyClass: "vscode-icons:file-type-csharp2",
        },
        {
          name: "Unity",
          iconifyClass: "simple-icons:unity",
        },
      ],
      source: ["FPS_Game.gif"],
    },
    {
      id: "5",
      name: "Campori Game",
      url:
        "https://play.google.com/store/apps/details?id=br.com.SopzakSoftware.PathfinderRum",
      description:
        "A 2D android game, made in Unity that was a hit with over 25k downloads (my first Unity project in 2014).",
      languages: [
        {
          name: "C#",
          iconifyClass: "vscode-icons:file-type-csharp2",
        },
        {
          name: "Unity",
          iconifyClass: "simple-icons:unity",
        },
      ],
      source: ["campori.gif"],
    },
  ],
};

export {
  settings,
  greeting,
  calendarInfo,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
