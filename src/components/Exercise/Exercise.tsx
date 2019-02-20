import React, { Component } from 'react';
import './Exercise.css';
import { Form, Button } from 'react-bootstrap';
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers';

interface ExerciseProps {
  question: string,
  onAnswered: (answer: string) => void,
}

interface ExerciseState {
  answer: string,
}
class Exercise extends Component<ExerciseProps, ExerciseState> {
  constructor(props: ExerciseProps) {
    super(props)

    this.state = {
      answer: "",
    }

  }
  render() {
    return (
      <div className="Exercise">
        <Form>
          <Form.Group>
            <Form.Label>{this.props.question}</Form.Label>
            <Form.Control type="text" placeholder="type answer" value={this.state.answer} onChange={(event: any) => { this.setState({ answer: event.target.value }) }} />
          </Form.Group>
          <Button variant="primary" onClick={(event: any) => { this.props.onAnswered(this.state.answer) }}>
            OK
          </Button>
        </Form>
      </div>
    );
  }
}

export default Exercise;
