import React, { Component } from 'react';
import './Result.css';

interface ResultProps {
  exerciseList: Array<{ question: string, answer: string, correctAnswer: string }>,
}

interface ResultState {

}


class Result extends Component<ResultProps, ResultState> {
  constructor(props: ResultProps) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        {this.props.exerciseList.map(nextExercise =>
          <div className="row">
            <div className="col">
              {nextExercise.question}
            </div>
            <div className="col">
              {nextExercise.answer}
            </div>
            <div className="col">
              {nextExercise.answer === nextExercise.correctAnswer ? "OK" : "You're an idiot! " + nextExercise.correctAnswer }
            </div>
          </div>)}
      </div>
    );
  }
}

export default Result;
