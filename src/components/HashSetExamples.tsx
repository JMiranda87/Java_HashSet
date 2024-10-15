import React, { useState } from 'react';

export const HashSetExamples: React.FC = () => {
  const [exampleOneOutput, setExampleOneOutput] = useState<string>('');
  const [exampleTwoOutput, setExampleTwoOutput] = useState<string>('');
  const [exampleThreeOutput, setExampleThreeOutput] = useState<string>('');
  const [exampleFourOutput, setExampleFourOutput] = useState<string>('');

  const runExampleOne = () => {
    const evenNumber = new Set<number>();
    evenNumber.add(2);
    evenNumber.add(4);
    evenNumber.add(6);

    const numbers = new Set<number>(evenNumber);
    numbers.add(5);

    setExampleOneOutput(`HashSet: ${[...evenNumber]}\nNew HashSet: ${[...numbers]}`);
  };

  const runExampleTwo = () => {
    const evenNumbers = new Set<number>([2, 4]);
    const numbers = new Set<number>([1, 3]);
    const union = new Set<number>([...evenNumbers, ...numbers]);

    setExampleTwoOutput(`HashSet1: ${[...evenNumbers]}\nHashSet2: ${[...numbers]}\nUnion is: ${[...union]}`);
  };

  const runExampleThree = () => {
    const primeNumbers = new Set<number>([2, 3, 5]);
    const oddNumbers = new Set<number>([1, 3, 5]);
    const difference = new Set([...primeNumbers].filter(x => !oddNumbers.has(x)));

    setExampleThreeOutput(`HashSet1: ${[...primeNumbers]}\nHashSet2: ${[...oddNumbers]}\nDifference: ${[...difference]}`);
  };

  const runExampleFour = () => {
    const hset = new Set<string>(['Apple', 'Mango', 'Grapes', 'Orange', 'Fig', 'Apple', 'Mango', null, null]);
    let output = '';
    for (const str of hset) {
      output += ` ---> ${str}\n`;
    }
    setExampleFourOutput(output);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">HashSet Examples</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium">Example One: Insert Elements to HashSet using addAll()</h3>
          <button onClick={runExampleOne} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Run Example</button>
          <pre className="bg-gray-100 p-2 mt-2 rounded">{exampleOneOutput}</pre>
        </div>

        <div>
          <h3 className="text-xl font-medium">Example Two: Union of Sets</h3>
          <button onClick={runExampleTwo} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Run Example</button>
          <pre className="bg-gray-100 p-2 mt-2 rounded">{exampleTwoOutput}</pre>
        </div>

        <div>
          <h3 className="text-xl font-medium">Example Three: Difference of Sets</h3>
          <button onClick={runExampleThree} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Run Example</button>
          <pre className="bg-gray-100 p-2 mt-2 rounded">{exampleThreeOutput}</pre>
        </div>

        <div>
          <h3 className="text-xl font-medium">Example Four: Enhanced for() Loop</h3>
          <button onClick={runExampleFour} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Run Example</button>
          <pre className="bg-gray-100 p-2 mt-2 rounded">{exampleFourOutput}</pre>
        </div>
      </div>
    </div>
  );
};