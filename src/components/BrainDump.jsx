import React, { useState, useEffect } from 'react';

function BrainDump({ onNavigate }) {
  const [dumpText, setDumpText] = useState('');
  
  // 1. INITIALIZE FROM MEMORY:
  // Instead of starting empty, we look inside localStorage first.
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('sprout-tasks');
    // If we found saved tasks, parse them from text back into code. Otherwise, start empty [].
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [isOrganized, setIsOrganized] = useState(() => {
    const savedState = localStorage.getItem('sprout-organized');
    return savedState === 'true';
  });

  // 2. SAVE TO MEMORY:
  // Every time 'tasks' or 'isOrganized' changes, this runs automatically.
  useEffect(() => {
    localStorage.setItem('sprout-tasks', JSON.stringify(tasks));
    localStorage.setItem('sprout-organized', isOrganized);
  }, [tasks, isOrganized]);

  const handleOrganize = () => {
    if (!dumpText.trim()) return; 
    
    const splitTasks = dumpText.split('\n').filter(task => task.trim() !== '');
    setTasks(splitTasks.map(task => ({ text: task, completed: false })));
    setIsOrganized(true);
    setDumpText(''); // Clear the typing box after organizing
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md w-full bg-white rounded-[2rem] shadow-sm p-8 border border-gray-100">
      <button 
        onClick={() => onNavigate('home')}
        className="text-gray-400 hover:text-gray-600 text-sm mb-6 flex items-center gap-1 transition-colors"
      >
        ← Back to home
      </button>

      {!isOrganized ? (
        <div className="flex flex-col gap-4 animate-fade-in">
          <h2 className="text-2xl font-medium text-sprout-text">Brain Dump 🧠</h2>
          <p className="text-gray-400 text-sm">
            Type everything on your mind. Just brain vomit. Hit 'Enter' to separate thoughts.
          </p>
          <textarea 
            className="w-full h-40 p-4 bg-sprout-bg border-none rounded-xl resize-none focus:ring-2 focus:ring-sprout-primary outline-none text-sprout-text transition-all"
            placeholder="I have to write an essay, and email my professor, and do the laundry..."
            value={dumpText}
            onChange={(e) => setDumpText(e.target.value)}
          ></textarea>
          <button 
            onClick={handleOrganize}
            className="bg-sprout-primary bg-opacity-40 hover:bg-opacity-60 text-sprout-text py-4 rounded-xl font-medium transition-all"
          >
            Organize my thoughts
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 animate-fade-in">
          <h2 className="text-2xl font-medium text-sprout-text">Your Tasks 🌱</h2>
          <div className="flex flex-col gap-3 mt-2">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-sprout-bg rounded-xl">
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                  className="w-5 h-5 accent-sprout-primary cursor-pointer rounded-md"
                />
                <span className={`text-sprout-text transition-all duration-300 ${task.completed ? 'line-through opacity-40' : ''}`}>
                  {task.text}
                </span>
              </div>
            ))}
          </div>
          
          {/* Button to clear memory and start over */}
          <button 
            onClick={() => {
              setIsOrganized(false);
              setTasks([]); // This clears the tasks when going back
            }}
            className="text-gray-400 text-sm mt-4 hover:text-gray-600 transition-colors"
          >
            ← Clear list and start over
          </button>
        </div>
      )}
    </div>
  );
}

export default BrainDump;