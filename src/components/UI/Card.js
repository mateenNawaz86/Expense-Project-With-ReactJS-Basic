import './Card.css';

function Card(props) {
    // do the same thing when we fetch the classes from outside
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;