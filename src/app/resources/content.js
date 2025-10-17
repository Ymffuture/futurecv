import { Logo } from "@/once-ui/components";
import { motion } from "framer-motion";

const person = {
  firstName: "Kgomotso",
  lastName: "Nkosi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "software Engineer and Tutor",
  avatar: "/images/avatar.jpg",
  email: "futurekgomotso@gmail.com",
  location: "Africa/Johannesburg", // valid IANA time zone
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
        company: "Department of South Africa statistics",
        timeframe: "2022",
        role: "Field Worker",
        achievements: [<>Clean and open data capturing using the latest technology.</>],
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
        company: "Department of Education",
        timeframe: "2018 - 2021",
        role: "Tutor",
        achievements: [<>Managed school data and maintained student performance records.</>],
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
            Studied <strong>Higher Certificate in Mathematics and Statistics</strong> — focused on
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
            Completed <strong>Certificate in Retail Customer Service</strong> — gaining skills in
            communication, data handling, and customer relations.
          </>
        ),
      },
    ],
  },

  // ✅ UPDATED TECHNICAL SECTION WITH INLINE STYLES + ANIMATION
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        level: 90,
        description: (
          <>
            Expertise in <strong>React.js, Next.js, HTML, CSS, JavaScript (ES6+)</strong>, and{" "}
            <strong>TailwindCSS</strong>. Builds fast, accessible, and SEO-optimized UIs with API
            integration and state management (Redux Toolkit, Context API).
          </>
        ),
      },
      {
        title: "Backend Development",
        level: 85,
        description: (
          <>
            Skilled in <strong>Node.js, Express.js, MongoDB, and PHP</strong> for creating robust
            REST APIs, authentication systems (JWT, OAuth), and scalable backend services.
          </>
        ),
      },
      {
        title: "Programming & Tools",
        level: 80,
        description: (
          <>
            Proficient with <strong>Python</strong> for scripting and automation. Uses{" "}
            <strong>Git, GitHub, VS Code, Cloudinary</strong> and follows best CI/CD workflows.
          </>
        ),
      },
      {
        title: "UI/UX Design",
        level: 75,
        description: (
          <>
            Designs and prototypes in <strong>Figma</strong> — transforming creative concepts into
            elegant, responsive interfaces.
          </>
        ),
      },
    ],
  },
};

// 🎨 Inline Animated Component for Rendering Technical Skills
export const TechnicalSkills = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#0f172a",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    color: "white",
    transition: "transform 0.3s ease",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#38bdf8",
  };

  const barContainerStyle = {
    height: "8px",
    backgroundColor: "#1e293b",
    borderRadius: "4px",
    overflow: "hidden",
    marginTop: "12px",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#cbd5e1",
    marginTop: "8px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      {about.technical.skills.map((skill, index) => (
        <motion.div
          key={index}
          style={cardStyle}
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div style={titleStyle}>{skill.title}</div>
          <div style={descriptionStyle}>{skill.description}</div>

          <div style={barContainerStyle}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #38bdf8, #3b82f6)",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
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
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, newsletter, social, home, about, blog, work, gallery };

