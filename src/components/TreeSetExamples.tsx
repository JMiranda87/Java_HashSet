import React, { useState } from 'react';

class CitiesComparator {
  compare(citiesOne: string, citiesTwo: string): number {
    const value = citiesOne.localeCompare(citiesTwo);
    if (value > 0) {
      return -1;
    } else if (value < 0) {
      return 1;
    } else {
      return 0;
    }
  }
}

export const TreeSetExamples: React.FC = () => {
  const [exampleOneOutput, setExampleOneOutput] = useState<string>('');
  const [exampleTwoOutput, setExampleTwoOutput] = useState<string>('');
  const [exampleThreeOutput, setExampleThreeOutput] = useState<string>('');
  const [exampleFourOutput, setExampleFourOutput] = useState<string>('');

  const runExampleOne = () => {
    const numTreeSet = new Set<number>([20, 5, 15, 25, 10]);
    let output = 'TreeSet using Iterator: ';
    numTreeSet.forEach((num) => {
      output += `${num}, `;
    });
    setExampleOneOutput(output.slice(0, -2));
  };

  const runExampleTwo = () => {
    const numbers = new Set<number>([2, 5, 6]);
    const initialSet = `TreeSet: ${[...numbers]}`;
    
    const value1 = numbers.delete(5);
    const afterRemove = `Is 5 removed? ${value1}`;
    
    const value2 = numbers.clear();
    const afterClear = `Are all elements removed? ${numbers.size === 0}`;
    
    setExampleTwoOutput(`${initialSet}\n${afterRemove}\n${afterClear}`);
  };

  const runExampleThree = () => {
    const numbers = new Set<number>([2, 5, 6]);
    const treeSet = `TreeSet: ${[...numbers]}`;
    const first = `First Number: ${Math.min(...numbers)}`;
    const last = `Last Number: ${Math.max(...numbers)}`;
    
    setExampleThreeOutput(`${treeSet}\n${first}\n${last}`);
  };

  const runExampleFour = () => {
    const citiesComparator = new CitiesComparator();
    const cities = ['UAE', 'Mumbai', 'NewYork', 'Hyderabad', 'Karachi', 'Xanadu', 'Lahore', 'Zagazig', 'Yingkou'];
    const sortedCities = cities.sort((a, b) => citiesComparator.compare(a, b));
    
    setExampleFourOutput(`TreeSet: ${sortedCities}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">TreeSet Examples</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium">Example One: Iterate Through TreeSet</h3>
          <button onClick={runExampleOne} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Run Example</button>
          <pre className="bg-gray-100 p-2 mt-2 rounded">{exampleOneOutput}</pre>
        </div>

        <div>
          <h3 className="text-xl font-medium">Example Two: Remove Elements</h3>
          <button onClick={runExampleTwo} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Run Example</button>
          <pre className="bg-gray-100 p-2 mt-2 rounded">{exampleTwoOutput}</pre>
        </div>

        <div>
          <h3 className="text-xl font-medium">Example Three: Methods for Navigation</h3>
          <button onClick={runExampleThree} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Run Example</button>
          <pre className="bg-gray-100 p-2 mt-2 rounded">{exampleThreeOutput}</pre>
        </div>

        <div>
          <h3 className="text-xl font-medium">Example Four: Sort TreeSet in Reverse Order</h3>
          <button onClick={runExampleFour} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Run Example</button>
          <pre className="bg-gray-100 p-2 mt-2 rounded">{exampleFourOutput}</pre>
        </div>
      </div>
    </div>
  );
};