import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  // https://codepen.io/YusukeNakaya/pen/vYYzbGW
  const { disabled, onClick, text } = props;
  return (
    <button
      type="button"
      className="Button"
      disabled={disabled}
      onClick={() => onClick()}
    >
      <span>{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default Button;
