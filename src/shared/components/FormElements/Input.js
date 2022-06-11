import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.val, isValid: true };
    default:
      return state;
  }
};

const initialState = {
  value: "",
  isValid: false,
};

const Input = (props) => {
  const [formState, dispatch] = useReducer(inputReducer, initialState);

  const inputChangeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={formState.value}
        onChange={inputChangeHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={formState.value}
        onChange={inputChangeHandler}
      />
    );
  return (
    <div
      className={`form-control ${
        !formState.isValid ? "form-control--invalid" : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!formState.isValid && <p>It is invalid input!</p>}
    </div>
  );
};

export default Input;
