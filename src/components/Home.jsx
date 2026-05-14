import React from 'react';

function Home({ onNavigate }) {
  return (
    <div className="max-w-md w-full bg-white rounded-[2rem] shadow-sm p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium text-sprout-text mb-2">
          Hi there. 🌱
        </h2>
        <p className="text-gray-400 text-sm">
          How is your brain feeling right now?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Brain Dump Button */}
        <button 
          onClick={() => onNavigate('brainDump')}
          className="bg-sprout-peach bg-opacity-40 hover:bg-opacity-60 text-sprout-text py-4 px-6 rounded-2xl font-medium transition-all flex items-center justify-between w-full"
        >
          <span>Too many thoughts</span>
          <span className="text-xl">🧠</span>
        </button>
        
        {/* Micro-steps Button (We'll build this in Phase 5) */}
        <button className="bg-sprout-primary bg-opacity-40 hover:bg-opacity-60 text-sprout-text py-4 px-6 rounded-2xl font-medium transition-all flex items-center justify-between w-full">
          <span>I can't start</span>
          <span className="text-xl">🧊</span>
        </button>

        {/* Timer Button is now wired up! */}
        <button 
          onClick={() => onNavigate('timer')}
          className="bg-gray-100 hover:bg-gray-200 text-sprout-text py-4 px-6 rounded-2xl font-medium transition-all flex items-center justify-between w-full"
        >
          <span>I just need to focus</span>
          <span className="text-xl">⏱️</span>
        </button>
      </div>
    </div>
  );
}

export default Home;