import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  techm,
  cipherbyte,
  selfout,
  weighing,
  vmouse,
  threejs,
  eduquity,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: " Android Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: " IoT",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Tech Mahindra",
    icon: techm,
    iconBg: "#383E56",
    date: "September 2024 - Present ",
    points: [
      "Developing and maintaining web applications using ASP.Net and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Application Developer Intern",
    company_name: "Eduquity Career Technologies",
    icon: eduquity,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Assisted in the development and enhancement of Android applications, ensuring optimized performance and user experience.",
      "Worked closely with senior developers to design UI components and implement new features based on business requirements.",
      "Participated in debugging and troubleshooting issues in the application, identifying performance bottlenecks and optimizing code efficiency.",
      "Performed unit testing and collaborated with QA teams to conduct thorough application testing, ensuring seamless functionality across various Android devices.",
      "Engaged in regular code reviews, learning best practices for scalable and maintainable code development.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Cipherbyte Technologies",
    icon: cipherbyte,
    iconBg: "#383E56",
    date: "Jun 2024",
    points: [
      "Developed and maintained interactive and responsive web applications using modern web technologies such as HTML, CSS, JavaScript, and React.js.",
      "Worked remotely in an agile development environment, coordinating with a distributed team through virtual meetings and collaboration tools.",
      "Integrated APIs and third-party services to enhance application functionality and improve user experience.",
      "Optimized web applications for performance and ensured cross-browser compatibility.",
      "Collaborated with designers and backend developers to ensure seamless integration of UI components with server-side logic.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Self-Checkout System",
    description:
      "A self-checkout system in shops using barcode scanning, is an automated system that allow customers to scan the barcode of products and pay for their purchases without the assistance of a cashier. This can improve the checkout experience, as it can reduce the waiting time in line, and provide a more efficient way to purchase items.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "kotlin",
        color: "pink-text-gradient",
      },
    ],
    image: selfout,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart Weighing System  ",
    description:
      "An intelligent weighing machine featuring advanced weight sensors and AI-driven object recognition technology. This system enables instantaneous identification of items placed on the counter, automatic addition to the virtual cart, and real-time generation of bills, enhancing efficiency and convenience in the shopping process.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "IoT",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],
    image: weighing,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hover Helper",
    description:
      "Developed an AI-powered virtual mouse system using OpenCV and MediaPipe, enabling users to control the mouse pointer through hand gestures. Implemented gesture recognition for cursor movement, clicking, and scrolling. Enhanced user experience with real-time tracking and smooth motion handling.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: vmouse,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
