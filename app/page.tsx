'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Moon, Sun, Mail, Send, ArrowRight, ChevronDown } from 'lucide-react'
const experiences = [
  {
    company: "MU AI Labs x Soft Bank Group",
    position: "Machine Learning Research Intern",
    date: "May 2023 - Aug 2023",
    logo: "/photos/sb.png", // Update with actual logo path
    description: [
      "Synthesized and delivered technical presentations on 3 research papers, creating efficient Python solutions for advanced audio data analysis.",
      "Applied HTS-AT and AST models to process 24+ hours of spectrograms, driving innovative solutions to improve wildlife monitoring and enhance product development for anti-poaching efforts."
    ]
  },
  {
    company: "Vertex Inc",
    position: "Product Marketing Intern",
    date: "June 2024 - August 2023",
    logo: "/photos/vertex.jpg", // Update with actual logo path
    description: ["Executed market and user research to develop product briefs, aligning features with user requirements and market needs, ensuring effective product positioning and driving a 0.45% CTR.",
    "Assisted in the development and execution of a targeted marketing campaign, leveraging product messaging to drive engagement and boosted brand awareness by 10%."
    ]
  },
  {
    company: "Hello Love - HealthTech Startup",
    position: "Software Engineer Intern",
    date: "Jan 2024 - Apr 2024",
    logo: "/photos/hellolove.png", // Update with actual logo path
    description: [
      "Developed the front-end of the Libra Health App with a team of 5, using Next.js for superior user experience and Storyblok as the headless CMS for dynamic content management, ensuring scalability and engagement."
    ]
  },
  {
    company: "Hack For LA",
    position: "Product Management Intern",
    date: "June 2023 - Sep 2023",
    logo: "/photos/hackforla.png", // Update with actual logo path
    description: [
      "Assisted directing a 15-member team, crafting a strategic product roadmap and optimizing cross-functional workflows between UX designers and engineers.",
      "Conducted user requirement research to inform and prioritize product feature enhancements, ensuring alignment with user needs and market trends."
      
    ]
  }
];

const projects = [
  {
    title: "Hierarchical To Do List App",
    image: "/photos/htd.png", // Update with actual project image
    description: [
      "Created a feature-rich hierarchical ToDo List app, incorporating user authentication, CRUD functionality, task hierarchy management, and customizable display options."
    ],
    technologies: ["Python", "SQL", "Flask", "HTML", "JS"],
    link: "https://github.com/sanamehta/hierarchical_todo"
  },
  {
    title: "Tonight Telegram Bot",
    image: "/photos/TB.png",
    description: [
      "Collaborated with a team of 5 and designed and developed a Telegram Bot for Minerva students, for dynamic local locations discovery in new cities using Python and Flask. Conducted user research to iteratively refine the bot, enhancing customer engagement and satisfaction."
    ],
    technologies: ["Python", "Flask", "Open AI", "API"],
    link: "https://github.com/minerva-university/TelegramBot"
  },
  {
    title: "Reversi AI Game",
    image: "/photos/r.png",
    description: ["Created a Python-based Reversi game with a command-line interface for human vs. AI gameplay, implementing the Minimax algorithm with alpha-beta pruning for three difficulty levels. Applied OOP principles to modularize board operations, game flow, and AI logic" ],
    technologies: ["Python", "OOP","AI"],
    link: "http://github.com/sanamehta/reversi-ai"
  },
  {
    title: "Habita Wise",
    image: "/photos/HW.png",
    description: [
      " An extension for rental websites that provides a holistic score for a property predicted through a ML model based on the provided data "
    ],
    technologies: ["Machine Learning", "API", "React"],
    link: "https://github.com/sanamehta/habita-wise"
  }
];

