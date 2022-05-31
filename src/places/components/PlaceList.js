import React from "react";
import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElement/Card";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found.Maybe create one ?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            title={place.title}
            image={place.image}
            creator={place.creator}
            address={place.address}
            description={place.description}
            coordinator={place.coordinator}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
