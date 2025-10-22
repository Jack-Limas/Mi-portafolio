// app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/**
 * IMPORTANT:
 * - Place your images in /public/images/ and update the filenames below if needed.
 *   Example images referenced:
 *     /public/images/hero-photo.jpg
 *     /public/images/proj-stylish.webp
 *     /public/images/proj-train.webp
 *     /public/images/proj-configurator.webp
 *     /public/images/avatar.jpg
 *     /public/images/avatar-laura.jpg
 *     /public/images/avatar-andres.jpg
 *     /public/images/avatar-camila.jpg
 *     /public/images/hobby-music.jpg
 *     /public/images/hobby-travel.jpg
 *     /public/images/hobby-soccer.jpg
 *     /public/images/hobby-tech.jpg
 *     /public/images/hobby-games.jpg
 *
 * - Tailwind CSS must be configured in your project and global styles imported.
 */

/* ---------------------------
   Full content in ES + EN for language toggle
   (English translations provided for all visible text)
----------------------------*/
const TRANSLATIONS = {
  es: {
    nav: {
      home: "Home",
      projects: "Proyectos",
      contact: "Contactos",
      about: "Acerca de mí",
      offer: "Lo que ofrezco",
      experience: "Experiencia",
      testimonials: "Testigos"
    },
    hero: {
      name: "Jack Anderson Limas Solarte",
      slogan: "Construyo software que resuelve problemas reales",
      intro:
        "Soy estudiante de Ingeniería de Software en 5° semestre, apasionado por el desarrollo web y la creación de soluciones digitales. Me destaco por mi atención al detalle, el aprendizaje constante y la capacidad de transformar ideas en proyectos funcionales.",
      ctaProjects: "Ver Proyectos",
      ctaCV: "Descargar CV"
    },
    talentsTitle: "Algunos de mis talentos",
    talents: [
      "Pensamiento lógico y resolución de problemas",
      "Aprendizaje autónomo y disciplina",
      "Sinceridad y humildad"
    ],
    projects: {
      title: "Mi Proyectos",
      subtitle: "Algunos trabajos destacados",
      items: [
        {
          id: "comandas",
          title: "Comandas Digitales",
          subtitle: "Sistema de comandas digitales",
          desc:
            "Actualmente estoy desarrollando un sistema de comandas digitales para restaurantes, que busca optimizar la gestión de pedidos y mejorar la experiencia del cliente.",
          image: "/images/proj-stylish.webp",
          demo: "https://github.com/Jack-Limas",
          repo: "https://github.com/Jack-Limas"
        },
        {
          id: "ticket-system",
          title: "Sistema de emisión de boletos",
          subtitle: "Gestión automática de billetes",
          desc:
            "Proyecto académico en el que diseñé un sistema para la gestión automática de boletos de tren. Incluye diagramas de clases, historias de usuario y planteamiento de arquitectura.",
          image: "/images/proj-train.webp",
          demo: "https://github.com/Jack-Limas",
          repo: "https://github.com/Jack-Limas"
        },
        {
          id: "pc-config",
          title: "Configurador de PC (Angular)",
          subtitle: "Angular + TypeScript",
          desc:
            "Desarrollo de una aplicación interactiva para configurar componentes de un PC gamer. Practiqué patrones de diseño y arquitectura modular.",
          image: "/images/proj-configurator.webp",
          demo: "https://github.com/Jack-Limas",
          repo: "https://github.com/Jack-Limas"
        }
      ]
    },
    contact: {
      title: "Contactos",
      subtitle: "Puedes escribirme para proyectos o preguntas",
      nameLabel: "Nombre",
      emailLabel: "Correo",
      messageLabel: "Mensaje",
      sendButton: "Enviar mensaje",
      successMessage: "Mensaje enviado correctamente."
    },
    about: {
      title: "Acerca de mí",
      short:
        "Soy Jack, tengo 19 años y soy de Pasto, Colombia. Me considero curioso, observador y con propósito. Valoro mucho mi entorno y disfruto mezclar lo visual con lo lógico.",
      hobbiesTitle: "Mis Hobbies",
      hobbies: [
        {
          key: "music",
          title: "Música",
          text: "Me gusta el trap, rap y clásicos. Siempre tengo playlists para cada momento.",
          image: "/images/hobby-music.jpg"
        },
        {
          key: "travel",
          title: "Viajar",
          text: "He recorrido varias ciudades; cada lugar me dejó una nueva forma de ver la vida.",
          image: "/images/hobby-travel.jpg"
        },
        {
          key: "soccer",
          title: "Fútbol",
          text: "Juego fútbol; me aporta disciplina y diversión.",
          image: "/images/hobby-soccer.jpg"
        },
        {
          key: "tech",
          title: "Tecnología",
          text: "Me interesa probar nuevas tecnologías: VR, fintechs y experiencias digitales.",
          image: "/images/hobby-tech.jpg"
        },
        {
          key: "games",
          title: "Videojuegos",
          text: "Me gusta descubrir experiencias nuevas y aprender de ellas.",
          image: "/images/hobby-games.jpg"
        }
      ]
    },
    offer: {
      title: "Lo que ofrezco",
      bullets: [
        "Soluciones prácticas y eficientes.",
        "Trabajo en equipo y compromiso.",
        "Creatividad con atención al detalle."
      ],
      skillsTitle: "Tecnologías y cómo las aplico",
      skills: [
        {
          name: "HTML & CSS",
          text: "Estructuro interfaces accesibles y estéticas con atención al detalle."
        },
        {
          name: "JavaScript / TypeScript",
          text: "Transformo lógica en aplicaciones interactivas y robustas."
        },
        {
          name: "Angular / Next.js",
          text: "Desarrollo aplicaciones escalables y con buena arquitectura."
        },
        {
          name: "Tailwind / Figma",
          text: "Conecto diseño y código para entregar productos coherentes."
        }
      ]
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi recorrido (académico y práctico)",
      items: [
        {
          title: "Proyecto de grado – Comandas digitales",
          desc:
            "Actualmente estoy desarrollando un sistema de comandas digitales para restaurantes, que busca optimizar la gestión de pedidos y mejorar la experiencia del cliente."
        },
        {
          title: "Stylish Brands – Tienda virtual",
          desc:
            "Creación de una marca de ropa urbana con tienda virtual; trabajé en diseño, programación y gestión de inventario."
        },
        {
          title: "Scripts y proyectos académicos",
          desc:
            "Durante mi carrera desarrollé múltiples scripts y páginas web, afianzando bases en programación y transformando teoría en productos."
        },
        {
          title: "Voluntariado universitario",
          desc:
            "Participé en actividades de voluntariado que fortalecieron mi liderazgo, comunicación y trabajo en equipo."
        },
        {
          title: "Seminarios y conferencias",
          desc:
            "Asistí a seminarios de tecnología que ampliaron mi visión sobre tendencias y buenas prácticas."
        }
      ]
    },
    testimonials: {
      title: "Testigos",
      items: [
        {
          name: "Laura Martínez",
          role: "Compañera de curso",
          text: "Trabajar con Jack siempre ha sido motivador. Tiene ideas creativas y ayuda al equipo.",
          avatar: "/images/avatar-laura.jpg"
        },
        {
          name: "Andrés Gómez",
          role: "Compañero de equipo",
          text: "Jack aporta soluciones rápidas y prácticas; excelente para el trabajo en grupo.",
          avatar: "/images/avatar-andres.jpg"
        },
        {
          name: "Camila Torres",
          role: "Amiga y colaboradora",
          text: "La dedicación de Jack facilita la colaboración y el aprendizaje.",
          avatar: "/images/avatar-camila.jpg"
        }
      ]
    },
    footer: {
      text: "© 2025 Jack Limas – Todos los derechos reservados."
    }
  },

  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      about: "About",
      offer: "What I offer",
      experience: "Experience",
      testimonials: "Testimonials"
    },
    hero: {
      name: "Jack Anderson Limas Solarte",
      slogan: "I build software that solves real problems",
      intro:
        "I'm a Software Engineering student, passionate about web development and building useful digital solutions. I stand out for attention to detail, continuous learning and turning ideas into working projects.",
      ctaProjects: "View Projects",
      ctaCV: "Download CV"
    },
    talentsTitle: "Some of my talents",
    talents: [
      "Logical thinking and problem solving",
      "Self-learning and discipline",
      "Sincerity and humility"
    ],
    projects: {
      title: "My Projects",
      subtitle: "Selected work",
      items: [
        {
          id: "comandas",
          title: "Digital Orders",
          subtitle: "Digital orders system",
          desc:
            "Currently developing a digital ordering system for restaurants to improve order management and customer experience.",
          image: "/images/proj-stylish.webp",
          demo: "https://github.com/Jack-Limas",
          repo: "https://github.com/Jack-Limas"
        },
        {
          id: "ticket-system",
          title: "Ticketing System",
          subtitle: "Automatic ticket management",
          desc:
            "Academic project to design an automatic ticketing system for trains, including class diagrams and architecture planning.",
          image: "/images/proj-train.webp",
          demo: "https://github.com/Jack-Limas",
          repo: "https://github.com/Jack-Limas"
        },
        {
          id: "pc-config",
          title: "PC Configurator (Angular)",
          subtitle: "Angular + TypeScript",
          desc:
            "Interactive app to assemble PC components. Practice in design patterns and modular architecture.",
          image: "/images/proj-configurator.webp",
          demo: "https://github.com/Jack-Limas",
          repo: "https://github.com/Jack-Limas"
        }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Write me for projects or questions",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButton: "Send message",
      successMessage: "Message sent successfully."
    },
    about: {
      title: "About",
      short:
        "I'm Jack, 19, from Pasto, Colombia. Curious, observant and purpose-driven. I value my environment and like to mix visual and logical thinking.",
      hobbiesTitle: "My Hobbies",
      hobbies: [
        { key: "music", title: "Music", text: "I like trap, rap and classics.", image: "/images/hobby-music.jpg" },
        { key: "travel", title: "Travel", text: "I've visited many cities; each left a new perspective.", image: "/images/hobby-travel.jpg" },
        { key: "soccer", title: "Soccer", text: "I play soccer and enjoy the discipline and fun.", image: "/images/hobby-soccer.jpg" },
        { key: "tech", title: "Tech", text: "I test VR and fintech apps and enjoy new digital experiences.", image: "/images/hobby-tech.jpg" },
        { key: "games", title: "Games", text: "I like discovering new gaming experiences.", image: "/images/hobby-games.jpg" }
      ]
    },
    offer: {
      title: "What I offer",
      bullets: [
        "Practical and efficient solutions.",
        "Team player and reliable.",
        "Creative with attention to detail."
      ],
      skillsTitle: "Technologies & how I use them",
      skills: [
        { name: "HTML & CSS", text: "I build accessible and well-styled interfaces." },
        { name: "JavaScript / TypeScript", text: "I convert logic into interactive, robust apps." },
        { name: "Angular / Next.js", text: "I build scalable apps with solid architecture." },
        { name: "Tailwind / Figma", text: "I connect design and code for consistent products." }
      ]
    },
    experience: {
      title: "Experience",
      subtitle: "My academic & practical journey",
      items: [
        { title: "Final project – Digital orders", desc: "Developing a digital orders system for restaurants to optimize orders and improve the customer experience." },
        { title: "Stylish Brands – Online store", desc: "Built an online store and learned inventory management and integration." },
        { title: "Academic projects & scripts", desc: "Built multiple exercises and websites to strengthen programming fundamentals." },
        { title: "University volunteer", desc: "Participated in volunteer activities to strengthen teamwork and leadership." },
        { title: "Seminars & conferences", desc: "Attended seminars that expanded my view on technology trends." }
      ]
    },
    testimonials: {
      title: "Testimonials",
      items: [
        { name: "Laura Martínez", role: "Classmate", text: "Working with Jack has been motivating. He brings creative ideas and helps the team.", avatar: "/images/avatar-laura.jpg" },
        { name: "Andrés Gómez", role: "Team mate", text: "Jack brings fast, practical solutions and is great in team work.", avatar: "/images/avatar-andres.jpg" },
        { name: "Camila Torres", role: "Friend & collaborator", text: "Jack's dedication makes collaboration and learning easier.", avatar: "/images/avatar-camila.jpg" }
      ]
    },
    footer: { text: "© 2025 Jack Limas – All rights reserved." }
  }
};

