import React, { Component } from "react";
import Container from "./components/Conteiner";
import FeedbackOptions from "./components/FeedbackOptions";
import FeedbackStats from "./components/FeedbackStats";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeStats = (name) => {
    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPositiveFeedback = () => {
    const { good } = this.state;
    return good ? Math.ceil((good / this.getTotal()) * 100) + "%" : "0%";
  };

  render() {
    return (
      <>
        <Container>
          <FeedbackOptions onChangeStats={this.handleChangeStats} />
          {!!this.getTotal() ? (
            <FeedbackStats
              stats={this.state}
              total={this.getTotal()}
              positiveFeedback={this.getPositiveFeedback()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Container>
      </>
    );
  }
}

export default App;
