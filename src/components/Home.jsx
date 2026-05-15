import React from 'react';

function Home({ onNavigate }) {
  return (
    <div className="relative min-h-[500px] w-full max-w-md flex items-center justify-center animate-fade-in">
      
      {/* Background Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-sprout-lavender rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-sprout-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sprout-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Glassmorphism Card */}
      <div className="relative w-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-lg border border-white/50 p-8 flex flex-col items-center z-10">
        
        {/* Floating Header Avatar */}
        <div className="w-20 h-20 bg-white/80 rounded-[1.5rem] flex items-center justify-center text-4xl mb-6 shadow-sm animate-float border border-white">
          🌱
        </div>
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-sprout-text mb-3 tracking-tight">
            Hi, bestie. ✨
          </h2>
          <div className="bg-white/50 backdrop-blur-sm px-6 py-2.5 rounded-full inline-block border border-white/60 shadow-sm">
            <p className="text-gray-500 text-sm font-medium">
              Take a deep breath. You're safe here.
            </p>
          </div>
        </div>

        {/* Upgraded Menu Buttons */}
        <div className="w-full flex flex-col gap-4">
          
          <button 
            onClick={() => onNavigate('brainDump')}
            className="group bg-white/70 hover:bg-white/90 border border-white/50 text-sprout-text py-5 px-6 rounded-[2rem] font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center justify-between w-full"
          >
            <div className="flex items-center gap-4">
              <div className="bg-sprout-peach/50 w-12 h-12 flex items-center justify-center rounded-[1.2rem] group-hover:scale-110 transition-transform duration-300">🧠</div>
              <div className="flex flex-col items-start">
                <span className="text-lg">Brain Dump</span>
                <span className="text-xs text-gray-400 font-normal">Clear the mental clutter</span>
              </div>
            </div>
            <span className="text-gray-300 group-hover:text-sprout-text transition-colors duration-300">→</span>
          </button>
          
          <button 
            onClick={() => onNavigate('microSteps')}
            className="group bg-white/70 hover:bg-white/90 border border-white/50 text-sprout-text py-5 px-6 rounded-[2rem] font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center justify-between w-full"
          >
            <div className="flex items-center gap-4">
              <div className="bg-sprout-blue/30 w-12 h-12 flex items-center justify-center rounded-[1.2rem] group-hover:scale-110 transition-transform duration-300">🧊</div>
              <div className="flex flex-col items-start">
                <span className="text-lg">Melt the Ice</span>
                <span className="text-xs text-gray-400 font-normal">When you can't start</span>
              </div>
            </div>
            <span className="text-gray-300 group-hover:text-sprout-text transition-colors duration-300">→</span>
          </button>

          <button 
            onClick={() => onNavigate('timer')}
            className="group bg-white/70 hover:bg-white/90 border border-white/50 text-sprout-text py-5 px-6 rounded-[2rem] font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center justify-between w-full"
          >
            <div className="flex items-center gap-4">
              <div className="bg-sprout-lavender/40 w-12 h-12 flex items-center justify-center rounded-[1.2rem] group-hover:scale-110 transition-transform duration-300">⏱️</div>
              <div className="flex flex-col items-start">
                <span className="text-lg">Soft Focus</span>
                <span className="text-xs text-gray-400 font-normal">Gentle study sessions</span>
              </div>
            </div>
            <span className="text-gray-300 group-hover:text-sprout-text transition-colors duration-300">→</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Home;