import React, { Component } from 'react';
import Exercise from '../Exercise/Exercise';
import Result from '../Result/Result';
import './Quiz.css';


interface QuizProps {
  exerciseList: Array<{ question: string, answer: string, correctAnswer: string }>,
}
interface QuizState {
  exerciseList: Array<{ question: string, answer: string, correctAnswer: string }>,
  currentExercise: number,
  quizComplete: boolean,
}
class Quiz extends Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props)

    this.state = {
      exerciseList: this.props.exerciseList.slice(0),
      currentExercise: 0,
      quizComplete: false,

    }
  }
  handleOnAnswered = (answer: string) => {

    const modifiedExerciseList = this.state.exerciseList.slice(0);
    modifiedExerciseList[this.state.currentExercise].answer = answer;
    if (this.state.currentExercise === this.state.exerciseList.length-1) {
      this.setState({quizComplete: true})
    } 
    this.setState({
      exerciseList: modifiedExerciseList,
      currentExercise: this.state.currentExercise + 1,
    })
  }
  render() {
    if (this.state.quizComplete === true) {
      return <Result exerciseList={this.state.exerciseList}/>
    } else {
      return (
        <Exercise question={this.state.exerciseList[this.state.currentExercise].question} onAnswered={this.handleOnAnswered} />
      );
    }
  }
}

export default Quiz;
