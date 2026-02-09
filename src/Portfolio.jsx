import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Shiva Choudhary</h1>
            <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-200 text-slate-300 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
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
                className="w-6 h-6"
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
      </header>

      {/* HERO */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Frontend Engineer building <br /> scalable, high-performance web
              apps
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              1.5+ years of experience with React & Next.js, focused on Core Web
              Vitals, CMS-driven architectures, and SEO-optimized platforms.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/shivachaudhary5b750719b"
                className="px-6 py-3 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ShivaChoudhary-design"
                className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl h-64 md:h-80" />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="w-full py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12">Experience</h3>

          <div className="space-y-10">
            <div className="p-8 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xl font-semibold">
                Software Engineer · CARS24
              </h4>
              <p className="text-sm text-slate-500">Aug 2024 – Present</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-5">
                <li>
                  Led migration of the New Cars platform to a CMS-driven,
                  modular frontend architecture shared with Bikes24, enabling
                  non-technical teams to manage content without code
                  deployments.
                </li>
                <li>
                  Designed and implemented a config-driven UI system in Next.js,
                  improving scalability and reducing frontend change turnaround
                  time by ~40%.
                </li>
                <li>
                  Optimized Core Web Vitals (INP, CLS, LCP) through
                  component-level performance tuning, deferred rendering, and
                  layout stabilization, achieving green scores on desktop.
                </li>
                <li>
                  Improved technical SEO by restructuring semantic HTML, heading
                  hierarchy, and schema markup, scaling organic impressions to
                  1.1M/month and clicks to 7K.
                </li>
                <li>
                  Built and shipped a reusable Next.js micro-frontend SDK
                  (Team-BHP Lead Widget) with dynamic theming support, driving a
                  30–35% increase in lead generation across partner sites.
                </li>
                <li>
                  Collaborated closely with product managers, designers, and
                  backend teams to deliver responsive, pixel-accurate UI across
                  devices.
                </li>
                <li>
                  Owned and maintained high-traffic static and marketing pages,
                  ensuring consistent UX, accessibility, and performance across
                  releases.
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xl font-semibold">
                Software Engineer Intern · Solidity Technologies
              </h4>
              <p className="text-sm text-slate-500">6 months</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-5">
                <li>
                  Integrated multiple third-party APIs with optimized debounced
                  search.
                </li>
                <li>
                  Reduced unnecessary API calls and improved overall UX
                  responsiveness.
                </li>
                <li>
                  Worked closely with senior engineers to integrate third-party
                  APIs, improve data flow reliability, and enhance frontend
                  performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12">Projects</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xl font-semibold">Food Ordering App</h4>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                React-based food ordering platform with Redux Toolkit cart
                management, routing, and Tailwind-powered responsive UI.
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-600 dark:text-slate-400">
                <li>
                  Built using React with Redux Toolkit for predictable global
                  state management, including cart and order flows.
                </li>
                <li>
                  Implemented client-side routing and reusable UI components to
                  improve navigation and maintainability.
                </li>
                <li>
                  Optimized render performance by structuring components with
                  hooks and memoization where required.
                </li>
                <li>
                  Designed a fully responsive layout using Tailwind CSS,
                  ensuring consistent UX across mobile, tablet, and desktop
                  devices.
                </li>
              </ul>
              <a
                href="https://foddiiee.netlify.app"
                className="inline-block mt-4 text-indigo-600 dark:text-indigo-400"
              >
                Live Demo →
              </a>
            </div>

            <div className="p-8 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xl font-semibold">
                Movie Browsing App (GPT)
              </h4>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Movie discovery app with TMDB API, Firebase auth, multilingual
                support, and GPT-powered intelligent search.
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-600 dark:text-slate-400">
                <li>
                  Integrated TMDB API to fetch and display a large catalog of
                  movies with optimized data fetching and caching strategies.
                </li>
                <li>
                  Implemented Firebase authentication for secure sign-in and
                  user session handling.
                </li>
                <li>
                  Added multilingual support and dynamic UI rendering based on
                  user preferences.
                </li>
                <li>
                  Integrated OpenAI GPT-based search to provide intelligent,
                  natural-language movie recommendations.
                </li>
                <li>
                  Applied React best practices including custom hooks, reusable
                  components, and Redux-based state management.
                </li>
              </ul>
              <a
                href="https://my-flix-gpt.netlify.app"
                className="inline-block mt-4 text-indigo-600 dark:text-indigo-400"
              >
                Live Demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="w-full py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-700 dark:text-slate-300">
            <span>React</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Redux Toolkit</span>
            <span>Node.js</span>
            <span>Web Vitals & SEO</span>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Problem Solving</h3>

          <div className="p-8 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xl font-semibold">LeetCode</h4>

            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-3xl">
              Actively practicing data structures and algorithms to strengthen
              problem-solving skills, focusing on arrays, strings, recursion,
              hashing, stacks, queues, and common interview patterns.
            </p>

            <a
              href="https://leetcode.com/u/shivachaudhary609/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 font-medium"
            >
              View LeetCode Profile →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
          © {new Date().getFullYear()} Shiva Choudhary · Frontend Engineer
        </div>
      </footer>
    </div>
  );
}
