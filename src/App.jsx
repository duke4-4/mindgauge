import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [gameNumber, setGameNumber] = useState(Math.floor(Math.random() * 10) + 1)
  const [userGuess, setUserGuess] = useState('')
  const [gameMessage, setGameMessage] = useState('')

  const checkGuess = () => {
    const guess = parseInt(userGuess)
    if (isNaN(guess)) {
      setGameMessage('Please enter a valid number')
      return
    }
    if (guess === gameNumber) {
      setGameMessage('🎉 Correct! Try a new number')
      setGameNumber(Math.floor(Math.random() * 10) + 1)
    } else {
      setGameMessage(guess > gameNumber ? 'Too high!' : 'Too low!')
    }
    setUserGuess('')
  }

  return (
    <div className="min-h-screen relative bg-gray-900 text-white overflow-hidden">
      {/* Animated background with floating dev icons */}
      <style>
        {`
          .float-icon {
            position: absolute;
            animation: moveRandom 20s linear infinite;
          }
          @keyframes moveRandom {
            0% {
              transform: translate(var(--startX), var(--startY));
            }
            50% {
              transform: translate(var(--randomX), var(--randomY));
            }
            100% {
              transform: translate(var(--startX), var(--startY));
            }
          }
        `}
      </style>
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const size = Math.random() * (32 - 20) + 20;
          
          return (
            <div 
              key={i}
              className="float-icon text-white"
              style={{
                '--startX': `${startX}vw`,
                '--startY': `${startY}vh`,
                '--randomX': `${randomX}vw`,
                '--randomY': `${randomY}vh`,
                animationDelay: `${-Math.random() * 20}s`,
                width: `${size}px`,
                height: `${size}px`,
                left: `${startX}%`,
                top: `${startY}%`
              }}
            >
              {i % 10 === 0 && (
                // React Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.469zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/>


                </svg>
              )}
              {i % 10 === 1 && (
                // Vite Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L1.75 4.5v15L12 24l10.25-4.5v-15L12 0zm8.5 18.25L12 21.75l-8.5-3.5v-11L12 3.75l8.5 3.5v11z"/>
                </svg>
              )}
              {i % 10 === 2 && (
                // Tailwind Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
              )}
              {i % 10 === 3 && (
                // HTML Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
              )}
              {i % 10 === 4 && (
                // JavaScript Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                </svg>
              )}
              {i % 10 === 5 && (
                // Bootstrap Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.062 12h13.876c.777 0 1.062.575 1.062 1.125v2.25C20 16.425 19.075 17 18.938 17H5.062C4.285 17 4 16.425 4 15.875v-2.25C4 12.575 4.925 12 5.062 12zM5.062 4h13.876C19.715 4 20 4.575 20 5.125v2.25C20 8.425 19.075 9 18.938 9H5.062C4.285 9 4 8.425 4 7.875v-2.25C4 4.575 4.925 4 5.062 4z"/>
                </svg>
              )}
              {i % 10 === 6 && (
                // TypeScript Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                </svg>
              )}
              {i % 10 === 7 && (
                // Figma Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539z"/>
                </svg>
              )}
              {i % 10 === 8 && (
                // Code Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"/>
                </svg>
              )}
              {i % 10 === 9 && (
                // VS Code Icon
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                </svg>
              )}
            </div>
          );
        })}
      </div>


      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex justify-center items-center gap-8 mb-12">
          <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
          </a>
        </div>

        <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent mb-12">
          Modern Web Development
        </h1>

        {/* New Tech Stack section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Built With Modern Tech
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center gap-4 mb-4">
                <img src={reactLogo} className="h-8 w-8 group-hover:animate-spin-slow" alt="React logo" />
                <h3 className="text-2xl font-semibold text-blue-400">React</h3>
              </div>
              <p className="text-gray-300 mb-4">
                A JavaScript library for building user interfaces with a powerful component-based architecture and efficient rendering system.
              </p>
              <a 
                href="https://react.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read Documentation 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="group bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="flex items-center gap-4 mb-4">
                <img src={viteLogo} className="h-8 w-8" alt="Vite logo" />
                <h3 className="text-2xl font-semibold text-yellow-400">Vite</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Next generation frontend tooling that offers lightning-fast HMR and real-time file serving for modern web projects.
              </p>
              <a 
                href="https://vitejs.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Read Documentation 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="group bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-teal-500/50 transition-all hover:shadow-lg hover:shadow-teal-500/10">
              <div className="flex items-center gap-4 mb-4">
                <svg className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
                <h3 className="text-2xl font-semibold text-teal-400">Tailwind CSS</h3>
              </div>
              <p className="text-gray-300 mb-4">
                A utility-first CSS framework that enables rapid UI development with composable classes and modern styling.
              </p>
              <a 
                href="https://tailwindcss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
              >
                Read Documentation 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">About Vite</h2>
            <p className="text-gray-300 mb-4">
              Vite is a modern frontend build tool that offers a faster and leaner development experience. 
              It provides instant server start, lightning-fast HMR (Hot Module Replacement), and optimized builds.
            </p>
            <a href="https://vitejs.dev/guide/" target="_blank" 
              className="text-purple-400 hover:text-purple-300 underline">
              Learn more about Vite →
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">About React</h2>
            <p className="text-gray-300 mb-4">
              React is a JavaScript library for building user interfaces. It lets you create reusable UI components
              that manage their own state, making it easier to build complex applications.
            </p>
            <a href="https://react.dev/learn" target="_blank" 
              className="text-blue-400 hover:text-blue-300 underline">
              Learn more about React →
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-teal-400">Number Guessing Game</h2>
            <p className="text-gray-300 mb-4">Guess a number between 1 and 10:</p>
            <div className="flex gap-4 mb-4">
              <input 
                type="number" 
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                className="bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter number"
              />
              <button 
                onClick={checkGuess}
                className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Guess
              </button>
            </div>
            {gameMessage && (
              <p className="text-teal-300">{gameMessage}</p>
            )}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Tailwind CSS</h2>
            <p className="text-gray-300 mb-4">
              Tailwind CSS is a utility-first CSS framework that helps you build custom designs without leaving your HTML.
              It provides low-level utility classes that let you build completely custom designs.
            </p>
            <a href="https://tailwindcss.com/docs" target="_blank" 
              className="text-green-400 hover:text-green-300 underline">
              Explore Tailwind Documentation →
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 border border-gray-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 inline-block">
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              Counter Demo
            </p>
            <div className="flex items-center justify-center gap-6">
              <button 
                onClick={() => setCount(c => c - 1)}
                className="bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              
              <div className="bg-gray-700/30 backdrop-blur-sm rounded-lg px-6 py-3 min-w-[100px]">
                <span className="text-2xl font-bold text-white">{count}</span>
              </div>

              <button 
                onClick={() => setCount(c => c + 1)}
                className="bg-blue-500/50 hover:bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                </svg>
              </button>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Try clicking the buttons to update the counter
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p className="mb-2">
            Edit <code className="bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default App
