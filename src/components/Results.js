import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

const Results = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  // Mock data - in a real app, this would come from an API or local storage
  const mockResults = [
    {
      id: 1,
      type: 'Technical Interview',
      date: '2024-01-15',
      score: 85,
      totalQuestions: 5,
      answeredQuestions: 5,
      timeSpent: 1200, // seconds
      categories: ['JavaScript', 'Algorithms', 'System Design'],
      strengths: ['Problem solving', 'Code quality'],
      areas: ['Time management', 'System design depth']
    },
    {
      id: 2,
      type: 'Behavioral Interview',
      date: '2024-01-12',
      score: 92,
      totalQuestions: 5,
      answeredQuestions: 5,
      timeSpent: 900,
      categories: ['Teamwork', 'Leadership', 'Problem Solving'],
      strengths: ['Communication', 'Examples'],
      areas: ['Confidence', 'Story structure']
    },
    {
      id: 3,
      type: 'System Design',
      date: '2024-01-10',
      score: 78,
      totalQuestions: 3,
      answeredQuestions: 3,
      timeSpent: 1800,
      categories: ['Architecture', 'Scalability'],
      strengths: ['Technical knowledge'],
      areas: ['Trade-offs', 'Real-world constraints']
    }
  ];

  const timeframes = [
    { id: 'week', label: 'This Week', days: 7 },
    { id: 'month', label: 'This Month', days: 30 },
    { id: 'quarter', label: 'This Quarter', days: 90 },
    { id: 'year', label: 'This Year', days: 365 }
  ];

  const calculateStats = () => {
    const totalInterviews = mockResults.length;
    const averageScore = Math.round(mockResults.reduce((acc, result) => acc + result.score, 0) / totalInterviews);
    const totalTime = mockResults.reduce((acc, result) => acc + result.timeSpent, 0);
    const totalQuestions = mockResults.reduce((acc, result) => acc + result.totalQuestions, 0);

    return {
      totalInterviews,
      averageScore,
      totalTime: Math.round(totalTime / 60), // minutes
      totalQuestions
    };
  };

  const stats = calculateStats();

  const getScoreColor = (score) => {
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'average';
    return 'needs-improvement';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="results">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Your Interview Results</h1>
          <p className="page-description">
            Track your progress, identify strengths, and discover areas for improvement
          </p>
        </div>

        {/* Timeframe Filter */}
        <div className="timeframe-filter">
          <label className="filter-label">Timeframe:</label>
          <div className="filter-options">
            {timeframes.map(timeframe => (
              <button
                key={timeframe.id}
                className={`filter-option ${selectedTimeframe === timeframe.id ? 'active' : ''}`}
                onClick={() => setSelectedTimeframe(timeframe.id)}
              >
                {timeframe.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Stats */}
        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.totalInterviews}</h3>
              <p className="stat-label">Interviews Completed</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.averageScore}%</h3>
              <p className="stat-label">Average Score</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.totalTime}m</h3>
              <p className="stat-label">Total Time</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">❓</div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.totalQuestions}</h3>
              <p className="stat-label">Questions Answered</p>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="performance-chart">
          <div className="chart-header">
            <h2>Performance Trend</h2>
            <p>Your interview scores over time</p>
          </div>
          <div className="chart-placeholder">
            <div className="chart-icon">📈</div>
            <p>Performance visualization would appear here</p>
            <small>Chart component integration pending</small>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="results-list">
          <div className="results-header">
            <h2>Recent Interviews</h2>
            <Link to="/interview-types" className="btn btn-primary">
              Practice More
            </Link>
          </div>
          
          {mockResults.map(result => (
            <div key={result.id} className="result-card">
              <div className="result-header">
                <div className="result-info">
                  <h3 className="result-type">{result.type}</h3>
                  <p className="result-date">{formatDate(result.date)}</p>
                </div>
                <div className={`result-score score-${getScoreColor(result.score)}`}>
                  {result.score}%
                </div>
              </div>
              
              <div className="result-details">
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Questions:</span>
                    <span className="detail-value">{result.answeredQuestions}/{result.totalQuestions}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Time Spent:</span>
                    <span className="detail-value">{formatTime(result.timeSpent)}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Categories:</span>
                    <div className="category-tags">
                      {result.categories.map(category => (
                        <span key={category} className="category-tag">{category}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="feedback-section">
                  <div className="feedback-group">
                    <h4>✅ Strengths</h4>
                    <div className="feedback-tags">
                      {result.strengths.map(strength => (
                        <span key={strength} className="feedback-tag positive">{strength}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="feedback-group">
                    <h4>📈 Areas for Improvement</h4>
                    <div className="feedback-tags">
                      {result.areas.map(area => (
                        <span key={area} className="feedback-tag negative">{area}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="result-actions">
                <button className="btn btn-outline">View Details</button>
                <button className="btn btn-outline">Retake</button>
              </div>
            </div>
          ))}
        </div>

        {/* Insights Section */}
        <div className="insights-section">
          <div className="insights-card">
            <div className="insights-header">
              <h2>💡 Insights & Recommendations</h2>
              <p>Based on your recent performance</p>
            </div>
            
            <div className="insights-content">
              <div className="insight-item">
                <div className="insight-icon">🎯</div>
                <div className="insight-text">
                  <h4>Focus on System Design</h4>
                  <p>Your system design scores are lower than other areas. Consider practicing more architecture questions.</p>
                </div>
              </div>
              
              <div className="insight-item">
                <div className="insight-icon">⏱️</div>
                <div className="insight-text">
                  <h4>Time Management</h4>
                  <p>You're spending more time than recommended on complex questions. Practice pacing yourself.</p>
                </div>
              </div>
              
              <div className="insight-item">
                <div className="insight-icon">🚀</div>
                <div className="insight-text">
                  <h4>Strong Communication</h4>
                  <p>Your behavioral interview performance shows excellent communication skills. Keep it up!</p>
                </div>
              </div>
            </div>
            
            <div className="insights-actions">
              <Link to="/interview-types" className="btn btn-primary">
                Get Personalized Practice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
