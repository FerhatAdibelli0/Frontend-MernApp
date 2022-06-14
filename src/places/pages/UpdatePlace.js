import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/util/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    creator: "u1",
    title: "Empire State Building",
    address: "20 W 34th St, New York, NY 10001, United States",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    coordinator: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    description: "One of the most famous sky scrapers in the world!",
  },
  {
    id: "p2",
    creator: "u2",
    title: "Empire State Building",
    address: "20 W 34th St, New York, NY 10001, United States",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    coordinator: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    description: "One of the most famous sky scrapers in the world!",
  },
  {
    id: "p3",
    creator: "u3",
    title: "Empire State Building",
    address: "20 W 34th St, New York, NY 10001, United States",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    coordinator: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    description: "One of the most famous sky scrapers in the world!",
  },
  {
    id: "p4",
    creator: "u4",
    title: "Empire State Building",
    address: "20 W 34th St, New York, NY 10001, United States",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    coordinator: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    description: "One of the most famous sky scrapers in the world!",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const detailedPlace = DUMMY_PLACES.find((place) => place.id === placeId);
  if (!detailedPlace) {
    return (
      <div className="center">
        <h4>Could not such place! </h4>
      </div>
    );
  }

  return (
    <form>
      <Input
        element="input"
        type="text"
        id="input"
        label="Title"
        onEdit={() => {}}
        errorText="Please enter valid input."
        validators={[VALIDATOR_REQUIRE()]}
        valid={true}
        value={detailedPlace.title}
      />
      <Input
        element="description"
        type="textarea"
        id="description"
        label="Description"
        onEdit={() => {}}
        errorText="Please enter valid description(at least 5 characters)."
        validators={[VALIDATOR_MINLENGTH(5)]}
        valid={true}
        value={detailedPlace.description}
      />
      <Button type="submit" disabled={true}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
