import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Quiz from '../Quiz/Quiz';
import Teacher from '../Teacher/Teacher';

interface AppState {
  currentView: string,
}

interface AppProps {

}
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      currentView: "Student",
    }
  }
  handleNavigation = (newView: string) => {
    this.setState({ currentView: newView })
  }


  render() {
    return (
      <div className="container">
        <Navigation onNavigate={this.handleNavigation}/>
        {this.state.currentView === "Student" ? <Quiz /> : <Teacher/>}
      </div>
    );
  }
}

export default App;
