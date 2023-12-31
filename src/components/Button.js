import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  childern,
  type,
  onCLick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle 
  : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize
  : SIZES[0]

  return (
    <Link to='/sign-up' className="btn-moblie">
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onCLick}
            type={type}
            >
            {childern}
        </button>
    </Link>
  )

};
