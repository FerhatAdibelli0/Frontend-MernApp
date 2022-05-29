import React from "react";
import Avatar from "../../shared/components/UIElement/Avatar";
import Card from "../../shared/components/UIElement/Card";
import { Link } from "react-router-dom";
import "./userItem.css";

const UserItem = (props) => {
  return (
    <div className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
            </h3>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default UserItem;
