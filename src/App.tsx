import React from 'react';
import { HashSetExamples } from './components/HashSetExamples';
import { TreeSetExamples } from './components/TreeSetExamples';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">HashSet and TreeSet Examples</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <HashSetExamples />
        <TreeSetExamples />
      </div>
    </div>
  );
}

export default App;