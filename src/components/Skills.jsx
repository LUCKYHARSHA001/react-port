import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const JavaIcon = () => (
  <svg viewBox="0 0 380 380" fill="currentColor" className="w-full h-full">
    <path d="M183.03 196.23c-38.23 11.34-66.16 14.57-92.5 1.48c-3.62-1.8-6.9-1.67-9.83 0.42c-2.94 2.09-4.03 4.9-3.26 8.43c1.12 5.15 5.4 8.82 12.85 11c34.35 10.04 75.4 6.42 123.12-10.86c17.97-6.51 25.07-6.55 21.27-0.14c-4.2 7.08-21.7 16.05-52.48 26.9c-29.9 10.53-62.78 13.95-98.6 10.25c-7.9-0.82-13.16 1.78-15.78 7.8c-2.62 6.02 0.08 11.48 8.1 16.36c20.57 12.52 52.12 17.38 94.64 14.58c41.4-2.74 77.12-13.75 107.14-33.05c8.58-5.52 11.26-10.33 8.05-14.43c-4.58-5.84-11.97-7.2-22.16-4.08c-25.98 7.95-54.17 1.08-84.56-20.6c-10.14-7.23-6.94-13.72 9.6-19.46c32.1-11.14 59.04-14.28 80.84-9.43c5.2 1.16 8.28 0.22 9.24-2.83c1.4-4.44-1.36-8.16-8.27-11.15c-16.26-7.02-40.6-8.88-73.02-5.57c-10.74 1.1-15.6 5.9-14.57 14.38zM209.64 140.24c-25.67-8.75-54.44-4.6-86.3 12.44c-6.23 3.33-6.37 6.3-0.44 8.9c6.18 2.72 11.63 1.8 16.35-2.75c21.5-20.73 48.92-29.4 82.25-26.03c9.34 0.94 14.7-1.76 16.07-8.08c0.98-4.48-1.38-8.2-7.08-11.15c-6.5-3.37-13.46-5.6-20.86-6.68zM163.35 59.67c16.26 4.94 26.88 13.38 31.88 25.32c4.07 9.73 3.62 17.7-1.35 23.92c-4.97 6.22-12 6.6-21.1 1.15c-18.05-10.84-27.88-22.82-29.48-35.93c-0.98-8.04 2.17-12.96 9.44-14.77c3.4-0.84 7.1-0.74 10.6 0.3zM195.2 0c-14.46 1.4-23.65 7.87-27.55 19.4c-2.26 6.68-0.5 11.9 5.28 15.66c13.15 8.55 26.27 11.85 39.36 9.9c13.08-1.95 20.48-9.06 22.18-21.34c1.7-12.28-8.36-19.54-30.16-21.77c-3.15-0.32-6.2-0.95-9.1-1.85zM358.5 275.53c-16.86-1.97-28.26 1.55-34.2 10.56c-4.94 7.5-4.18 13.92 2.28 19.26c14.5 12 37.9 13.18 70.18 3.54c8.07-2.4 11.36-6.06 9.86-10.96c-1.5-4.9-7.33-7.48-17.5-7.73c-8.26-0.2-18.45 2.7-30.58 8.7c-9.98 4.92-16.1 4.72-18.35-0.6c-2.25-5.3 1.26-10.48 10.53-15.53c11.33-6.16 24.52-8.85 39.57-8.05c15.05 0.8 24.27 4.94 27.66 12.42c2.53 5.58 0.88 10.6-4.96 15.06c-11.13 8.52-25.86 12.94-44.2 13.26c-33.2 0.57-60.04-6.68-80.52-21.74c-26.2-19.26-43.8-48.95-52.8-89.06c-1.12-5-0.4-8.83 2.16-11.5c2.56-2.66 6.54-3.44 11.94-2.33c8.67 1.78 13.85 6.5 15.53 14.17c7.98 36.3 23.22 63.04 45.72 80.2c18.78 14.33 43.53 21.16 74.25 20.5c17.97-0.4 30.9-3.7 38.78-9.93c4.2-3.32 5.58-7.07 4.13-11.25c-3.3-9.54-16.23-15.18-38.77-16.92c-10.33-0.8-21.52 0.1-33.56 2.7z" />
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path d="M0 0h100v100H0z" fill="transparent" />
    <path fill="currentColor" d="M0 0h100v100H0z" />
    <path
      fill="#0B0B15"
      d="M20 90 h20 v-40 h15 v-10 h-35 z M60 90 h30 v-10 h-20 v-10 h20 v-10 h-30 z"
      transform="translate(5, -5)"
    />
  </svg>
);
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 256 254" fill="currentColor" className="w-full h-full">
    <path d="M126.916.004c-26.506-.06-50.746 11.254-57.23 34.146l-1.288 19.47h61.246c3.06 0 9.863 2.046 9.863 9.86v13.318h-69.6c-27.614 0-48.325 15.953-49.715 38.447l-.164 2.715c.383 24.348 19.172 40.223 47.438 41.348l2.316.054h28.797v-12.27c0-18.39 15.562-32.886 34.132-32.886h22.102c18.57 0 21.375-16.21 21.375-23.39V49.227c0-17.668-15.457-29.06-33.754-38.277-10.79-5.434-15.098-10.91-15.516-10.946zm18.57 13.766c4.738 0 8.574 3.836 8.574 8.574 0 4.735-3.836 8.57-8.574 8.57-4.735 0-8.575-3.835-8.575-8.57 0-4.738 3.84-8.574 8.574-8.574z" />
    <path d="M128.613 253.332c26.504.055 50.746-11.254 57.227-34.145l1.292-19.473h-61.25c-3.06 0-9.86-2.043-9.86-9.855v-13.32h69.602c27.613 0 48.324-15.953 49.715-38.445l.16-2.715c-.38-24.348-19.17-40.223-47.433-41.348l-2.32-.054h-28.793v12.27c0 18.39-15.563 32.886-34.133 32.886h-22.102c-18.57 0-21.375 16.21-21.375 23.39v41.59c0 17.668 15.457 29.06 33.754 38.277 10.79 5.438 15.098 10.91 15.516 10.946zm-18.574-13.766c-4.735 0-8.57-3.836-8.57-8.574 0-4.735 3.835-8.57 8.57-8.57 4.74 0 8.575 3.835 8.575 8.57 0 4.738-3.835 8.574-8.574 8.574z" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path
      d="M50 8L90 30V70L50 92L10 70V30L50 8Z"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M50 20 L80 37 V63 L50 80 L20 63 V37 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinejoin="round"
    />
    <path
      d="M50 20 V50 L80 37"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const NumpyIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path d="M10 10h35v35h-35z" fill="currentColor" />
    <path d="M55 10h35v35h-35z" fill="currentColor" opacity="0.8" />
    <path d="M10 55h35v35h-35z" fill="currentColor" opacity="0.8" />
    <path d="M55 55h35v35h-35z" fill="currentColor" />
  </svg>
);

const PandasIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <rect x="15" y="10" width="15" height="60" fill="currentColor" />
    <rect
      x="40"
      y="25"
      width="15"
      height="65"
      fill="currentColor"
      opacity="0.8"
    />
    <rect
      x="65"
      y="15"
      width="15"
      height="50"
      fill="currentColor"
      opacity="0.6"
    />
  </svg>
);

const TensorFlowIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path
      d="M50 95L90 75V25L50 5L10 25V75L50 95Z"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M48 15 L70 25 L70 60"
      stroke="currentColor"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M52 15 L30 25 L30 45 L50 55"
      stroke="currentColor"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M50 55 L50 85"
      stroke="currentColor"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PyTorchIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path
      d="M50 10 Q20 50 20 70 A30 30 0 0 0 80 70 Q80 50 50 10Z"
      fill="currentColor"
      opacity="0.8"
    />
    <circle cx="50" cy="70" r="10" fill="#0B0B15" />
  </svg>
);

const ScikitIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <circle cx="30" cy="50" r="20" fill="currentColor" opacity="0.8" />
    <circle cx="70" cy="50" r="20" fill="currentColor" opacity="0.8" />
    <path d="M30 50 L70 50" stroke="currentColor" strokeWidth="5" />
  </svg>
);

const AwsIcon = () => (
  <svg viewBox="0 0 100 60" fill="currentColor" className="w-full h-full">
    <path d="M18.8 8.3c0 9.1 5.6 13.2 12.5 13.2 3.6 0 6.4-1.1 8.6-3.3v2.5h6.4V.1h-6.5v3c-2.4-2.1-5.2-3.5-9-3.5-7.5.1-12 4.8-12 8.7zm19.9-.1c0 4.8-3.3 7.7-7.3 7.7-4.3 0-7.3-3.3-7.3-8.1 0-4.3 3-7.9 7.4-7.9 3.9 0 7.2 3.2 7.2 8.3zM56.6 13l3.9-12.9h-7l-2.8 10.8-2.8-10.8h-6.8L45 13l-2.3 8h6.8l1.1-5.1 1.1 5.1h6.8l-1.9-8zM70.4 16.9c3.2 0 4.3-1.5 4.3-3.6 0-2.6-2.4-3.5-5.8-3.9-3.2-.4-4.1-1.1-4.1-2.4 0-1.6 1.4-2.4 3.8-2.4 2.1 0 4.3.7 5.9 1.6l1.6-4.4c-2.1-1.2-4.9-2.1-7.7-2.1-6.2 0-9.8 3-9.8 7.8 0 3.1 2.3 4.6 6.8 5.1 2.4.3 3.3 1 3.3 2.1 0 1.7-2 2.5-4.7 2.5-2.6 0-5.3-.9-7.3-2.3l-1.8 4.6c2.6 1.6 6.2 2.6 9.6 2.6 6.1 0 10-3.1 10-8.3l-4.1 3.1z" />
    <path d="M13.6 34.5C5.9 38 1.2 43.3 0 44.7l4.1 2.8c.4-.5 4.6-5.2 11.2-8 7.8-3.3 17.2-2.4 22.8 2.1l4.8-5.3c-7.5-6.1-19.8-7.2-29.3-1.8zM82.6 30.9c-1.3 1-2.9.6-3.9-.6-.9-1.3-.6-3.1.6-4.1l10.5-8.2c1.3-.9 3-.6 3.9.6.9 1.3.6 3.1-.6 4.1L82.6 30.9z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" fill="none" className="w-full h-full">
    <path
      fill="currentColor"
      d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
      opacity="0.5"
    />
    <path
      fill="currentColor"
      d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z"
      opacity="0.6"
    />
    <path
      fill="currentColor"
      d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"
      opacity="0.7"
    />
    <path
      fill="currentColor"
      d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
      opacity="0.8"
    />
    <path
      fill="currentColor"
      d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
      opacity="0.9"
    />
  </svg>
);

const MatplotlibIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path
      d="M15 85h70M15 85V15"
      stroke="currentColor"
      strokeWidth="8"
      fill="none"
    />
    <path
      d="M15 85c10-10 20-50 35-30s20 20 35-10"
      stroke="currentColor"
      strokeWidth="8"
      fill="none"
      opacity="0.7"
    />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path d="M92.5 46.3L53.9 7.7c-2.9-2.9-7.7-2.9-10.6 0L31.6 19.4l19.2 19.2c3.3-.8 6.9.4 9.3 2.9 3.4 3.4 3.4 8.9 0 12.3-3.4 3.4-8.9 3.4-12.3 0-2.5-2.5-3.6-6.1-2.8-9.4L26.1 25.6l-18.4 18.4c-2.9 2.9-2.9 7.7 0 10.6l38.6 38.6c2.9 2.9 7.7 2.9 10.6 0l35.6-35.6c2.9-2.9 2.9-7.7 0-10.6zM44.8 74.3c-3.4 3.4-8.9 3.4-12.3 0-3.4-3.4-3.4-8.9 0-12.3 2.5-2.5 6.1-3.6 9.4-2.8l10 10c-.8 3.3.3 7 2.9 9.6v-4.5z" />
  </svg>
);

const HtmlIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path d="M16 91L8.5 7h83l-7.5 84L50 99 16 91z" opacity="0.9" />
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path d="M16 91L8.5 7h83l-7.5 84L50 99 16 91z" opacity="0.9" />
  </svg>
);

const MySqlIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M17.34 5.92c-.4-3.04-3.78-4.44-6.6-2.6-1.24.82-1.98 2.02-2.3 3.42-.64 2.86 1 5.66 3.76 6.54 0 0-.8.2-.8.2-3.16.76-6.2-1.08-7.06-4.06 0 0 0 0 0 0-.06-.18-.32-.18-.38 0-.76 2.58.42 5.48 2.78 6.8 2.12 1.18 4.7 0.8 6.56-.68 0 0 0 0 0 0 0 0 .42 1.84.42 1.84.38 1.66 2.04 2.7 3.66 2.34 1.28-.3 2.12-1.42 2.12-2.66 0-.64-.2-1.24-.54-1.76 0 0 0 0 0 0 0 0 .74-1.48.74-1.48 1.2-2.4.2-5.32-2-6.6.82-.14 1.36-.96 1.22-1.8-.14-.82-.88-1.38-1.72-1.24-.6.12-1.06.58-1.2 1.16 0 0 0 0 0 0-.04-.18-.3-.18-.34 0-.14.84-.68 1.66-1.52 1.8-.84.14-1.58-.4-1.72-1.24 0 0 0 0 0 0-.04-.18-.3-.18-.34 0-.12.56-.62.94-1.18.94-.56 0-1.04-.38-1.16-.94 0 0 0 0 0 0-.04-.18-.3-.18-.34 0-.22 1.04-1.24 1.72-2.3 1.52-1.04-.22-1.72-1.24-1.5-2.3.22-1.04 1.24-1.72 2.3-1.5 0 0 0 0 0 0 .18.04.28-.18.14-.3C6.4 1.94 4.06 1.92 2.38 3.26.7 4.6-.12 6.9.02 9.04c.2 3.08 2.74 5.5 5.84 5.5 3.1 0 5.64-2.42 5.84-5.5 0 0 0 0 0 0 0 0 .8-.2.8-.2 1.4-.34 2.82.28 3.66 1.44 0 0 0 0 0 0 .08.12.32.08.34-.06.46-2.44 2.84-4.04 5.26-3.58 0 0 0 0 0 0 .18.04.28-.18.14-.3-1.24-1.06-2.86-1.48-4.46-1.18 0 0-.1.76-.1.76z" />
  </svg>
);

