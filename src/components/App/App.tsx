import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Quiz from '../Quiz/Quiz';
import Teacher from '../Teacher/Teacher';

interface AppState {
  currentView: string,
  exerciseList: Array<{ question: string, answer: string, correctAnswer: string }>,
}

interface AppProps {

}
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      currentView: "Teacher",
      exerciseList: [
        { question: "1 + 5", answer: "", correctAnswer: "6" },
        { question: "3 + 3", answer: "", correctAnswer: "6" },
        { question: "4 + 2", answer: "", correctAnswer: "6" },
        { question: "2 + 4", answer: "", correctAnswer: "6" },
      ],
    }
  }
  handleNavigation = (newView: string) => {
    this.setState({ currentView: newView })
  }

  handleNewQuestion = (newQuestion : {question: string, answer: string}) => {
    const modifiedExcerciseList = this.state.exerciseList.slice()
    modifiedExcerciseList.push({question: newQuestion.question, correctAnswer: newQuestion.answer, answer: ""})
    this.setState( { exerciseList: modifiedExcerciseList})
  }

  render() {
    return (
      <div className="container">
        <Navigation onNavigate={this.handleNavigation}/>
        {this.state.currentView === "Student" ? <Quiz exerciseList={this.state.exerciseList} /> : <Teacher exerciseList={this.state.exerciseList} />}
      </div>
    );
  }
}

export default App;
