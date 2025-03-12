import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { BiBrain } from 'react-icons/bi'
import { FaChartLine, FaUsers, FaBullseye, FaChartBar, FaLightbulb, FaDesktop, FaDollarSign, FaUserFriends, FaClipboardCheck, FaShoppingCart, FaBullhorn } from 'react-icons/fa'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import Login from './Login.jsx'


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
     
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        if (window.scrollY >= sectionTop) {
          setActiveSection(section.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Infographics', href: '#infographics' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          {/* Navbar */}
          <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-2"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl text-yellow-400"
                  >
                    <BiBrain />
                  </motion.div>
                  <span className="text-2xl font-bold text-blue-400">
                    MindGauge
                  </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  {navLinks.map(link => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`transition-colors hover:text-orange-600 ${
                        activeSection === link.name.toLowerCase() ? 'text-orange-600' : 'text-gray-700'
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href).scrollIntoView({
                          behavior: 'smooth'
                        })
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                  {/* Login Button */}
                  <Link to="/Login">
                    <button className="bg-yellow-400 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition-colors">
                      Login
                    </button>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="md:hidden text-yellow-400"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isNavOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white border-t"
                >
                  <div className="container mx-auto px-4 py-4">
                    {navLinks.map(link => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block py-2 text-gray-700 hover:text-orange-600"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                    {/* Mobile Login Button */}
                    <Link to="/login">
                      <button className="bg-yellow-400 text-white w-full py-2 rounded-lg hover:bg-orange-600 transition-colors">
                        Login
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

    
          <section id="home" className="relative min-h-screen flex items-center">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
              <source src="./assets/Data Analytics Background 1.mp4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center text-white"
              >
                <h1 className="text-6xl md:text-7xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
                    Intelligent Data
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent">
                    for Smarter Decisions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-12">
                  Transform your data into actionable insights with AI-powered analytics
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </section>

          {/* Infographics Section */}
          <section id="infographics" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-16  text-blue-400"
              >
                Data Insights Infographics
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
             
                {[
                  {
                    title: "Market Trends",
                    description: "Understand the latest market trends with our data.",
                    imageSrc: "https://images.unsplash.com/photo-1581091870620-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fG1hcmtldCUyMHRyZW5kc3xlbnwwfHx8fDE2MzY5MjY0MjM&ixlib=rb-1.2.1&q=80&w=400"
                  },
                  {
                    title: "Customer Insights",
                    description: "Gain insights into customer behavior and preferences.",
                    imageSrc: "https://images.unsplash.com/photo-1581091870620-2c2c2c2c2c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIyfHxjdXN0b21lciUyMGluc2lnaHR8ZW58MHx8fHwxNjM2OTI2NDI0&ixlib=rb-1.2.1&q=80&w=400"
                  },
                  {
                    title: "Brand Performance",
                    description: "Analyze your brand's performance in the market.",
                    imageSrc: "https://images.unsplash.com/photo-1581091870620-3d3d3d3d3d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDMxfHxicmFuZCUyMHBhcmZvbWFuY2V8ZW58MHx8fHwxNjM2OTI2NDI1&ixlib=rb-1.2.1&q=80&w=400"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <img src={item.imageSrc} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section id="stats" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: 4, suffix: 'M+', text: 'Active Users' },
                  { number: 98, suffix: '%', text: 'Customer Satisfaction' },
                  { number: 250, suffix: 'K+', text: 'Data Points Analyzed' },
                  { number: 15, suffix: '+', text: 'Years Experience' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                      <CountUp end={stat.number} duration={3} suffix={stat.suffix} />
                    </h3>
                    <p className="text-gray-600">{stat.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section id="solutions" className="py-20 bg-indigo-600">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center  text-blue-400 mb-16"
              >
                Our <span className="text-yellow-400">Solutions</span>
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <FaChartLine />, title: 'Predictive Analytics', desc: 'Forecast trends and make data-driven decisions' },
                  { icon: <FaUsers />, title: 'Customer Insights', desc: 'Understand your customers better than ever' },
                  { icon: <FaBullseye />, title: 'Market Intelligence', desc: 'Stay ahead of market trends and competition' },
                  { icon: <FaLightbulb />, title: 'Innovation Metrics', desc: 'Track and measure innovation success' },
                  { icon: <FaChartBar />, title: 'Performance Analytics', desc: 'Monitor and optimize business performance' },
                  { icon: <FaUserFriends />, title: 'Behavioral Analysis', desc: 'Understand user patterns and behaviors' }
                ].map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="text-yellow-400 flex gap-4 text-3xl mb-4">{solution.icon} <h3 className="text-xl font-bold  text-orange-600 mb-2">{solution.title}</h3></div>
                    
                    <p className="text-gray-600">{solution.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center text-orange-600 mb-16"
              >
                What Our Clients Say
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    quote: "MindGauge transformed how we analyze our market data. The insights are invaluable.",
                    author: "Sarah Johnson",
                    position: "CEO, TechCorp",
                    image: "https://randomuser.me/api/portraits/women/1.jpg"
                  },
                  {
                    quote: "The predictive analytics have helped us stay ahead of market trends consistently.",
                    author: "Michael Chen",
                    position: "Director of Analytics, DataFlow",
                    image: "https://randomuser.me/api/portraits/men/1.jpg"
                  },
                  {
                    quote: "Outstanding platform with exceptional customer support. Highly recommended!",
                    author: "Emma Williams",
                    position: "Head of Research, InsightCo",
                    image: "https://randomuser.me/api/portraits/women/2.jpg"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-8 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/2zj8g1g1g1g"
                    title="Data Research Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover Our Data Research Insights</h2>
                <p className="text-gray-600 mb-6">
                  Dive into the world of data research with MindGauge. Our platform provides you with the tools and insights necessary to harness the power of data for your business decisions.
                </p>
                <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </section>

          {/* News Section */}
          <section id="news" className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-blue-400 text-center mb-16"
              >
                Latest Updates
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "MindGauge Launches New AI Analytics Platform",
                    date: "June 15, 2024",
                    category: "Product Update",
                    image: "https://picsum.photos/seed/1/400/250"
                  },
                  {
                    title: "Understanding Data Privacy in 2024",
                    date: "June 10, 2024",
                    category: "Industry Insights",
                    image: "https://picsum.photos/seed/2/400/250"
                  },
                  {
                    title: "The Future of Predictive Analytics",
                    date: "June 5, 2024",
                    category: "Research",
                    image: "https://picsum.photos/seed/3/400/250"
                  }
                ].map((news, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="text-yellow-400 text-sm mb-2">{news.category}</div>
                      <h3 className="text-xl font-bold text-black mb-2">{news.title}</h3>
                      <p className="text-gray-600">{news.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center text-orange-400 mb-16"
              >
                How It Works
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "Step 1",
                    description: "Collect data from various sources.",
                    icon: <FaChartLine className="text-yellow-400 text-4xl mb-4" />
                  },
                  {
                    step: "Step 2",
                    description: "Analyze the data using advanced algorithms.",
                    icon: <FaBullseye className="text-orange-600 text-4xl mb-4" />
                  },
                  {
                    step: "Step 3",
                    description: "Generate actionable insights for decision-making.",
                    icon: <FaLightbulb className="text-red-600 text-4xl mb-4" />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <h3 className="text-xl text-black font-bold">{item.step}</h3>
                    </div>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold  text-blue-400 text-center mb-16"
              >
                Get in Touch
              <p className="text-lg text-gray-600 text-center mb-8">
                We would love to hear from you! Whether you have <br /> questions, feedback,  or just want to connect, feel free to reach out. <br /> Our team is here to assist you and provide the information you need.
              </p>
              </motion.h2>
              <div className="max-w-2xl mx-auto">
                <motion.form
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-orange-600 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-orange-600 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-orange-600 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all"
                      rows="6"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-yellow-400 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-blue-400 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-12">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <BiBrain className="text-3xl text-yellow-400" />
                    <span className="text-2xl font-bold">MindGauge</span>
                  </div>
                  <p className="text-gray-200">
                    Transforming data into actionable insights for better business decisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                  <ul className="space-y-4">
                    {navLinks.map(link => (
                      <li key={link.name}>
                        <a href={link.href} className="text-gray-200 hover:text-yellow-400 transition-colors">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-6">Contact</h3>
                  <ul className="space-y-4 text-gray-200">
                    <li>contact@mindgauge.com</li>
                    <li>+263 78 744 9643</li>
                    <li>194 Baines Ave<br />Harare, Zimbabwe</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-6">Newsletter</h3>
                  <div className="space-y-4">
                    <p className="text-gray-200">Stay updated with our latest insights</p>
                    <div className="flex">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="flex-1 px-4 py-2 w-40 rounded-l-lg focus:outline-none"
                      />
                      <button className="bg-yellow-400 px-2 py-2 rounded-r-lg hover:bg-orange-600 transition-colors">
                        ➔
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-yellow-400 mt-8 text-center text-gray-200">
                <p className="pt-6">© {new Date().getFullYear()} MindGauge. All rights reserved.</p>
              </div>
            </div>
          </footer>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 1 : 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-yellow-400 text-white p-4 rounded-full shadow-lg z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App