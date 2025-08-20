import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InterviewTypes.css';

const InterviewTypes = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const interviewCategories = [
    {
      id: 'technical',
      title: 'Technical Interview',
      description: 'Programming, algorithms, system design, and technical problem-solving questions.',
      icon: '💻',
      color: '#3b82f6',
      difficulty: ['beginner', 'intermediate', 'advanced'],
      questionCount: 150,
      avgTime: '45 min'
    },
    {
      id: 'behavioral',
      title: 'Behavioral Interview',
      description: 'Past experiences, teamwork, leadership, and situational questions.',
      icon: '🤝',
      color: '#10b981',
      difficulty: ['beginner', 'intermediate', 'advanced'],
      questionCount: 120,
      avgTime: '30 min'
    },
    {
      id: 'system-design',
      title: 'System Design',
      description: 'Architecture, scalability, and system design challenges.',
      icon: '🏗️',
      color: '#f59e0b',
      difficulty: ['intermediate', 'advanced'],
      questionCount: 80,
      avgTime: '60 min'
    },
    {
      id: 'data-science',
      title: 'Data Science',
      description: 'Machine learning, statistics, and data analysis questions.',
      icon: '📊',
      color: '#8b5cf6',
      difficulty: ['intermediate', 'advanced'],
      questionCount: 100,
      avgTime: '50 min'
    },
    {
      id: 'product',
      title: 'Product Management',
      description: 'Product strategy, user research, and product development questions.',
      icon: '🎯',
      color: '#ef4444',
      difficulty: ['beginner', 'intermediate', 'advanced'],
      questionCount: 90,
      avgTime: '40 min'
    },
    {
      id: 'general',
      title: 'General Interview',
      description: 'Common interview questions across various industries and roles.',
      icon: '📝',
      color: '#6b7280',
      difficulty: ['beginner', 'intermediate'],
      questionCount: 200,
      avgTime: '25 min'
    }
  ];

  const difficulties = [
    { id: 'all', label: 'All Levels', color: '#6b7280' },
    { id: 'beginner', label: 'Beginner', color: '#10b981' },
    { id: 'intermediate', label: 'Intermediate', color: '#f59e0b' },
    { id: 'advanced', label: 'Advanced', color: '#ef4444' }
  ];

  const filteredCategories = interviewCategories.filter(category => {
    const difficultyMatch = selectedDifficulty === 'all' || category.difficulty.includes(selectedDifficulty);
    const categoryMatch = selectedCategory === 'all' || category.id === selectedCategory;
    return difficultyMatch && categoryMatch;
  });

  return (
    <div className="interview-types">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Choose Your Interview Type</h1>
          <p className="page-description">
            Select from our comprehensive collection of interview questions. Practice with real-world scenarios 
            and improve your confidence for any interview situation.
          </p>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="filter-group">
            <label className="filter-label">Difficulty Level:</label>
            <div className="filter-options">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty.id}
                  className={`filter-option ${selectedDifficulty === difficulty.id ? 'active' : ''}`}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  style={{ '--filter-color': difficulty.color }}
                >
                  {difficulty.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interview Categories Grid */}
        <div className="categories-grid">
          {filteredCategories.map(category => (
            <div key={category.id} className="category-card hover-lift">
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ backgroundColor: category.color }}
                >
                  {category.icon}
                </div>
                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>
              
              <div className="category-stats">
                <div className="stat">
                  <span className="stat-label">Questions:</span>
                  <span className="stat-value">{category.questionCount}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Avg. Time:</span>
                  <span className="stat-value">{category.avgTime}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Levels:</span>
                  <div className="difficulty-badges">
                    {category.difficulty.map(level => (
                      <span 
                        key={level} 
                        className={`difficulty-badge difficulty-${level}`}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="category-actions">
                <Link 
                  to={`/interview/${category.id}`}
                  className="btn btn-primary w-full"
                >
                  Start Practice
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No interviews found</h3>
            <p>Try adjusting your filters to see more options.</p>
            <button 
              className="btn btn-outline"
              onClick={() => {
                setSelectedDifficulty('all');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Quick Start Section */}
        <div className="quick-start-section">
          <div className="quick-start-card">
            <div className="quick-start-content">
              <h3>Not sure where to start?</h3>
              <p>Take our quick assessment to get personalized interview recommendations.</p>
              <button className="btn btn-outline">Take Assessment</button>
            </div>
            <div className="quick-start-visual">
              <div className="assessment-icon">📋</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewTypes;
