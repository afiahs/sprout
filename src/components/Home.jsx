import React from 'react';

function Home({ onNavigate }) {
  return (
    <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-sm p-8 border border-gray-50 flex flex-col items-center animate-fade-in">
      
      {/* Cutesy Header Avatar */}
      <div className="w-20 h-20 bg-sprout-primary bg-opacity-20 rounded-full flex items-center justify-center text-4xl mb-4 shadow-sm">
        🌱
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-medium text-sprout-text mb-2 tracking-tight">
          Hi, bestie. ✨
        </h2>
        {/* Soft pill-shaped affirmation */}
        <div className="bg-sprout-bg px-5 py-2 rounded-full inline-block mt-1">
          <p className="text-gray-500 text-sm font-medium">
            You are doing great today.
          </p>
        </div>
      </div>

      {/* Upgraded Menu Buttons */}
      <div className="w-full flex flex-col gap-4">
        
        {/* Brain Dump */}
        <button 
          onClick={() => onNavigate('brainDump')}
          className="group bg-sprout-peach bg-opacity-40 hover:bg-opacity-70 text-sprout-text py-5 px-6 rounded-[2rem] font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">🧠</div>
            <span className="text-lg">Brain Dump</span>
          </div>
          <span className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Clear your mind →</span>
        </button>
        
        {/* Micro-steps */}
        <button 
          onClick={() => onNavigate('microSteps')}
          className="group bg-sprout-primary bg-opacity-40 hover:bg-opacity-70 text-sprout-text py-5 px-6 rounded-[2rem] font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">🧊</div>
            <span className="text-lg">Melt the Ice</span>
          </div>
          <span className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tiny steps →</span>
        </button>

        {/* Timer */}
        <button 
          onClick={() => onNavigate('timer')}
          className="group bg-gray-50 hover:bg-gray-100 border border-gray-100 text-sprout-text py-5 px-6 rounded-[2rem] font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">⏱️</div>
            <span className="text-lg">Soft Focus</span>
          </div>
          <span className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">25 mins →</span>
        </button>

      </div>
    </div>
  );
}

export default Home;