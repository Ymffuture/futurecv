
const baseURL = "https://futurecv.vercel.app";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

// Fonts
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const primaryFont = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
  code: monoFont,
};

// === STYLE ===
// Lucky Colors: Blue (#1E90FF), Gold (#FFD700), Green (#32CD32)
const style = {
  theme: "dark",
  neutral: "gray",
  brand: "blue",       // Maps to your primary #1E90FF
  accent: "yellow",    // Maps to your gold #FFD700
  solid: "contrast",
  solidStyle: "plastic", // Gives depth and a modern shine
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "105",        // Slight upscale for smooth motion/hover
};

// === EFFECTS ===
const effects = {
  mask: {
    cursor: true,
    x: 50,
    y: 0,
    radius: 120, // Slightly larger radius for a sleek spotlight
  },
  gradient: {
    display: true,
    opacity: 85,
    x: 50,
    y: 50,
    width: 100,
    height: 80,
    tilt: 20,
    colorStart: "#1E90FF",  // Blue
    colorEnd: "#32CD32",    // Green
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "#FFD700", // Gold dots subtly in the background
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

// === DISPLAY ===
const display = {
  location: true,
  time: true,
  themeSwitcher: true,
};

// === MAILCHIMP ===
const mailchimp = {
  action: "https://app.us3.list-manage.com/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "#FFD700", // Gold highlight
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "#1E90FF", // Blue dots
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

export {
  routes,
  protectedRoutes,
  effects,
  style,
  display,
  mailchimp,
  baseURL,
  font,
};
