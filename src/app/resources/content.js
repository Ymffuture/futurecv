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
          program not yet completed. Developed a strong foundation in analytical reasoning,
          quantitative analysis, and applied statistics.
        </>
      ),
    },
    {
      name: "Retail Customer Service Program",
      description: (
        <>
          Completed a <strong>Certificate in Retail Customer Service</strong>, focusing on 
          customer engagement, communication skills, and service excellence within 
          professional retail environments.
        </>
      ),
    },
    {
      name: "Melsoft Academy",
      description: (
        <>
          Studied <strong>Software Engineering</strong> — course not yet completed. 
          Acquired skills in <strong>HTML, CSS, JavaScript, React, PHP, and Python</strong> 
          with practical projects covering frontend and backend development.
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
      title: "React.js & Frontend Engineering",
      description: (
        <>
          Expert in building high-performance, responsive, and accessible user interfaces
          using <strong>React 18+</strong>, <strong>Redux Toolkit</strong>, 
          <strong> Context API</strong>, and <strong>React Query</strong>. 
          Skilled in implementing component-driven architecture, hooks, code-splitting, 
          lazy loading, and performance optimization with <strong>memo</strong> and 
          <strong>useCallback</strong>. 
          Able to design and prototype rapidly in <strong>Figma</strong> using <strong>Once UI</strong> and 
          <strong>TailwindCSS</strong>.
        </>
      ),
      images: [
        {
          src: "/images/projects/react-dashboard.jpg",
          alt: "React dashboard project",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/react-animation.jpg",
          alt: "React animation interface",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Next.js & Modern Web Architecture",
      description: (
        <>
          Experienced in building full-stack, server-rendered, and statically generated 
          applications using <strong>Next.js 14+</strong> with <strong>App Router</strong>, 
          <strong>Server Components</strong>, and <strong>API Routes</strong>. 
          Familiar with <strong>SSR</strong>, <strong>SSG</strong>, <strong>ISR</strong>, and 
          <strong>Edge Functions</strong> for high scalability. 
          Integrated with <strong>Supabase</strong>, <strong>MongoDB</strong>, and 
          <strong>Cloudinary</strong> for dynamic data-driven web apps.
        </>
      ),
      images: [
        {
          src: "/images/projects/next-auth.jpg",
          alt: "Next.js authentication app",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Backend Development (Node.js & Express)",
      description: (
        <>
          Proficient in building secure RESTful APIs using <strong>Express.js</strong> with 
          <strong>JWT authentication</strong>, <strong>OAuth (Google, Microsoft)</strong>, 
          <strong>rate limiting</strong>, and <strong>Winston logging</strong>. 
          Experienced with <strong>Mongoose</strong> and <strong>MongoDB Atlas</strong> for 
          data persistence, and <strong>Cloudinary</strong> for file uploads.
        </>
      ),
      images: [
        {
          src: "/images/projects/express-api.jpg",
          alt: "Express.js backend project",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Version Control & Collaboration",
      description: (
        <>
          Advanced knowledge of <strong>Git</strong> and <strong>GitHub</strong> workflows 
          including feature branching, code reviews, pull requests, and CI/CD automation 
          with <strong>Vercel</strong> and <strong>GitHub Actions</strong>.
        </>
      ),
      images: [
        {
          src: "/images/projects/git-collaboration.jpg",
          alt: "GitHub workflow collaboration",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "UI/UX & Design Systems",
      description: (
        <>
          Skilled in <strong>TailwindCSS</strong>, <strong>Ant Design</strong>, 
          <strong>Material UI</strong>, and <strong>Framer Motion</strong> for 
          creating beautiful, animated interfaces. 
          Emphasizes accessibility, typography, and consistent design language 
          across applications.
        </>
      ),
      images: [
        {
          src: "/images/projects/ui-ux.jpg",
          alt: "UI/UX project with Tailwind and Framer Motion",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Other Tools & Technologies",
      description: (
        <>
          • <strong>Languages:</strong> JavaScript (ES6+), TypeScript, PHP, Python  
          <br />
          • <strong>Databases:</strong> MongoDB, MySQL, Supabase  
          <br />
          • <strong>Deployment:</strong> Vercel, Render, Netlify  
          <br />
          • <strong>Testing:</strong> Jest, React Testing Library, Cypress  
          <br />
          • <strong>Soft Skills:</strong> Problem-solving, teamwork, agile collaboration
        </>
      ),
      images: [
        {
          src: "/images/projects/dev-tools.jpg",
          alt: "Developer tools overview",
          width: 16,
          height: 9,
        },
      ],
    },
  ],
},
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





