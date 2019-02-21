import React, { Component } from 'react';
import './Teacher.css';
import { Form, Button } from 'react-bootstrap';

interface TeacherProps {
  handleNewQuestion : (newQuestion : {question: string, answer: string}) => void
}
interface TeacherState {
  answer: string,
  question: string,
  
}
class Teacher extends Component<TeacherProps, TeacherState> {
  constructor(props: TeacherProps) {
    super(props)

    this.state= {
      answer: "",
      question: "",
    }
  }

  

  render() {
    return (
      <div className="container">
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="type question" value={this.state.question} onChange={(event: any) => { this.setState({ question: event.target.value }) }} />
            <Form.Control type="text" placeholder="type answer" value={this.state.answer} onChange={(event: any) => { this.setState({ answer: event.target.value }) }} />
          </Form.Group>
          <Button variant="primary" onClick={(event: any) => this.props.handleNewQuestion({question: this.state.question, answer:this.state.answer})}>
            OK
          </Button>
        </Form>
      </div>
    );
  }
}

export default Teacher;
