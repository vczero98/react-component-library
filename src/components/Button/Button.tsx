import React from "react";
import "./Button.scss";
import logo from "../../assets/clip-line-icon.svg";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button>
      <img src={logo} />
      {props.label}
    </button>
  );
};

export default Button;
