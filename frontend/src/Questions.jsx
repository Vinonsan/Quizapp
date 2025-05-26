import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Questions() {
  const { id } = useParams();
  const categoryId = Number(id);

const questions = {
  1: [ 
    {
      question: 'What is a closure in JavaScript?',
      answers: [
        'A function bundled with its lexical environment',
        'An object property',
        'A variable declared with let',
        'A JavaScript library',
      ],
      correctAnswer: 'A function bundled with its lexical environment',
    },
    {
      question: 'Which of these is NOT a JavaScript data type?',
      answers: [
        'Boolean',
        'Number',
        'Float',
        'String',
      ],
      correctAnswer: 'Float',
    },
    {
      question: 'How do you declare a variable in JavaScript?',
      answers: [
        'var myVar;',
        'let myVar;',
        'const myVar;',
        'All of the above',
      ],
      correctAnswer: 'All of the above',
    },
  ],

  2: [ 
    {
      question: 'What is encapsulation?',
      answers: [
        'Binding data and methods into a single unit',
        'Inheritance of properties',
        'Hiding data from the user',
        'Creating multiple instances',
      ],
      correctAnswer: 'Binding data and methods into a single unit',
    },
    {
      question: 'Which keyword is used for inheritance in Java?',
      answers: [
        'implements',
        'extends',
        'inherits',
        'super',
      ],
      correctAnswer: 'extends',
    },
    {
      question: 'What is polymorphism?',
      answers: [
        'One interface, multiple methods',
        'Overloading functions only',
        'A form of encapsulation',
        'Data hiding',
      ],
      correctAnswer: 'One interface, multiple methods',
    },
  ],

  3: [ 
    {
      question: 'Which data structure uses FIFO?',
      answers: [
        'Stack',
        'Queue',
        'Tree',
        'Graph',
      ],
      correctAnswer: 'Queue',
    },
    {
      question: 'What is the time complexity of binary search?',
      answers: [
        'O(n)',
        'O(log n)',
        'O(n log n)',
        'O(1)',
      ],
      correctAnswer: 'O(log n)',
    },
    {
      question: 'Which of these is NOT a sorting algorithm?',
      answers: [
        'Merge Sort',
        'Quick Sort',
        'Depth First Search',
        'Bubble Sort',
      ],
      correctAnswer: 'Depth First Search',
    },
  ],

  4: [ 
    {
      question: 'What does HTML stand for?',
      answers: [
        'HyperText Markup Language',
        'Hyperlinks and Text Markup Language',
        'Home Tool Markup Language',
        'Hyper Transfer Markup Language',
      ],
      correctAnswer: 'HyperText Markup Language',
    },
    {
      question: 'Which language is used for styling web pages?',
      answers: [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
      ],
      correctAnswer: 'CSS',
    },
    {
      question: 'Which protocol is used to secure HTTP?',
      answers: [
        'FTP',
        'SMTP',
        'HTTPS',
        'SSH',
      ],
      correctAnswer: 'HTTPS',
    },
  ],
};


  const selectedQuestions = questions[categoryId] || [];

  const [time, setTime] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (quizFinished) return;
    if (time === 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, quizFinished]);


  
  const checkAnswerAndUpdateScore = () => {
    if (selectedAnswer === selectedQuestions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };




  useEffect(() => {
    if (time === 0) {
      checkAnswerAndUpdateScore();

      if (currentQuestionIndex < selectedQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizFinished(true);
      }
    }
  }, [time, currentQuestionIndex]);


  useEffect(() => {
    setTime(10);
    setSelectedAnswer('');
  }, [currentQuestionIndex]);


  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };


  const handleNextQuestion = () => {
    checkAnswerAndUpdateScore();

    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const calculateAverage = () => {
    const  totalQuestions = selectedQuestions.length;
    if (totalQuestions === 0) return 0;
    return (score / totalQuestions )*100;
  };

  const grade =(average) =>{
  return {
    text: average >= 50 ? 'Congratulations, you have passed!' : 'Sorry, you have failed. Better luck next time.',
    color: average >= 50 ? 'text-green-800' : 'text-red-800', 
  };
  };

  if (quizFinished) {
    const average = calculateAverage();
    const finalGrade = grade(average);
    return (
      <div className="bg-zinc-200 w-full h-screen p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-cyan-900 mb-4">Quiz Finished!</h1>
        <p className="text-xl text-cyan-700">
          Your score: {score} out of {selectedQuestions.length}
        </p>
        <p className='text-xl font-bold m-2 text-cyan-700 '>
          Average score is : {average.toFixed(2)}%
        </p>
        <p className={`text-xl font-bold m-2 ${finalGrade.color}`}>
          {finalGrade.text} 
        </p>
        <div className='bg-cyan-900 p-4 w-3/6 md:w-1/6 m-4 rounded-3xl flex items-center justify-center text-cyan-100 text-2xl font-bold shadow-inner shadow-3xl shadow-cyan-400 cursor-pointer'>
          <button onClick={() => navigate('/')}>Try Again</button>
        </div>
      </div>
    );
  }

  if (selectedQuestions.length === 0) {
    return <div className="text-center p-10">No questions found for this category.</div>;
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];



  return (
    <div className="bg-zinc-200 w-full h-screen p-6 flex flex-col items-center justify-center">
      <div className="w-full m-2 flex items-center justify-center">
        <div className="bg-cyan-900 border-4 border-cyan-700 text-xl font-bold text-cyan-50 p-4 rounded-full flex items-center justify-center">
          {time}
        </div>
      </div>
      <div className="bg-cyan-800 w-full md:w-3/6 lg:w-2/6 rounded-xl flex p-0 flex-col items-center justify-start border-2 border-cyan-900 shadow-4xl shadow-inner shadow-cyan-100">
        <div className="bg-cyan-950 w-full p-6 rounded-t-xl shadow-4xl shadow-inner shadow-cyan-500 flex items-center justify-center">
          <h1 className="text-xl font-dark text-cyan-50">{currentQuestion.question}</h1>
        </div>
        <div className="w-full p-2 flex flex-col items-center justify-start">
          {currentQuestion.answers.map((answer, index) => (
            <div
              key={index}
              className={`w-full p-2 mb-4 mt-4 rounded-xl shadow-4xl shadow-inner cursor-pointer ease-in-out duration-300 ${
                selectedAnswer === answer
                  ? 'bg-cyan-700 shadow-cyan-500'
                  : 'bg-cyan-900 hover:shadow-cyan-600 active:scale-95'
              }`}
              onClick={() => handleAnswerChange(answer)}
            >
              <p className="text-cyan-50">{answer}</p>
            </div>
          ))}
        </div>
        <div
          className="bg-cyan-950 items-center flex justify-center p-2 w-3/6 m-4 text-cyan-50 text-xl font-bold rounded-3xl shadow-inner shadow-4xl shadow-cyan-300 cursor-pointer"
          onClick={handleNextQuestion}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default Questions;
