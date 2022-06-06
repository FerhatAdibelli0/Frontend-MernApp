import React from "react";
import Card from "../../shared/components/UIElement/Card";
import Button from "../../shared/components/FormElements/Button"
import "./PlaceItem.css";

const PlaceItem = (props) => (
  <li className="place-item">
    <Card className="place-item__content">
      <div className="place-item__image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="place-item__info">
        <h2>{props.title}</h2>
        <p>{props.address}</p>
        <h3>{props.description}</h3>
      </div>
      <div className="place-item__actions">
        <Button inverse >VIEW ON MAP</Button>
        <Button to={`/places/${props.id}`}>EDIT</Button>
        <Button danger>DELETE</Button>
      </div>
    </Card>
  </li>
);

export default PlaceItem;
