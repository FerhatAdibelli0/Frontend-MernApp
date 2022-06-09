import React, { useState } from "react";
import Card from "../../shared/components/UIElement/Card";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceItem.css";
import { Fragment } from "react/cjs/react.production.min";
import Modal from "../../shared/components/UIElement/Modal";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const closeModalHandler = () => setShowMap(false);
  const openModalHandler = () => setShowMap(true);
  return (
    <Fragment>
      <Modal
        onCancel={closeModalHandler}
        show={showMap}
        header={props.address}
        footer={<Button onClick={closeModalHandler}>CLOSE</Button>}
        footerClass="place-item__modal-actions"
        contentClass="place-item__modal-content"
      >
        <div className="map-container">
          <h2>THE MAP!</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={openModalHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
