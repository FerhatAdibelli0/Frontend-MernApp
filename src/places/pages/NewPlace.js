import React, { useCallback } from "react";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/util/validators";
import "./NewPlace.css";

const NewPlace = () => {
  const inputValidityHandler = useCallback((id, value, isValid) => {
    console.log("id :" + id, "value :" + value, "isValid :" + isValid);
  }, []);
  const textareaValidityHandler = useCallback((id, value, isValid) => {
    console.log("id :" + id, "value :" + value, "isValid :" + isValid);
  }, []);

  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        id="input"
        onAdd={inputValidityHandler}
        errorText="Please enter valid input!"
        validators={[VALIDATOR_REQUIRE()]}
      />
      <Input
        type="textarea"
        label="Description"
        id="description"
        onAdd={textareaValidityHandler}
        errorText="Please enter valid description(at least 5 characters)."
        validators={[VALIDATOR_MINLENGTH(5)]}
      />
    </form>
  );
};

export default NewPlace;
