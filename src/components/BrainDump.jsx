import React, { useState } from 'react';

function BrainDump({ onNavigate }) {
  // These variables hold our app's temporary memory (state)
  const [dumpText, setDumpText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isOrganized, setIsOrganized] = useState(false);

  // This function turns the messy paragraph into a neat checklist
  const handleOrganize = () => {
    if (!dumpText.trim()) return; // Don't do anything if it's empty
    
    // Split the text every time the user hits "Enter" (new line)
    const splitTasks = dumpText.split('\n').filter(task => task.trim() !== '');
    
    // Turn those lines into task objects with a checkbox status
    setTasks(splitTasks.map(task => ({ text: task, completed: false })));
    setIsOrganized(true);
  };

  // This function crosses off a task when clicked
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md w-full bg-white rounded-[2rem] shadow-sm p-8 border border-gray-100">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('home')}
        className="text-gray-400 hover:text-gray-600 text-sm mb-6 flex items-center gap-1 transition-colors"
      >
        ← Back to home
      </button>

      {!isOrganized ? (
        // UI: The Messy Typing Screen
        <div className="flex flex-col gap-4 animate-fade-in">
          <h2 className="text-2xl font-medium text-sprout-text">Brain Dump 🧠</h2>
          <p className="text-gray-400 text-sm">
            Type everything on your mind. Just brain vomit. Hit 'Enter' to separate thoughts. We will organize it for you.
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
        // UI: The Organized Checklist Screen
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
          <button 
            onClick={() => setIsOrganized(false)}
            className="text-gray-400 text-sm mt-4 hover:text-gray-600 transition-colors"
          >
            ← Wait, I need to add more
          </button>
        </div>
      )}
    </div>
  );
}

export default BrainDump;