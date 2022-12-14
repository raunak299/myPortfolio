const navLinks = ["About", "Skills", "Projects"];
const name = "Raunak Raj";
const profession = "Frontend Web Developer";
const userGithub = "https://github.com/raunak299";
const userLinkedIn = "https://www.linkedin.com/in/raunak-raj-167b89134/";
const userTwitter = "";
const skills = [
  {
    category: "Frontend",
    skills: "HTML5, CSS3, React.js, Redux, TypeScript, JavaScript",
  },
  { category: "Languages", skills: "Javascript, c++, java , Data Structures & Algorithm" },
  // {
  //   category: "Automation",
  //   skills: "Node.js, MongoDB, Mongoose, Express, Oracle SQL",
  // },
];
const heroImg =
  "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
const aboutText = `
Hey There!👋 Glad you are here.😊
I am Raunak, a frontend  web developer from India.
I've worked on technologies like HTML5, CSS3, Javascript, React.js, Redux, TypeScript .
`;
const aboutImg =
  "https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const pageTitle = "</Raunak>";
const typeSpeed = 100; //in ms

const projects = [
  {
    img: 'https://ik.imagekit.io/8vw9ryi0k/Qkart.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671011895384',
    title: "Qkart",
    description:
      "A modern e-commerce website designed using React.js (using reducer hook and context API to manage state effectively).",
    skills: "React.js, Redux, Javascript , CSS3",
    github: "https://github.com/raunak299/Qkart",
    live: "https://qkart-demo.netlify.app/",
  },
  {
    img: "https://ik.imagekit.io/8vw9ryi0k/webQuiz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671011941167",
    title: "WebQuiz",
    description:"A modern Quiz WebApp built using React.js , Typescript",
    skills: "React.js, Redux, typeScript , CSS3",
    github: "https://github.com/raunak299/webQuiz",
    live: "https://webquiz-app.netlify.app/",
  },
  {
    img: "https://ik.imagekit.io/8vw9ryi0k/QBlog.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671011912032",
    title: "QBlog",
    description:
      "A modern Blog WebApp built using React.js and Firebase",
    skills: "React.js, Redux, Javascript , CSS3",
    github: "https://github.com/raunak299/embifi-assignment",
    live: "https://embifi-assignment.netlify.app/",
  },
  {
    img: "https://ik.imagekit.io/8vw9ryi0k/myPizza.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671011926775",
    title: "MyPizza",
    description:
      "MyPizza is a webApp where user can order custom pizza from wide range of option",
    skills: "Html, Css, JavaScript",
    github: "https://github.com/raunak299/myPizza",
    live: "https://my-pizzza.netlify.app/",
  },
 
];

export {
  navLinks,
  skills,
  aboutText,
  aboutImg,
  pageTitle,
  typeSpeed,
  name,
  profession,
  heroImg,
  projects,
  userGithub,
  userTwitter,
  userLinkedIn,
};
