import React from "react";
import Section from "../Sections";
import PropTypes from "prop-types";
import "./feedbackStats.module.css";

const FeedbackStats = ({
  stats: { good, neutral, bad },
  total,
  positiveFeedback,
}) => {
  return (
    <Section title="Statistics">
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positiveFeedback}</p>
      </div>
    </Section>
  );
};

export default FeedbackStats;

FeedbackStats.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};
