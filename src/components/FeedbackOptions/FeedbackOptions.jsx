import React from "react";
import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, addFeedback }) => {
  return (<ul className={css.list}>{options.map(option => {
    return (<button className={css.button} type="button" key={option} onClick={() => addFeedback(option)}>{option}</button>)
  })}</ul>
)
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  addFeedback: PropTypes.func,
};

export default FeedbackOptions
