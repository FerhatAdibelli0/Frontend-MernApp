import React, { useCallback, useReducer } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/util/validators";
import "./FormPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      let formisValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formisValid = formisValid && action.isValid;
        } else {
          formisValid = formisValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formisValid,
      };
    default:
      return state;
  }
};

const initialState = {
  inputs: {
    input: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
    address: {
      value: "",
      isValid: false,
    },
  },
  isValid: false,
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const validityHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "CHANGE_INPUT",
      isValid: isValid,
      inputId: id,
      value: value,
    });
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState); // send data to backend
  };

  return (
    <form onSubmit={formSubmitHandler} className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        id="input"
        onAdd={validityHandler}
        errorText="Please enter valid input!"
        validators={[VALIDATOR_REQUIRE()]}
      />
      <Input
        type="textarea"
        label="Description"
        id="description"
        onAdd={validityHandler}
        errorText="Please enter valid description(at least 5 characters)."
        validators={[VALIDATOR_MINLENGTH(5)]}
      />
      <Input
        element="input"
        type="input"
        label="Address"
        id="address"
        onAdd={validityHandler}
        errorText="Please enter valid address."
        validators={[VALIDATOR_REQUIRE()]}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>
  );
};

export default NewPlace;
