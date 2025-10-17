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
    title: "Studies",
    institutions: [
      {
        name: "UNISA",
        description: <> Not Completed Higher Certificate in Mathematics and Statistics.</>,
      },
      {
        name: "Melsoft Academy",
        description: <>Studied Software Engineering.(Not completed) </>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next-gen apps with Next.js + Once UI + Supabase. For other projects </>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
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



