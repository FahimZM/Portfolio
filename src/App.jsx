import { useState } from "react";
import "./App.css";
import SpecularButton from "./components/button.jsx";
import DepthCarousel from "./components/img_carousel.jsx";
import LiquidEther from "./components/background.jsx";

import heroImage from "./assets/hero.png";

import resume from "./assets/Fahim_Zaman_Resume.pdf";

const projects = [
  {
    image: heroImage,
    alt: "Placeholder Project 1",
    title: "Placeholder Project 1",
    description: "description of project 1",
    tags: ["tag1", "tag2", "tag3"],
    year: "2025",
    href: "#",
  },
  {
    image: heroImage,
    alt: "Placeholder Project 2",
    title: "Placeholder Project 2",
    description: "description of project 2",
    tags: ["tag1", "tag2", "tag3"],
    year: "2026",
    href: "#",
  },
  {
    image: heroImage,
    alt: "Placeholder Project 3",
    title: "Placeholder Project 3",
    description: "description of project 3",
    tags: ["tag1", "tag2", "tag3"],
    year: "2026",
    href: "#",
  },
];

const [featuredProject, ...otherProjects] = projects;

const skills = ["C++", "JavaScript", "TypeScript", "React", "Node.js", "Git"];

const socials = [
  { label: "Resume", href: resume },
  { label: "GitHub", href: "https://github.com/FahimZM" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fahim-zaman-a52a07313/",
  },
  { label: "Email", href: "mailto:zamanfahim13@gmail.com" },
];

function App() {
  const [etherOn, setEtherOn] = useState(true);

  return (
    <div className={`page${etherOn ? " page--ether-on" : " page--ether-off"}`}>
      {etherOn && (
        <div className="background" aria-hidden="true">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B497CF"]}
            mouseForce={24}
            cursorSize={28}
            isViscous={false}
            resolution={0.2}
            isBounce={false}
            autoDemo
            autoSpeed={0.08}
            autoIntensity={1.4}
            takeoverDuration={0.25}
            autoResumeDelay={4000}
            autoRampDuration={0.6}
          />
        </div>
      )}

      <div className="page-overlay" aria-hidden="true" />

      <header className="nav">
        <a className="nav__brand" href="#top">
          FZ
        </a>
        <div className="nav__end">
          <nav className="nav__links" aria-label="Primary">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            type="button"
            className={`ether-toggle${etherOn ? " is-on" : ""}`}
            onClick={() => setEtherOn((on) => !on)}
            aria-pressed={etherOn}
            aria-label={
              etherOn
                ? "Turn liquid background off"
                : "Turn liquid background on"
            }
            title={etherOn ? "Background: on" : "Background: off"}
          >
            <span className="ether-toggle__track" aria-hidden="true">
              <span className="ether-toggle__thumb" />
            </span>
            <span className="ether-toggle__label">Ether</span>
          </button>
        </div>
      </header>

      <main className="content">
        <section id="top" className="hero">
          <p className="eyebrow">Portfolio · 2026</p>
          <h1 className="hero__title">
            Fahim <span className="hero__accent">Zaman</span>
          </h1>
          <p className="hero__subtitle">Software Engineer</p>
          <p className="hero__pitch">
            I build, experiment, and turn ideas into things people can use.
          </p>
          <div className="hero__actions">
            <SpecularButton
              size="lg"
              radius={18}
              tint="#5227FF"
              tintOpacity={0.14}
              blur={14}
              textColor="#ffffff"
              lineColor="#FF9FFC"
              baseColor="#2a2840"
              intensity={1.1}
              shineSize={12}
              shineFade={38}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={280}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </SpecularButton>
            <SpecularButton
              size="md"
              radius={18}
              tint="#ffffff"
              tintOpacity={0.06}
              blur={10}
              textColor="#f4f4f5"
              lineColor="#ffffff"
              baseColor="#1c1c24"
              intensity={0.85}
              shineSize={10}
              shineFade={42}
              thickness={1}
              speed={0.3}
              followMouse
              proximity={220}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </SpecularButton>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section__header section__header--left">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects</h2>
            <p className="section__lede">
              A snapshot of recent work — products and experiments.
            </p>
          </div>

          <div className="project-showcase">
            <article className="project-card project-card--featured glass-panel">
              <a
                className="project-card__media"
                href={featuredProject.href}
                aria-label={featuredProject.title}
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.alt}
                  loading="lazy"
                />
                <span className="project-card__overlay" aria-hidden="true" />
              </a>
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__index">01</span>
                  <span className="project-card__year">
                    {featuredProject.year}
                  </span>
                </div>
                <h3 className="project-card__title">{featuredProject.title}</h3>
                <p className="project-card__desc">
                  {featuredProject.description}
                </p>
                <ul className="project-card__tags">
                  {featuredProject.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a className="project-card__link" href={featuredProject.href}>
                  View project
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            <div className="project-grid">
              {otherProjects.map((project, i) => (
                <article
                  key={project.title}
                  className="project-card glass-panel"
                >
                  <a
                    className="project-card__media"
                    href={project.href}
                    aria-label={project.title}
                  >
                    <img src={project.image} alt={project.alt} loading="lazy" />
                    <span
                      className="project-card__overlay"
                      aria-hidden="true"
                    />
                  </a>
                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span className="project-card__index">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                      <span className="project-card__year">{project.year}</span>
                    </div>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__desc">{project.description}</p>
                    <ul className="project-card__tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="glass-panel about">
            <div className="about__copy">
              <p className="eyebrow">About</p>
              <h2>Building with intent</h2>
              <p>
                I'm a software developer who loves creating things, whether
                that's through code, design, or other forms of creative work. I
                enjoy turning ideas into experiences that are useful, intuitive,
                and thoughtfully made. For me, software is another medium for
                bringing ideas to life.
              </p>
            </div>
            <div className="about__skills">
              <p className="about__skills-label">Technologies</p>
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="glass-panel contact">
            <p className="eyebrow">Contact</p>
            <h2>Let's connect</h2>
            <p>
              Open to collaborations, freelance, and full-time opportunities.
            </p>
            <div className="contact__links">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  download={
                    label === "Resume" ? "Fahim_Zaman_Resume.pdf" : undefined
                  }
                  target={label === "Resume" ? undefined : "_blank"}
                  rel={label === "Resume" ? undefined : "noreferrer"}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="gallery" className="section section--gallery">
          <div className="section__header">
            <p className="eyebrow">Work in progress</p>
            <h2>Image carousel</h2>
            <p className="section__lede">
              Placeholder gallery — swap in your own images or remove this section later.
            </p>
          </div>

          <div className="carousel-wrap">
            <DepthCarousel
              items={projects.map(({ image, alt }) => ({ image, alt }))}
              depth={200}
              spread={88}
              tilt={20}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.22}
              blur={5}
              autoplay={false}
              loop
              cardWidth={280}
              cardHeight={350}
              radius={16}
              tint="#05060a"
              duration={650}
              ease="power3.out"
              showControls
              showIndicators
            />
          </div>
        </section> */}

        <footer className="footer">
          <span>© {new Date().getFullYear()} Fahim Zaman</span>
          <span>Designed & built with React</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
