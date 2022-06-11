import React, { useReducer } from "react";
import { validate } from "../util/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const initialState = {
  value: "",
  isValid: false,
  isTouched: false,
};

const Input = (props) => {
  const [formState, dispatch] = useReducer(inputReducer, initialState);

  const inputChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={formState.value}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={formState.value}
        onBlur={inputBlurHandler}
        onChange={inputChangeHandler}
      />
    );
  return (
    <div
      className={`form-control ${
        !formState.isValid && formState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!formState.isValid && formState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
