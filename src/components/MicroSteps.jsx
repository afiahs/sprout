import React, { useState } from 'react';

function MicroSteps({ onNavigate }) {
  const [bigTask, setBigTask] = useState('');
  const [isUnfreezing, setIsUnfreezing] = useState(false);

  // We use a simple array of universal "unfreezing" steps
  const defaultSteps = [
    "Take one deep breath and drop your shoulders.",
    "Get a glass of water or a comforting drink.",
    "Open the document, app, or tool you need. (Don't start, just open it).",
    "Do the task very poorly for exactly 2 minutes."
  ];

  return (
    <div className="max-w-md w-full bg-white rounded-[2rem] shadow-sm p-8 border border-gray-100 animate-fade-in">
      <button 
        onClick={() => onNavigate('home')}
        className="text-gray-400 hover:text-gray-600 text-sm mb-6 flex items-center gap-1 transition-colors"
      >
        ← Back to home
      </button>

      {!isUnfreezing ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-sprout-text">Let's Unfreeze 🧊</h2>
          <p className="text-gray-400 text-sm">
            Task paralysis is real. What is the big, scary thing you are avoiding right now?
          </p>
          <input 
            type="text"
            className="w-full p-4 bg-sprout-bg border-none rounded-xl focus:ring-2 focus:ring-sprout-primary outline-none text-sprout-text transition-all"
            placeholder="e.g., Writing my final essay..."
            value={bigTask}
            onChange={(e) => setBigTask(e.target.value)}
          />
          <button 
            onClick={() => {
              if (bigTask.trim()) setIsUnfreezing(true);
            }}
            className="bg-sprout-primary bg-opacity-40 hover:bg-opacity-60 text-sprout-text py-4 rounded-xl font-medium transition-all"
          >
            Melt the ice
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-medium text-sprout-text mb-2">Tiny Steps 🌱</h2>
            <p className="text-gray-400 text-sm">
              Forget the big goal for a second. Just do these tiny things to break the friction.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            {defaultSteps.map((step, index) => (
              <div key={index} className="flex gap-3 p-4 bg-sprout-bg rounded-xl">
                <span className="font-bold text-sprout-primary opacity-60">{index + 1}.</span>
                <span className="text-sprout-text text-sm">{step}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setIsUnfreezing(false)}
            className="text-gray-400 text-sm mt-2 hover:text-gray-600 transition-colors"
          >
            ← I need to tackle a different task
          </button>
        </div>
      )}
    </div>
  );
}

export default MicroSteps;