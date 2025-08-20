import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './InterviewSession.css';

const InterviewSession = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const timerRef = useRef(null);

  // Mock question bank - in a real app, this would come from an API
  const questionBanks = {
    technical: [
      {
        id: 1,
        question: "Explain the difference between var, let, and const in JavaScript. When would you use each?",
        type: "coding",
        difficulty: "intermediate",
        timeLimit: 180,
        category: "JavaScript",
        hints: ["Think about scope", "Consider reassignment", "Think about hoisting"]
      },
      {
        id: 2,
        question: "Write a function to find the longest common subsequence between two strings.",
        type: "algorithm",
        difficulty: "advanced",
        timeLimit: 300,
        category: "Algorithms",
        hints: ["Use dynamic programming", "Consider a 2D table", "Think about the base case"]
      },
      {
        id: 3,
        question: "How would you design a URL shortening service? Discuss the architecture and scalability considerations.",
        type: "system-design",
        difficulty: "advanced",
        timeLimit: 600,
        category: "System Design",
        hints: ["Consider database design", "Think about hash functions", "Plan for high traffic"]
      },
      {
        id: 4,
        question: "Explain the concept of closures in JavaScript with a practical example.",
        type: "concept",
        difficulty: "intermediate",
        timeLimit: 180,
        category: "JavaScript",
        hints: ["Think about scope", "Consider function scope", "Think about data privacy"]
      },
      {
        id: 5,
        question: "Implement a basic stack data structure with push, pop, and peek operations.",
        type: "coding",
        difficulty: "beginner",
        timeLimit: 120,
        category: "Data Structures",
        hints: ["Use an array", "Consider LIFO principle", "Handle edge cases"]
      }
    ],
    behavioral: [
      {
        id: 1,
        question: "Tell me about a time when you had to work with a difficult team member. How did you handle the situation?",
        type: "situational",
        difficulty: "intermediate",
        timeLimit: 240,
        category: "Teamwork",
        hints: ["Use STAR method", "Focus on resolution", "Show empathy"]
      },
      {
        id: 2,
        question: "Describe a project where you had to learn a new technology quickly. What was your approach?",
        type: "experience",
        difficulty: "intermediate",
        timeLimit: 240,
        category: "Learning",
        hints: ["Show adaptability", "Mention resources used", "Highlight results"]
      },
      {
        id: 3,
        question: "Give me an example of when you had to make a decision without all the information you needed.",
        type: "situational",
        difficulty: "advanced",
        timeLimit: 300,
        category: "Decision Making",
        hints: ["Show analytical thinking", "Mention risk assessment", "Explain your process"]
      },
      {
        id: 4,
        question: "Tell me about a time you failed at something. What did you learn from it?",
        type: "experience",
        difficulty: "beginner",
        timeLimit: 180,
        category: "Resilience",
        hints: ["Be honest", "Focus on learning", "Show growth mindset"]
      },
      {
        id: 5,
        question: "Describe a situation where you had to lead a team through a challenging project.",
        type: "leadership",
        difficulty: "advanced",
        timeLimit: 300,
        category: "Leadership",
        hints: ["Show leadership style", "Mention team dynamics", "Highlight outcomes"]
      }
    ],
    general: [
      {
        id: 1,
        question: "Why are you interested in this role and company?",
        type: "motivation",
        difficulty: "beginner",
        timeLimit: 120,
        category: "Motivation",
        hints: ["Research the company", "Connect to your goals", "Show enthusiasm"]
      },
      {
        id: 2,
        question: "Where do you see yourself in 5 years?",
        type: "career",
        difficulty: "beginner",
        timeLimit: 120,
        category: "Career Goals",
        hints: ["Be realistic", "Show ambition", "Connect to the role"]
      },
      {
        id: 3,
        question: "What are your greatest strengths and weaknesses?",
        type: "self-assessment",
        difficulty: "intermediate",
        timeLimit: 180,
        category: "Self-Awareness",
        hints: ["Be honest", "Show self-awareness", "Connect to the role"]
      }
    ]
  };

  const questions = questionBanks[type] || questionBanks.general;
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (isInterviewStarted && !isPaused && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isInterviewStarted, isPaused, timeRemaining]);

  const startInterview = () => {
    setIsInterviewStarted(true);
    setTimeRemaining(currentQuestion.timeLimit);
  };

  const pauseInterview = () => {
    setIsPaused(!isPaused);
  };

  const handleTimeUp = () => {
    // Auto-advance to next question or end interview
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      endInterview();
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      const nextQuestion = questions[currentQuestionIndex + 1];
      setTimeRemaining(nextQuestion.timeLimit);
    } else {
      endInterview();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      const prevQuestion = questions[currentQuestionIndex - 1];
      setTimeRemaining(prevQuestion.timeLimit);
    }
  };

  const endInterview = () => {
    setIsInterviewStarted(false);
    setShowResults(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };

  const handleAnswerChange = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  if (showResults) {
    return (
      <div className="interview-results">
        <div className="container">
          <div className="results-card">
            <h2>Interview Complete!</h2>
            <p>You've completed the {type} interview with {questions.length} questions.</p>
            <div className="results-actions">
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/results')}
              >
                View Detailed Results
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => navigate('/interview-types')}
              >
                Practice Another Type
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="interview-session">
      <div className="container">
        {/* Interview Header */}
        <div className="interview-header">
          <div className="interview-info">
            <h1 className="interview-title">
              {type.charAt(0).toUpperCase() + type.slice(1)} Interview
            </h1>
            <p className="interview-subtitle">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          
          {isInterviewStarted && (
            <div className="interview-controls">
              <button 
                className={`btn ${isPaused ? 'btn-primary' : 'btn-secondary'}`}
                onClick={pauseInterview}
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
              <button 
                className="btn btn-outline"
                onClick={endInterview}
              >
                End Interview
              </button>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>

        {/* Question Display */}
        <div className="question-container">
          {!isInterviewStarted ? (
            <div className="start-interview">
              <div className="start-card">
                <h2>Ready to Start?</h2>
                <p>This interview contains {questions.length} questions with a total estimated time of {Math.round(questions.reduce((acc, q) => acc + q.timeLimit, 0) / 60)} minutes.</p>
                <div className="question-preview">
                  <h3>Sample Question:</h3>
                  <p>{currentQuestion.question}</p>
                  <div className="question-meta">
                    <span className="meta-item">Time: {formatTime(currentQuestion.timeLimit)}</span>
                    <span className="meta-item">Difficulty: {currentQuestion.difficulty}</span>
                    <span className="meta-item">Category: {currentQuestion.category}</span>
                  </div>
                </div>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={startInterview}
                >
                  Start Interview
                </button>
              </div>
            </div>
          ) : (
            <div className="question-content">
              <div className="question-header">
                <div className="question-meta">
                  <span className="meta-badge difficulty-{currentQuestion.difficulty}">
                    {currentQuestion.difficulty}
                  </span>
                  <span className="meta-badge category">
                    {currentQuestion.category}
                  </span>
                  <span className="meta-badge type">
                    {currentQuestion.type}
                  </span>
                </div>
                
                <div className="timer">
                  <span className="timer-label">Time Remaining:</span>
                  <span className={`timer-value ${timeRemaining <= 30 ? 'timer-warning' : ''}`}>
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>

              <div className="question-text">
                <h2>{currentQuestion.question}</h2>
              </div>

              <div className="answer-section">
                <label className="answer-label">Your Answer:</label>
                <textarea
                  className="answer-input"
                  placeholder="Type your answer here..."
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  rows={8}
                />
              </div>

              {/* Hints Section */}
              <div className="hints-section">
                <h3>💡 Hints</h3>
                <ul className="hints-list">
                  {currentQuestion.hints.map((hint, index) => (
                    <li key={index} className="hint-item">{hint}</li>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div className="question-navigation">
                <button 
                  className="btn btn-secondary"
                  onClick={previousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  ← Previous
                </button>
                
                <div className="question-indicators">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentQuestionIndex ? 'active' : ''} ${answers[questions[index].id] ? 'answered' : ''}`}
                      onClick={() => setCurrentQuestionIndex(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button 
                  className="btn btn-primary"
                  onClick={nextQuestion}
                  disabled={currentQuestionIndex === questions.length - 1}
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next →'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewSession;
