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
  languages: ["English", "SiSwati", "IsiZulu"],
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
          <>Clean and open data capturing using the latest technology.</>,
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
        achievements: [<>Managing school data. For all students marks.</>],
        images: [],
      },
    ],
  },

  // ✅ UPDATED STUDIES SECTION
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of South Africa (UNISA)",
        description: (
          <>
            Studied <strong>Higher Certificate in Mathematics and Statistics</strong> – focused on
            analytical thinking, probability, and data interpretation.
          </>
        ),
      },
      {
        name: "Melsoft Academy",
        description: (
          <>
            Studied <strong>Software Engineering</strong>, specializing in full-stack web
            development using <strong>HTML, CSS, JavaScript, React, Node.js, PHP, and Python</strong>.
          </>
        ),
      },
      {
        name: "Retail Customer Service",
        description: (
          <>
            Completed <strong>Certificate in Retail Customer Service</strong> – learning effective
            communication, customer handling, and professionalism in retail.
          </>
        ),
      },
    ],
  },

  // ✅ UPDATED TECHNICAL SECTION
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Proficient in <strong>HTML, CSS, JavaScript (ES6+), React.js, Next.js</strong> and
            <strong> TailwindCSS</strong> to build fast, accessible, and responsive UIs. Skilled at
            integrating APIs and managing state with Redux Toolkit and Context API.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Frontend projects",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend Development",
        description: (
          <>
            Experienced with <strong>Node.js, Express.js, MongoDB, and PHP</strong> for scalable
            backend systems. Builds RESTful APIs, authentication (JWT, OAuth), and secure data
            handling pipelines.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Backend architecture",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Programming & Tools",
        description: (
          <>
            Strong in <strong>Python</strong> for automation, data analysis, and problem solving.
            Familiar with <strong>Git, GitHub, VS Code, and Cloudinary</strong> for development
            workflow and CI/CD pipelines.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Tools & workflow",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "UI/UX & Prototyping",
        description: (
          <>
            Designs clean, user-centered interfaces using <strong>Figma</strong> and integrates them
            seamlessly into React or Next.js projects. Advocates for accessibility and performance.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-05.jpg",
            alt: "UI/UX design",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
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
export { person, newsletter, social, home, about, blog, work, gallery };

