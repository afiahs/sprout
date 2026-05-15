import React, { useState } from 'react';

function BrainDump({ onNavigate }) {
  const [dumpText, setDumpText] = useState('');
  const [isCleared, setIsCleared] = useState(false);

  const handleClear = () => {
    if (dumpText.trim() === '') return; // Don't clear if it's already empty
    
    setDumpText('');
    setIsCleared(true);
    
    // Hide the success message after 3 seconds
    setTimeout(() => {
      setIsCleared(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-[500px] w-full max-w-md flex flex-col items-center justify-center animate-fade-in p-6">
      
      {/* Back Button */}
      <div className="w-full flex justify-start mb-4 z-20">
        <button 
          onClick={() => onNavigate('home')}
          className="text-gray-400 hover:text-sprout-text transition-colors font-medium text-sm flex items-center gap-2"
        >
          ← Back to safe space
        </button>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative w-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-lg border border-white/50 p-8 flex flex-col items-center z-10 min-h-[450px]">
        
        <div className="text-4xl mb-2">☁️</div>
        <h2 className="text-2xl font-medium text-sprout-text mb-2 text-center tracking-tight">Empty your mind.</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Type everything taking up space in your head. It doesn't have to make sense.
        </p>

        {/* Text Area */}
        <div className="w-full relative mb-6">
          <textarea
            value={dumpText}
            onChange={(e) => setDumpText(e.target.value)}
            placeholder="I'm feeling overwhelmed by..."
            className="w-full h-48 bg-white/70 border border-white/50 rounded-2xl p-4 text-sprout-text focus:outline-none focus:ring-2 focus:ring-sprout-blue/50 resize-none shadow-sm placeholder:text-gray-300 transition-all"
          ></textarea>
          
          {/* Gentle success overlay when cleared */}
          {isCleared && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-fade-in">
              <span className="text-sprout-text font-medium flex items-center gap-2">
                ✨ Mind cleared. You can let it go now.
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex w-full gap-4">
          <button 
            onClick={handleClear}
            disabled={dumpText.trim() === ''}
            className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
              dumpText.trim() === '' 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-sprout-peach/50 hover:bg-sprout-peach/80 text-sprout-text hover:shadow-md hover:-translate-y-0.5'
            }`}
          >
            Clear the clutter
          </button>
        </div>

      </div>
    </div>
  );
}

export default BrainDump;