const CIcon = () => (
  <svg viewBox="0 0 128 128" fill="currentColor" className="w-full h-full">
    <path d="M117.5 13.5C103.75 6.25 88.75 2.25 72.75 2.25 33.75 2.25 2.25 33.75 2.25 72.75c0 39 31.5 70.5 70.5 70.5 16 0 31-4 44.75-11.25l-9-15.75c-10.25 6-22.5 9-35.75 9-29 0-52.5-23.5-52.5-52.5s23.5-52.5 52.5-52.5c13.25 0 25.5 3 35.75 9l9-15.75z" />
  </svg>
);

const CppIcon = () => (
  <svg viewBox="0 0 128 128" fill="currentColor" className="w-full h-full">
    <path d="M117.5 33.5l-9 15.75c-10.25-6-22.5-9-35.75-9-29 0-52.5 23.5-52.5 52.5s23.5 52.5 52.5 52.5c13.25 0 25.5-3 35.75-9l9 15.75C103.75 159.25 88.75 163.25 72.75 163.25 33.75 163.25 2.25 131.75 2.25 92.75c0-39 31.5-70.5 70.5-70.5 16 0 31 4 44.75 11.25zM113.25 80.75v12h-12v12h12v12h12v-12h12v-12h-12v-12h-12zm-35 12h12v-12h12v12h12v12h-12v12h-12v-12h-12v-12z" transform="translate(0 -15) scale(0.9)"/>
  </svg>
);

const VsCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M23.15 2.587l-9.5 7.15-5.9-5.15L2.85 7.828.5 9.778v4.444l2.35 1.95 4.9 3.239 5.9-5.15 9.5 7.15 1.35-1.112V3.7l-1.35-1.113zM6.9 15.903L2.4 12 6.9 8.1v7.803zM16.9 19.33l-7.75-6.05L16.9 5.98v13.35z" />
  </svg>
);

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "JavaScript", icon: JsIcon, color: "#F7DF1E" },
      { name: "React", icon: ReactIcon, color: "#55b1f2ff" },
      { name: "HTML5", icon: HtmlIcon, color: "#E34F26" },
      { name: "CSS3", icon: CssIcon, color: "#1572B6" },
      
    ],
  },
  {
    title: "Backend Engineering",
    skills: [
      { name: "Node.js", icon: NodeIcon, color: "#339933" },
      { name: "SQL", icon: MySqlIcon, color: "#083357ff" },
      { name: "Python", icon: PythonIcon, color: "#3776AB" }
      
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "c", icon: CIcon, color: "#f79c57ff" },
      { name: "c++", icon: CppIcon, color: "#ff2a00ff" },
      { name: "Python", icon: PythonIcon, color: "#4D77CF" },
      { name: "Java", icon: JavaIcon, color: "#da7604ff" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitIcon, color: "#F05032" },
      { name: "VS Code", icon: VsCodeIcon, color: "#F7931E" },
      { name: "Figma", icon: FigmaIcon, color: "#A259FF" },
    ],
  },
];

const GlassSkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="skill-card"
    >
      <div
        className="skill-card-glow"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
        }}
      />

      <div className="skill-icon-box">
        <div className="skill-icon-wrapper">
          <div className="skill-icon" style={{ "--skill-color": skill.color }}>
            <skill.icon />
          </div>
        </div>
      </div>

      <h4 className="skill-name">{skill.name}</h4>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-title"
        >
          Technical Proficiency
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="skills-description"
        >
          A curated list of technologies I use to build performant and scalable
          digital solutions.
        </motion.p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="category-column"
          >
            <h3 className="category-title">{category.title}</h3>

            <div className="skills-list">
              {category.skills.map((skill) => (
                <GlassSkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="skills-background-glow" />
    </div>
  );
};

export default Skills;
