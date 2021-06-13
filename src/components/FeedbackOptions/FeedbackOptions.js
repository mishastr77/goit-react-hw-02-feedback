import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Section from "../Sections";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onChangeStats }) => {
  return (
    <Section title="Please leave feedback">
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
        size="large"
      >
        <Button
          name="good"
          onClick={(e) => onChangeStats(e.currentTarget.name)}
        >
          good
        </Button>
        <Button
          name="neutral"
          onClick={(e) => onChangeStats(e.currentTarget.name)}
        >
          neutral
        </Button>
        <Button name="bad" onClick={(e) => onChangeStats(e.currentTarget.name)}>
          bad
        </Button>
      </ButtonGroup>
    </Section>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onChangeStats: PropTypes.func.isRequired,
};
