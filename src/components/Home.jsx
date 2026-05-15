import React, { useState, useEffect } from 'react';

function Home({ onNavigate }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleSleepyMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="relative min-h-[500px] w-full max-w-md flex flex-col items-center justify-center animate-fade-in p-6">
      
      {/* ✨ The Glowing Purplish/Bluish Background Blobs ✨ */}
      <div className="absolute top-4 -left-8 w-64 h-64 bg-sprout-blue/60 rounded-full blur-3xl opacity-70 animate-blob transition-colors duration-500"></div>
      <div className="absolute top-4 -right-8 w-64 h-64 bg-sprout-pink/60 rounded-full blur-3xl opacity-70 animate-blob transition-colors duration-500" style={{ animationDelay: "2s" }}></div>
      <div className="absolute -bottom-8 left-12 w-64 h-64 bg-sprout-lavender/60 rounded-full blur-3xl opacity-70 animate-blob transition-colors duration-500" style={{ animationDelay: "4s" }}></div>

      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-20">
        <button 
          onClick={toggleSleepyMode}
          className="w-10 h-10 rounded-full bg-sprout-card backdrop-blur-md border border-sprout-border flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-transform"
          title="Toggle Sleepy Mode"
        >
          {isDark ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Main Glass Card */}
      <div className="relative w-full bg-sprout-card backdrop-blur-xl rounded-[2.5rem] shadow-lg border border-sprout-border p-8 flex flex-col items-center z-10 transition-colors duration-500">
        
        {/* 🌿 Floating Sprout */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-white/50 dark:bg-black/20 rounded-3xl blur-xl animate-pulse transition-colors duration-500"></div>
          <div className="relative w-20 h-20 bg-sprout-btn rounded-3xl shadow-sm flex items-center justify-center animate-float border border-sprout-border transition-colors duration-500 z-10">
            <span className="text-4xl">🌱</span>
          </div>
        </div>

        <h1 className="text-3xl font-semibold text-sprout-text mb-2 tracking-tight transition-colors duration-500">Hi, bestie.✨</h1>
        
        <div className="bg-sprout-btn py-2 px-6 rounded-full border border-sprout-border mb-10 shadow-sm transition-colors duration-500">
          <p className="text-sm font-medium text-sprout-text transition-colors duration-500">Take a deep breath. You're safe here.</p>
        </div>

        {/* Navigation Menu */}
        <div className="w-full flex flex-col gap-4">
          
          <button onClick={() => onNavigate('brainDump')} className="group w-full bg-sprout-btn hover:bg-sprout-peach/30 border border-sprout-border rounded-3xl p-5 flex items-center transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-sprout-peach/50 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">🧠</div>
            <div className="flex flex-col items-start flex-1">
              <span className="font-semibold text-sprout-text transition-colors duration-500">Brain Dump</span>
              <span className="text-xs text-sprout-text opacity-70 font-medium transition-colors duration-500">Clear the mental clutter</span>
            </div>
            <span className="text-sprout-text opacity-50 group-hover:opacity-100 transition-colors duration-500">→</span>
          </button>

          <button onClick={() => onNavigate('microSteps')} className="group w-full bg-sprout-btn hover:bg-sprout-blue/30 border border-sprout-border rounded-3xl p-5 flex items-center transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-sprout-blue/50 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">🧊</div>
            <div className="flex flex-col items-start flex-1">
              <span className="font-semibold text-sprout-text transition-colors duration-500">Melt the Ice</span>
              <span className="text-xs text-sprout-text opacity-70 font-medium transition-colors duration-500">When you can't start</span>
            </div>
            <span className="text-sprout-text opacity-50 group-hover:opacity-100 transition-colors duration-500">→</span>
          </button>

          <button onClick={() => onNavigate('timer')} className="group w-full bg-sprout-btn hover:bg-sprout-primary/30 border border-sprout-border rounded-3xl p-5 flex items-center transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-sprout-primary/40 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">⏱️</div>
            <div className="flex flex-col items-start flex-1">
              <span className="font-semibold text-sprout-text transition-colors duration-500">Soft Focus</span>
              <span className="text-xs text-sprout-text opacity-70 font-medium transition-colors duration-500">Gentle timer for small tasks</span>
            </div>
            <span className="text-sprout-text opacity-50 group-hover:opacity-100 transition-colors duration-500">→</span>
          </button>

          <button onClick={() => onNavigate('studyRoom')} className="group w-full bg-sprout-btn hover:bg-sprout-lavender/30 border border-sprout-border rounded-3xl p-5 flex items-center transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-sprout-lavender/40 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">☕️</div>
            <div className="flex flex-col items-start flex-1">
              <span className="font-semibold text-sprout-text transition-colors duration-500">Study Together</span>
              <span className="text-xs text-sprout-text opacity-70 font-medium transition-colors duration-500">Cozy ambient focus room</span>
            </div>
            <span className="text-sprout-text opacity-50 group-hover:opacity-100 transition-colors duration-500">→</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Home;