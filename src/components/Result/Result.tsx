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
      <h1 className="result">Auswertung</h1>
        {this.props.exerciseList.map(nextExercise =>
          <div className="row">
            <div className="col">
              {nextExercise.question}
            </div>
            <div className="col">
              {nextExercise.answer}
            </div>
            <div className="col">
              {nextExercise.answer === nextExercise.correctAnswer ? <span className="span">OK</span> : "You're an idiot! the right answer is " + nextExercise.correctAnswer }
            </div>
          </div>)}
      </div>
    );
  }
}

export default Result;
