import { useEffect, useState } from "react";

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
    >
      {children}
    </a>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Node.js",
    "Web Vitals & SEO",
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Shiva Choudhary
          </a>
          <nav className="hidden sm:flex items-center gap-8">
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-200 text-slate-700 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-20%,rgba(99,102,241,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_70%_-20%,rgba(99,102,241,0.2),transparent)]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-linear-to-br from-indigo-400/20 to-violet-500/20 dark:from-indigo-500/15 dark:to-violet-600/15 rounded-full blur-3xl animate-float" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="stagger max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 mb-6">
                Around 2 years of building for the web
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Frontend Engineer building{" "}
                <span className="bg-linear-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                  scalable, high-performance
                </span>{" "}
                web apps
              </h1>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                React & Next.js specialist focused on Core Web Vitals,
                CMS-driven architectures, and SEO-optimized platforms.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/shivachaudhary5b750719b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-900/10 dark:shadow-slate-950/50 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  LinkedIn
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/ShivaChoudhary-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                >
                  GitHub
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-linear-to-br from-indigo-500 via-violet-500 to-purple-600 p-1 shadow-2xl shadow-indigo-500/25 dark:shadow-indigo-900/30 animate-float">
                <div className="w-full h-full rounded-[22px] bg-slate-100 dark:bg-slate-900/50 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[24px_24px]" />
                  <div className="absolute bottom-8 left-8 right-8 h-24 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200/50 dark:border-slate-700/50" />
                  <div className="absolute top-8 left-8 w-20 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-xl bg-indigo-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="w-full py-20 md:py-28 bg-white dark:bg-slate-900/50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've worked
          </h2>

          <div className="space-y-6">
            <article className="group relative p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800/50 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-900/10 transition-all duration-300">
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-linear-to-b from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Software Engineer · CARS24
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  Aug 2024 – Present
                </span>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Led migration of the New Cars platform to a CMS-driven,
                  modular frontend architecture shared with Bikes24, enabling
                  non-technical teams to manage content without code
                  deployments.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Designed and implemented a config-driven UI system in Next.js,
                  improving scalability and reducing frontend change turnaround
                  time by ~40%.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Optimized Core Web Vitals (INP, CLS, LCP) through
                  component-level performance tuning, deferred rendering, and
                  layout stabilization, achieving green scores on desktop.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Improved technical SEO by restructuring semantic HTML, heading
                  hierarchy, and schema markup, scaling organic impressions to
                  1.1M/month and clicks to 7K.
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Designed and implemented a config-driven, domain-aware theming
                  system across four domains using HTML data-* attributes, CSS
                  variables, Tailwind configuration, and domain-specific assets,
                  improving maintainability and deployment efficiency.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Collaborated closely with product managers, designers, and
                  backend teams to deliver responsive, pixel-accurate UI across
                  devices.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Owned and maintained high-traffic static and marketing pages,
                  ensuring consistent UX, accessibility, and performance across
                  releases.
                </li>
              </ul>
            </article>

            <article className="group relative p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800/50 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-900/10 transition-all duration-300">
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-linear-to-b from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Software Engineer Intern · Solidity Technologies
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  6 months
                </span>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Integrated multiple third-party APIs with optimized debounced
                  search.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Reduced unnecessary API calls and improved overall UX
                  responsiveness.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                  Worked closely with senior engineers to integrate third-party
                  APIs, improve data flow reliability, and enhance frontend
                  performance.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="w-full py-20 md:py-28 bg-slate-50 dark:bg-slate-950/50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Things I've built
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800/50 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-900/10 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Food Ordering App
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                React-based food ordering platform with Redux Toolkit cart
                management, routing, and Tailwind-powered responsive UI.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm mb-6">
                <li>
                  • Redux Toolkit, client-side routing, responsive Tailwind UI
                </li>
                <li>• Hooks and memoization for performance</li>
              </ul>
              <a
                href="https://foddiiee.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl font-medium bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
              >
                Live Demo
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </article>

            <article className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800/50 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-900/10 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Movie Browsing App (GPT)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                Movie discovery app with TMDB API, Firebase auth, multilingual
                support, and GPT-powered intelligent search.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm mb-6">
                <li>• TMDB API, Firebase auth, multilingual UI</li>
                <li>• OpenAI GPT-based movie recommendations</li>
              </ul>
              <a
                href="https://my-flix-gpt.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl font-medium bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
              >
                Live Demo
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="w-full py-20 md:py-28 bg-white dark:bg-slate-900/50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            What I work with
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING */}
      <section className="w-full py-20 md:py-28 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Problem Solving
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">LeetCode</h2>
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-colors">
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-6">
              Actively practicing data structures and algorithms—arrays,
              strings, recursion, hashing, stacks, queues, and common interview
              patterns.
            </p>
            <a
              href="https://leetcode.com/u/shivachaudhary609/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              View LeetCode Profile
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
          <span>© {new Date().getFullYear()} Shiva Choudhary</span>
          <span className="font-medium text-slate-700 dark:text-slate-300">
            Frontend Engineer
          </span>
        </div>
      </footer>
    </div>
  );
}
