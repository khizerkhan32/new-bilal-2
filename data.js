import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { CiGrid42 } from "react-icons/ci";
import { MdPostAdd } from "react-icons/md";

export const SERVICES = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
  },
  {
    icon: CiGrid42,
    title: "Product Design",
  },
  {
    icon: MdPostAdd,
    title: "Digital Marketing",
  },
];

export const EXPERIENCE = [
  {
    range: "2024 Jan - Present",
    title: "Lead Software Engineer",
    company: "Microsoft",
    location: "Seattle, USA",
    description:
      "At Microsoft's Seattle headquarters, I oversee critical software development, providing strategic direction and mentorship. Foster a culture of collaboration and innovation, delivering impactful solutions for global users.",
  },
  {
    range: "2022 Jun - 2023 Dec",
    title: "Senior Software Engineer",
    company: "Google",
    location: "San Francisco, USA",
    description:
      "Led innovative software projects at Google's San Francisco office, driving technological advancements. Provided technical leadership, mentored team members, and ensured adherence to best practices for scalable solutions.",
  },
  {
    range: "2021 Apr - 2022 May",
    title: "Software Engineer",
    company: "Amazon",
    location: "San Francisco, USA",
    description:
      "As a Software Engineer at Amazon's San Francisco office, I developed scalable solutions, collaborated with teams, and ensured high-quality code. Contributed to enhancing Amazon's e-commerce platform.",
  },
  {
    range: "2019 Oct - 2021 Jan",
    title: "Software Development Intern",
    company: "IBM",
    location: "New York City, USA",
    description:
      "During my tenure as a Software Development Intern at IBM's New York City office, I collaborated on various projects, gaining hands-on experience in software development. Assisted in designing and implementing software solutions, contributing to IBM's technological advancements.",
  },
];

export const PROJECTS = [
  {
    title: "Ecommerce Dashboard",
    image: "/src/assets/project (1).jpeg",
    description:
      "The Ecommerce Dashboard project involved creating a user-friendly interface to visualize sales data, track inventory, and analyze customer behavior. Utilized modern design principles and interactive charts to provide actionable insights for e-commerce businesses.",
    techStack: ["React", "JavaScript", "Chart.js", "Bootstrap", "Node.js"],
  },
  {
    title: "Car Rental",
    image: "/src/assets/project (2).jpeg",
    description:
      "The Car Rental project aimed to streamline the process of renting vehicles by developing a comprehensive online platform. Implemented features such as vehicle search, booking management, and payment integration to enhance the user experience and optimize operations.",
    techStack: ["Angular", "TypeScript", "MongoDB", "Express.js", "Bootstrap"],
  },
  {
    title: "Sales Dashboard",
    image: "/src/assets/project (4).jpeg",
    description:
      "The Sales Dashboard project focused on providing real-time insights into sales performance and trends for businesses. Integrated data visualization tools and custom widgets to empower decision-makers with actionable analytics and facilitate data-driven strategies.",
    techStack: ["Vue.js", "JavaScript", "D3.js", "Tailwind CSS", "Firebase"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Lester James",
    position: "CEO of XYZ Company",
    testimonial:
      "Working with John has been a game-changer for our company. Their expertise in software development and dedication to excellence have significantly contributed to the success of our projects. Their ability to understand our requirements and deliver high-quality solutions on time has been impressive.",
    image: "/src/assets/person1.jpeg",
  },
  {
    name: "Jane Smith",
    position: "CTO of ABC Corporation",
    testimonial:
      "John is a highly skilled and reliable software engineer. Their innovative approach to problem-solving and commitment to delivering top-notch results have made them an invaluable asset to our team. Their professionalism and attention to detail set them apart, and I would highly recommend their services to anyone.",
    image: "/src/assets/person2.jpeg",
  },
  {
    name: "David Johnson",
    position: "Project Manager at Corp",
    testimonial:
      "I have had the pleasure of collaborating with John on several projects, and each time, they have exceeded our expectations. Their technical proficiency, proactive communication, and ability to adapt to changing requirements have been instrumental in the success of our endeavors. I look forward to continuing our partnership in the future.",
    image: "/src/assets/person3.jpeg",
  },
];
