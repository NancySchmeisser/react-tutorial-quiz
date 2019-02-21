import React, { Component } from 'react';
import './Teacher.css';
import Navigation from '../Navigation/Navigation';
import Quiz from '../Quiz/Quiz';

interface TeacherState {
  
}

interface TeacherProps {

}
class Teacher extends Component<TeacherProps, TeacherState> {
  constructor(props: TeacherProps) {
    super(props)
  }

  render() {
    return (
      <div className="container">
      </div>
    );
  }
}

export default Teacher;
