import styles from './Card.module.css'

const Card = (props) => {
    const classes = `${styles.card} ` + props.className;
    console.log(classes)
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;