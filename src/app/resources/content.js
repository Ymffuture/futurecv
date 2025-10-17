import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kgomotso",
  lastName: "Nkosi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "software Engineer and Tutor",
  avatar: "/images/avatar.jpg",
  email: "futurekgomotso@gmail.com",
  location: "Africa/Johannesburg", // Updated to valid IANA time zone
  languages: ["English", "SiSwati", "IsiZulu" ],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ymffuture",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/kgomotsonkosi-l",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://threads.com/futureymf",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent projects: <strong className="ml-4">Once UI portfolio & famacloud</strong></>,
    href: "/about",
  },
  subline: (
    <>
      I'm {person.firstName}, a software engineer at{" "}
      <b>Famacloud</b>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ymffuture",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kgomotso is a Johannesburg-based software engineer with a passion for transforming complex
        challenges into simple, elegant design solutions. His work spans digital interfaces,
        interactive experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Department of South Africa statistics ",
        timeframe: "2022",
        role: "field worker",
        achievements: [
          <>
          Clean and open data capturing using the latest technology .
          </>,
          
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Department of education ",
        timeframe: "2018 - 2021",
        role: "Tutoring",
        achievements: [
          <>
            Managing school data. For all students marks. 
          </>,
          
        ],
        images: [],
      },
    ],
  },
      
    studies: {
    display: true,
    title: "Education & Studies",
    institutions: [
      {
        name: "University of South Africa (UNISA)",
        description: (
          <>
            Pursued a <strong>Higher Certificate in Mathematics and Statistics</strong> — 
            not yet completed. Built strong analytical skills, data-driven reasoning,
            and problem-solving abilities applied to software algorithms and performance analysis.
          </>
        ),
      },
      {
        name: "Melsoft Academy",
        description: (
          <>
            Studied <strong>Software Engineering</strong> — course not yet completed.
            Gained hands-on experience in full-stack web development using the 
            <strong> MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>,
            REST APIs, Git, and deployment best practices.
          </>
        ),
      },
      {
        name: "Retail Customer Service Training Program",
        description: (
          <>
            Completed a <strong>Certificate in Retail Customer Service</strong>, 
            emphasizing communication, teamwork, and professionalism in client-facing roles. 
            Developed a foundation for customer-oriented design and user experience understanding.
          </>
        ),
      },
      {
        name: "Continuous Learning & Certifications",
        description: (
          <>
            Actively expanding knowledge through online platforms (FreeCodeCamp, Coursera, YouTube)
            in <strong>TypeScript, Next.js 14, React 18+, Redux Toolkit, TailwindCSS, and Cloud Services</strong>.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Skilled in <strong>React.js (Hooks, Context API, Redux Toolkit)</strong>,
            <strong> Next.js 14 (App Router, Server Components, SSR/SSG)</strong>, 
            <strong>TailwindCSS</strong>, and <strong>Framer Motion</strong> for smooth UI/UX animations.
            Experienced in creating high-performance, responsive, and accessible UIs.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-frontend.jpg",
            alt: "Frontend Project Example",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend Development",
        description: (
          <>
            Proficient with <strong>Node.js, Express.js, and MongoDB</strong> for building scalable REST APIs.
            Experience with <strong>authentication systems</strong> (JWT, OAuth, Google & Microsoft login),
            <strong>role-based access control</strong>, and secure backend practices.
          </>
        ),
        images: [
          {
            src: "/images/projects/backend-api.jpg",
            alt: "Backend Development Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "UI/UX Design & Prototyping",
        description: (
          <>
            Experienced in <strong>Figma</strong> for wireframing and UI prototyping. 
            Adept at translating designs into production-ready React components 
            using <strong>Once UI</strong> and modern design systems.
          </>
        ),
        images: [
          {
            src: "/images/projects/figma-prototype.jpg",
            alt: "Figma UI Prototype",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DevOps & Deployment",
        description: (
          <>
            Knowledge of <strong>Git & GitHub</strong> for version control, 
            and deployment using <strong>Vercel, Render, and Cloudinary</strong> integrations.
            Comfortable with CI/CD pipelines and environment configuration.
          </>
        ),
        images: [
          {
            src: "/images/projects/devops-deploy.jpg",
            alt: "DevOps Workflow",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Testing & Debugging",
        description: (
          <>
            Experienced with <strong>Jest</strong>, <strong>React Testing Library</strong>, 
            and <strong>Cypress</strong> for unit, integration, and end-to-end testing.
            Familiar with Chrome DevTools and React Profiler for performance optimization.
          </>
        ),
        images: [
          {
            src: "/images/projects/testing.jpg",
            alt: "Testing and Debugging",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Soft Skills",
        description: (
          <>
            Strong communication, teaching, and problem-solving abilities. 
            Experience tutoring students in <strong>mathematics, science, and coding</strong>,
            fostering clear understanding of complex topics.
          </>
        ),
        images: [
          {
            src: "/images/projects/softskills.jpg",
            alt: "Tutoring & Mentorship",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  };

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

// Export the structured objects
export {
  person,
  newsletter,
  social,
  home,
  about,
  blog,
  work,
  gallery,
};

