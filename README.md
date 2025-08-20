# 🎯 Mock Interview App

A comprehensive, modern web application designed to help users practice and improve their interview skills through realistic mock interviews.

## ✨ Features

### 🏠 **Home Page**
- Engaging hero section with app overview
- Feature highlights showcasing app capabilities
- Call-to-action buttons for quick navigation

### 📚 **Interview Types**
- **Technical Interviews**: Programming, algorithms, system design
- **Behavioral Interviews**: Past experiences, teamwork, leadership
- **System Design**: Architecture and scalability challenges
- **Data Science**: Machine learning and statistics
- **Product Management**: Strategy and development
- **General Interviews**: Common questions across industries

### 🎭 **Interview Sessions**
- Real-time timer with countdown
- Question navigation with progress tracking
- Answer input with text areas
- Helpful hints for each question
- Pause/resume functionality
- Auto-advance on time completion

### 📊 **Results & Analytics**
- Performance tracking over time
- Detailed interview results
- Strength and improvement area identification
- Time-based filtering (week/month/quarter/year)
- Personalized insights and recommendations

### 🎨 **Modern UI/UX**
- Responsive design for all devices
- Smooth animations and transitions
- Clean, professional interface
- Accessibility-focused design
- Dark/light theme support

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mock-interview-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Home.js         # Home page component
│   ├── InterviewTypes.js # Interview selection
│   ├── InterviewSession.js # Interview interface
│   ├── Results.js      # Results and analytics
│   └── *.css           # Component-specific styles
├── App.js              # Main app component
├── App.css             # App-level styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎯 How to Use

### 1. **Choose Interview Type**
- Navigate to the "Practice" section
- Select from available interview categories
- Filter by difficulty level if desired

### 2. **Start Interview**
- Review interview overview and sample question
- Click "Start Interview" to begin
- Answer questions within the time limit
- Use hints when needed

### 3. **Navigate Questions**
- Use Previous/Next buttons
- Click question indicators to jump to specific questions
- Monitor progress with the progress bar

### 4. **Review Results**
- View detailed performance metrics
- Analyze strengths and improvement areas
- Track progress over time
- Get personalized recommendations

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Styling**: CSS3 with CSS Variables
- **Build Tool**: Create React App
- **Package Manager**: npm
- **Fonts**: Inter (Google Fonts)

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb)
- **Secondary**: Gray (#64748b)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales from 0.875rem to 3.5rem

### Spacing
- **Base Unit**: 0.25rem (4px)
- **Scale**: 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4, 6, 8

## 📱 Responsive Design

The app is fully responsive and optimized for:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adaptive grid)
- **Mobile**: 320px - 767px (stacked layout)

## 🔧 Customization

### Adding New Interview Types
1. Add new category to `InterviewTypes.js`
2. Create question bank in `InterviewSession.js`
3. Update routing if needed

### Modifying Questions
- Edit question banks in `InterviewSession.js`
- Adjust time limits and difficulty levels
- Add new hint categories

### Styling Changes
- Modify CSS variables in `index.css`
- Update component-specific styles
- Adjust responsive breakpoints

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
- Netlify
- Vercel
- GitHub Pages
- AWS S3

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_ANALYTICS_ID=your_analytics_id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Create React App for the build setup
- Inter font family for typography
- Community contributors and feedback

## 📞 Support

For questions or support:
- Create an issue in the repository
- Check the documentation
- Review the code examples

---

**Happy Interviewing! 🎯✨**
