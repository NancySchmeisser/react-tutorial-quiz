import React, { Component } from 'react';
import './Quiz.css';
import Exercise from '../Exercise/Exercise';


interface QuizProps {

}
interface QuizState {
  exerciseList: Array<{ question: string, answer: string, correctAnswer: string }>,
  currentExercise: number,
}
class Quiz extends Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props)

    this.state = {
      exerciseList: [
        { question: "1 + 5", answer: "", correctAnswer: "6" },
        { question: "3 + 3", answer: "", correctAnswer: "6" },
        { question: "4 + 2", answer: "", correctAnswer: "6" },
        { question: "2 + 4", answer: "", correctAnswer: "6" },
      ],
      currentExercise: 0,

    }
  }
  handleOnAnswered= (answer: string) => {

    const modifiedExerciseList= this.state.exerciseList.slice(0);
    modifiedExerciseList[this.state.currentExercise].answer = answer;

    this.setState({
      exerciseList: modifiedExerciseList,
      currentExercise: this.state.currentExercise +1,
    })
  }
  render() {
    return (
      <Exercise question={this.state.exerciseList[this.state.currentExercise].question} onAnswered={this.handleOnAnswered} />
    );
  }
}

export default Quiz;
