import React, { Component } from 'react';
import './Teacher.css';



interface TeacherProps {
  exerciseList: Array<{ question: string, answer: string, correctAnswer: string }>,
}
interface TeacherState {
  exerciseList: Array<{ question: string, answer: string, correctAnswer: string }>,

}
class Teacher extends Component<TeacherProps, TeacherState> {
  constructor(props: TeacherProps) {
    super(props)
    const modifiedList = this.props.exerciseList.slice(0)
    modifiedList.push({question: "", answer: "", correctAnswer: ""})
    this.state = {
      exerciseList: modifiedList,
    }

  }
  handleQuestionChanged = (newValue: string, index: number) => {
    const modifiedList = this.state.exerciseList.slice(0)
    modifiedList[index].question = newValue
    if (index === modifiedList.length-1) {
      modifiedList.push({question: "", answer: "", correctAnswer: ""})
    }
    this.setState({ exerciseList: modifiedList })
  }

  handleAnswerChanged = (newValue: string, index: number) => {
    const modifiedList = this.state.exerciseList.slice(0)
    modifiedList[index].correctAnswer = newValue
    if (index === modifiedList.length-1) {
      modifiedList.push({question: "", answer: "", correctAnswer: ""})
    }
    this.setState({ exerciseList: modifiedList })
  }

  handleDeleteClick = (index: number) => {
    const modifiedList = this.state.exerciseList.slice(0)
    modifiedList.splice(index, 1)
    this.setState ({exerciseList: modifiedList})
  }



  render() {
    return (
      <div className="container">
        <h1>Fragenliste</h1>
        <h2>Frage</h2>
        {
          this.state.exerciseList.map((nextExercise, index) =>
            <div className="row">
              <div className="col">
                <input type="text" value={nextExercise.question} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.handleQuestionChanged(event.target.value, index) }} />
              </div>
              <div className="col">
                <input type="text" value={nextExercise.correctAnswer} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.handleAnswerChanged(event.target.value, index) }} />
              </div>
              <div className="col">
                <button onClick={(event: any)=>{ this.handleDeleteClick(index)}}>Delete</button>
              </div>

            </div>)}
      </div>
    );
  }
}


export default Teacher;