export default function Portfolio() {
  const [role, setRole] = useState('Web Developer')
  const roles = ['Web Developer', 'Marketer', 'Product Manager', 'Analyst']
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  useEffect(() => {
    setMounted(true)
    let roleIndex = 0
    const interval = setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length
      setRole(roles[roleIndex])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-10 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
            </motion.span>
            <div className="flex items-center space-x-6">
              <a href="#about" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#education" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Education</a>
              <a href="#experience" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Projects</a>
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <a href="https://linkedin.com/sana-mehta/" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/sanamehta" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <button 
                  onClick={toggleTheme} 
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6">
        <section id="about" className="min-h-screen flex items-center py-20">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/3 mb-6 md:mb-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/photos/profile.jpg" 
                alt="Sana"
                width={400}
                height={400}
                className="rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
              />
            </motion.div>
            <motion.div 
              className="md:w-2/3 md:pl-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl font-bold mb-4 dark:text-white bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Hi, I'm Sana
              </h1>
              <p className="text-3xl mb-6 dark:text-gray-300">
                I am a <span className="font-semibold text-blue-500 dark:text-blue-400">{role}</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Currently a senior at Minerva University, double majoring in Business Administration and Computer Science. Over the years I have gained hands-on experience through internships in various roles. I enjoy turning complex challenges into user-friendly solutions. My background spans product strategy, data analysis, and digital development, allowing me to work cross-functionally and bring fresh, impactful ideas to each project. I’m always exploring new ways to connect technology with real-world needs.
              </p>
          

              <motion.div 
                className="mt-8 flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a 
                  href="https://docs.google.com/document/d/1g-L4tkrZI4lHcY2JJFt6rpMQA-Fgubus5gP5i-ncOB4/edit?usp=sharing" // Replace with your actual resume link
                  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

          </div>
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="text-gray-400" />
          </motion.div>
        </section>

        <motion.section 
          id="education" 
          className="py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10 dark:text-white text-center">
            <span className="border-b-4 border-blue-500 pb-2">Education</span>
          </h2>
          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src="/photos/Logo-Minerva.png"
                  alt="University logo"
                  width={64}
                  height={64}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white"> Minerva University</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Bachelors of Science in Business Administration and Computer Science</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2021 - 2025 </p>
                <p className="mt-4 dark:text-gray-300">
                  <li>Enrolled in a highly selective university (1.2% acceptance rate); studying and travelling in 7 international cities for four years to develop a global perspective.</li>
                  <li>Relevant coursework included web development, data structures, and algorithms.</li>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

       

        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-10 dark:text-white text-center">
            <span className="border-b-4 border-blue-500 pb-2">Experience</span>
          </h2>
          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={64}
                      height={64}
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{experience.company}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{experience.position}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{experience.date}</p>
                    <ul className="mt-4 dark:text-gray-300 list-disc pl-4 space-y-2">
                      {experience.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>



        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-10 dark:text-white text-center">
            <span className="border-b-4 border-blue-500 pb-2">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <ul className="text-gray-600 dark:text-gray-300 mb-4 list-disc pl-4 space-y-2">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 group"
                >
                  View Project
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>


<section id="contact" className="py-20">
  <h2 className="text-3xl font-bold mb-10 dark:text-white text-center">
    <span className="border-b-4 border-blue-500 pb-2">Contact Me</span>
  </h2>
  <motion.div 
    className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="text-center space-y-6">
      <p className="text-gray-600 dark:text-gray-300 text-lg">
        I'm always open to discussing new projects, opportunities, or partnerships.
      </p>
      
      <div className="flex flex-col space-y-4">
        <a 
          href="mailto:iamsanamehta@gmail.com" 
          className="flex items-center justify-center space-x-3 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          <Mail className="text-blue-500 dark:text-blue-400" size={24} />
          <span className="text-gray-800 dark:text-gray-200">iamsanamehta@gmail.com</span>
        </a>
        
        <div className="flex justify-center space-x-4">
          <a 
            href="https://linkedin.com/sana-mehta/" 
            className="p-3 bg-blue-50 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-blue-500 dark:text-blue-400" size={24} />
          </a>
          <a 
            href="https://github.com/sanamehta" 
            className="p-3 bg-blue-50 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="text-blue-500 dark:text-blue-400" size={24} />
          </a>
        </div>
      </div>

      <motion.button
        className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Send size={20} />
        <span>Get in Touch</span>
      </motion.button>
    </div>
  </motion.div>
</section>


      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6">
            <Link href="https://linkedin.com/sana-mehta/" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </Link>
            <Link href="https://github.com/sanamehta" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
              <Github size={24} />
            </Link>
            <Link href="mailto:iamsanamehta@gmail.com" className="hover:text-blue-400 transition-colors" aria-label="Email">
              <Mail size={24} />
            </Link>
          </div>
          <p className="text-center mt-4 text-gray-400">&copy; 2024 Sana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}