/* ---------------------------
   Theme helper (persistent)
----------------------------*/
function getInitialTheme(): "dark" | "light" {
  try {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "dark" || stored === "light") return stored;
  } catch (e) {}
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

/* ---------------------------
   Page component
----------------------------*/
export default function Page() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    if (initial === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    // language: try to restore from localStorage if exists
    try {
      const storedLang = localStorage.getItem("lang");
      if (storedLang === "es" || storedLang === "en") setLang(storedLang);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert(lang === "es" ? "Por favor completa todos los campos." : "Please complete all fields.");
      return;
    }
    // Here you could integrate an email API; for now show success UI
    setSent(true);
    alert(lang === "es" ? TRANSLATIONS.es.contact.successMessage : TRANSLATIONS.en.contact.successMessage);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSent(false), 5000);
  };

  // projects from translations (use chosen language set if needed)
  const projects = TRANSLATIONS[lang].projects.items;

  return (
    <div className="font-inter bg-bg dark:bg-darkbg min-h-screen text-[#111827] dark:text-[#F9FAFB]">
      {/* HEADER: in light mode show blue band like your design; in dark mode show dark band */}
      <header className={`${theme === "light" ? "bg-[#143c9b] text-white" : "bg-white/80 dark:bg-[#071027]/80"} sticky top-0 z-50`}>
        <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <a href="#home" className={`font-poppins text-lg md:text-xl font-semibold ${theme === "light" ? "text-white" : "text-primary dark:text-accent"}`}>
            {t.hero.name}
          </a>

          {/* desktop nav */}
          <ul className={`hidden md:flex items-center gap-6 text-sm ${theme === "light" ? "text-white/95" : "text-[#374151] dark:text-gray-300"}`}>
            <li><a href="#home" className="hover:underline">{t.nav.home}</a></li>
            <li><a href="#projects" className="hover:underline">{t.nav.projects}</a></li>
            <li><a href="#contact" className="hover:underline">{t.nav.contact}</a></li>
            <li><a href="#about" className="hover:underline">{t.nav.about}</a></li>
            <li><a href="#offer" className="hover:underline">{t.nav.offer}</a></li>
            <li><a href="#experience" className="hover:underline">{t.nav.experience}</a></li>
            <li><a href="#testimonials" className="hover:underline">{t.nav.testimonials}</a></li>

            <li>
              <button onClick={toggleLang} aria-label="toggle language" className={`${theme === "light" ? "bg-white/20 text-white" : "bg-white/90"} px-3 py-2 rounded`}>
                {lang === "es" ? "ES" : "EN"}
              </button>
            </li>

            <li>
              <button onClick={toggleTheme} aria-label="toggle theme" className={`${theme === "light" ? "bg-white/20 text-white" : "bg-white/90"} px-3 py-2 rounded`}>
                {theme === "dark" ? "🌙" : "☀️"}
              </button>
            </li>

            <li>
              <a className={`${theme === "light" ? "bg-white/20 text-white px-3 py-2 rounded" : "btn-primary"} inline-block`} href="/resume.pdf" target="_blank" rel="noreferrer">
                {t.hero.ctaCV}
              </a>
            </li>
          </ul>

          {/* mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleLang} className="px-2 py-2 rounded bg-white/90 dark:bg-slate-800/90">{lang === "es" ? "ES" : "EN"}</button>
            <button onClick={toggleTheme} className="px-2 py-2 rounded bg-white/90 dark:bg-slate-800/90">{theme === "dark" ? "🌙" : "☀️"}</button>
            <button onClick={() => setMenuOpen((v) => !v)} className="p-2 rounded bg-white/90 dark:bg-slate-800/90">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#0B1220" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        {menuOpen && (
          <div className={`${theme === "light" ? "bg-[#143c9b] text-white" : "bg-white/95 dark:bg-[#071027]/95"} md:hidden px-4 pb-4`}>
            <div className="flex flex-col gap-2">
              <a href="#home" className="py-2 border-b">{t.nav.home}</a>
              <a href="#projects" className="py-2 border-b">{t.nav.projects}</a>
              <a href="#contact" className="py-2 border-b">{t.nav.contact}</a>
              <a href="#about" className="py-2 border-b">{t.nav.about}</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HOME */}
        <section id="home" className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* left card */}
            <div className="md:col-span-7 bg-gray-100 dark:bg-slate-800 rounded p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <h1 className="font-poppins text-2xl md:text-3xl font-bold">{t.hero.name}</h1>
              <h2 className="mt-2 text-sm md:text-lg text-muted dark:text-gray-300">{t.hero.slogan}</h2>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-200">{t.hero.intro}</p>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">{TRANSLATIONS[lang].talentsTitle}</h3>
                <ul className="mt-3 list-decimal list-inside text-sm space-y-2 text-gray-700 dark:text-gray-200">
                  {TRANSLATIONS[lang].talents.map((it: string, idx: number) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="#projects" className="inline-block btn-primary">{t.hero.ctaProjects}</a>
                <a href="/resume.pdf" className="inline-block btn-outline">{t.hero.ctaCV}</a>
              </div>
            </div>

            {/* right card image */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg bg-gray-100 border border-teal-200">
                {/* Put your hero photo in /public/images/hero-photo.jpg */}
                <Image src="/images/hero-photo.jpg" alt="hero" width={480} height={480} className="object-cover"/>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold">{TRANSLATIONS[lang].projects.title}</h2>
            <p className="text-muted mt-2">{TRANSLATIONS[lang].projects.subtitle}</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p: any) => (
              <article key={p.id} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700">
                <div className="w-full h-44 relative">
                  <Image src={p.image} alt={p.title} fill className="object-cover"/>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <div className="text-xs text-gray-500 mt-1">{p.subtitle}</div>
                  <p className="text-sm text-muted mt-3">{p.desc}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {/* tags placeholder */}
                    <span className="text-xs bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full">Proyecto</span>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a className="btn-outline" href={p.demo} target="_blank" rel="noreferrer">Demo</a>
                    <a className="btn-outline" href={p.repo} target="_blank" rel="noreferrer">Repo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-8 bg-bg dark:bg-darkbg">
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold">{TRANSLATIONS[lang].contact.title}</h2>
            <p className="text-muted mt-2">{TRANSLATIONS[lang].contact.subtitle}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Form left */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-slate-700">
                <h3 className="font-semibold text-lg mb-4">{lang === "es" ? "Contáctame" : "Contact me"}</h3>

                <label className="block mb-3">
                  <span className="text-sm">{TRANSLATIONS[lang].contact.nameLabel}</span>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="block w-full mt-1 border rounded-md p-3 bg-transparent" placeholder={TRANSLATIONS[lang].contact.nameLabel} />
                </label>

                <label className="block mb-3">
                  <span className="text-sm">{TRANSLATIONS[lang].contact.emailLabel}</span>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full mt-1 border rounded-md p-3 bg-transparent" placeholder={TRANSLATIONS[lang].contact.emailLabel} />
                </label>

                <label className="block mb-3">
                  <span className="text-sm">{TRANSLATIONS[lang].contact.messageLabel}</span>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full mt-1 border rounded-md p-3 h-28 bg-transparent" placeholder={TRANSLATIONS[lang].contact.messageLabel}></textarea>
                </label>

                <button type="submit" className="btn-primary">{TRANSLATIONS[lang].contact.sendButton}</button>

                {sent && <div className="mt-3 p-3 bg-green-50 text-green-800 rounded">{TRANSLATIONS[lang].contact.successMessage}</div>}
              </form>

              <div className="mt-6 flex gap-4 items-center">
                <a href="https://github.com/Jack-Limas" target="_blank" rel="noreferrer" className="p-2 bg-white rounded shadow-sm dark:bg-slate-800">GitHub</a>
                <a href="#" className="p-2 bg-white rounded shadow-sm dark:bg-slate-800">LinkedIn</a>
                <a href="#" className="p-2 bg-white rounded shadow-sm dark:bg-slate-800">Instagram</a>
              </div>
            </div>

            {/* Right: round photo */}
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg bg-gray-100 border border-teal-200">
                {/* Replace with /public/images/avatar.jpg */}
                <Image src="/images/avatar.jpg" alt="avatar" width={480} height={480} className="object-cover"/>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg">
                <Image src="/images/avatar.jpg" alt="avatar" width={240} height={240} className="object-cover"/>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-2xl font-poppins font-bold mb-2">{TRANSLATIONS[lang].about.title}</h2>
              <p className="text-sm text-muted">{TRANSLATIONS[lang].about.short}</p>

              <div className="mt-6">
                <h3 className="font-semibold mb-3">{TRANSLATIONS[lang].about.hobbiesTitle}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {TRANSLATIONS[lang].about.hobbies.map((h: any) => (
                    <div key={h.key} className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-lg border border-gray-100 dark:border-slate-700 text-center">
                      <div className="w-full h-24 relative rounded overflow-hidden mb-3">
                        <Image src={h.image} alt={h.title} fill className="object-cover"/>
                      </div>
                      <div className="font-semibold">{h.title}</div>
                      <div className="text-xs text-muted mt-1">{h.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section id="offer" className="max-w-6xl mx-auto px-4 md:px-6 py-8 bg-bg dark:bg-darkbg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-slate-700">
              <h3 className="font-semibold text-lg">{TRANSLATIONS[lang].offer.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {TRANSLATIONS[lang].offer.bullets.map((b: string, i: number) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-slate-700">
              <h3 className="font-semibold text-lg">{TRANSLATIONS[lang].offer.skillsTitle}</h3>
              <div className="mt-4 space-y-4">
                {TRANSLATIONS[lang].offer.skills.map((s: any) => (
                  <div key={s.name} className="p-3 bg-gray-50 dark:bg-slate-700 rounded">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800 flex items-center justify-center font-semibold">{s.name[0]}</div>
                      <div>
                        <div className="font-semibold">{s.name}</div>
                        <p className="text-sm text-muted mt-1">{s.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE (no dates, boxed cards as in your design) */}
        <section id="experience" className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold">{TRANSLATIONS[lang].experience.title}</h2>
            <p className="text-muted mt-2">{TRANSLATIONS[lang].experience.subtitle}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRANSLATIONS[lang].experience.items.map((it: any, idx: number) => (
              <article key={idx} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-slate-700">
                <h3 className="font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-muted">{it.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS / TESTIGOS */}
        <section id="testimonials" className="max-w-6xl mx-auto px-4 md:px-6 py-8 bg-bg dark:bg-darkbg">
          <header className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold">{TRANSLATIONS[lang].testimonials.title}</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRANSLATIONS[lang].testimonials.items.map((s: any) => (
              <article key={s.name} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-slate-700">
                <div className="text-4xl text-gray-200">“</div>
                <p className="mt-2 text-sm">{s.text}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-100">
                    {s.avatar && <Image src={s.avatar} alt={s.name} fill className="object-cover" />}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{s.name}</div>
                    <div className="text-xs text-muted">{s.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER (blue in light mode like header) */}
      <footer className={`${theme === "light" ? "bg-[#143c9b] text-white" : "bg-[#071027] text-white"} mt-12`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold">{lang === "es" ? "¿Por qué elegirme?" : "Why choose me?"}</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li>🚀 {lang === "es" ? "Soluciones rápidas y prácticas" : "Fast, practical solutions"}</li>
              <li>🤝 {lang === "es" ? "Trabajo en equipo y compromiso" : "Team player & dependable"}</li>
              <li>💡 {lang === "es" ? "Creatividad y atención al detalle" : "Creative & detail-oriented"}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">{lang === "es" ? "Contacto" : "Contact"}</h4>
            <div className="mt-3 text-sm text-white/90">
              <div>✉️ jack.limas@email.com</div>
              <div>📱 +57 316 171 5563</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">{lang === "es" ? "Sígueme" : "Follow"}</h4>
            <div className="mt-3 flex gap-3">
              <a href="https://github.com/Jack-Limas" target="_blank" rel="noreferrer" className="text-white/90">GitHub</a>
              <a href="#" className="text-white/90">LinkedIn</a>
              <a href="#" className="text-white/90">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 text-sm text-white/80 text-center">
            {TRANSLATIONS[lang].footer.text}
          </div>
        </div>
      </footer>
    </div>
  );
}
