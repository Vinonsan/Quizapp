import React, { useState, useEffect } from 'react';

function Questions() {
  const [time, setTime] = useState(60); // Countdown timer
  const [selectedAnswer, setSelectedAnswer] = useState(''); // Store selected answer

  // Store the answers as an array
  const answers = [
    'Option 1: Answer A',
    'Option 2: Answer B',
    'Option 3: Answer C',
    'Option 4: Answer D',
  ];

  // Countdown logic
  useEffect(() => {
    if (time === 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  // Handle answer selection
  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer); // Set the clicked answer as selected
  };

  return (
    <>
      <div className='bg-zinc-200 w-full h-screen p-6 flex flex-col items-center justify-center'>
        <div className='w-full m-2 flex items-center justify-center'>
          <div className='bg-cyan-900 border-4 border-cyan-700 text-xl font-bold text-cyan-50 p-4 rounded-full flex items-center justify-center'>
            {time}
          </div>
        </div>
        <div className='bg-cyan-800 w-full md:w-3/6 lg:w-2/6 rounded-xl flex p-0 flex-col items-center justify-start border-2 border-cyan-900 shadow-4xl shadow-inner shadow-cyan-100'>
          <div className='bg-cyan-950 w-full p-6 rounded-t-xl shadow-4xl shadow-inner shadow-cyan-500 flex items-center justify-center'>
            <h1 className='text-xl font-dark text-cyan-50'>What is meant by this?</h1>
          </div>
          <div className='w-full p-6 flex flex-col items-center justify-start'>
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`w-full p-2 m-4 rounded-xl shadow-4xl shadow-inner cursor-pointer ease-in-out duration-300 ${
                  selectedAnswer === answer
                    ? 'bg-cyan-100 shadow-cyan-500' // Selected answer style
                    : 'bg-cyan-900 hover:shadow-cyan-600 active:scale-95' // Default answer style
                }`}
                onClick={() => handleAnswerChange(answer)} // Handle click to set the answer
              >
                <p className='text-cyan-50'>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
