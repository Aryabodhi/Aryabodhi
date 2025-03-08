import React from 'react';
import { Mail, Twitter, Youtube } from 'lucide-react';
import ZenEnso from './components/ZenEnso';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl -top-96 -left-96 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse delay-1000"></div>
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse delay-500"></div>
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 perspective-[2000px]">
          <div className="absolute inset-0 transform-gpu rotate-x-60 scale-y-125 -translate-y-1/4">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent bg-[length:50px_50px] bg-grid-pattern"></div>
          </div>
        </div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl backdrop-blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) translateZ(${Math.random() * 100}px)`,
              animation: `float ${10 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * -2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* 3D Logo Container */}
          <div className="flex items-center justify-center mb-8 perspective-[1000px] transform-gpu hover:scale-110 transition-transform duration-500">
            <div className="relative transform-gpu rotate-y-12 hover:rotate-y-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-50"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-full border border-slate-700/50">
                <ZenEnso className="w-24 h-24 text-purple-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:scale-105 transform-gpu transition-transform duration-500">
            Aryabodi Games
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 hover:text-white transition-colors">
            Crafting the next generation of immersive gaming experiences
          </p>

          {/* Newsletter signup with 3D effect */}
          <div className="max-w-md mx-auto mb-12 transform-gpu hover:scale-105 transition-transform duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-30"></div>
              <div className="relative flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          {/* Social links with hover effects */}
          <div className="flex justify-center gap-8">
            {[
              { icon: Twitter, href: '#' },
              { icon: Youtube, href: '#' },
              { icon: Mail, href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group relative p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:scale-110 transform-gpu transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;