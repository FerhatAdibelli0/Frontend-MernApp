import React from "react";
import PlaceList from "../components/PlaceList";

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
    id: "p1",
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
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
