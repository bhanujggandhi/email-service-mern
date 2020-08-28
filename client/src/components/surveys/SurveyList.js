import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import { Card } from 'react-bootstrap';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <Card
          bg='dark'
          key={survey._id}
          style={{ width: '100%', margin: '1rem auto' }}
          text='white'
        >
          <Card.Body>
            <Card.Title>{survey.title}</Card.Title>
            <Card.Text>{survey.body}</Card.Text>
            <Card.Subtitle className='mb-2 text-muted float-right'>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </Card.Subtitle>
            <Card.Link>Yes: {survey.yes}</Card.Link>
            <Card.Link>No: {survey.no}</Card.Link>
          </Card.Body>
        </Card>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
