import React from "react";
import PropTypes from "prop-types";
import "./notification.module.css";

const Notification = ({ message }) => <h3>{message}</h3>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
