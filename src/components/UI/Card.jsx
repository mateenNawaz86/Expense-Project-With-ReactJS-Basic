import React from "react";
import "./Card.css";

const Card = (props) => {
    const cardClasses = 'card ' + props.className;
    return (
        <div className={cardClasses}>{props.children}</div>
    );
};
export default Card;