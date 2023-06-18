import image from './../../../../../image/otherImages/wheelGear.svg';
import style from './circleGearWheel.module.css';

const CircleGearWheel = (props) => {
    return (
        <a href='#' className={style.circleGearWheel}>
            <img src={image} className={style.circleGearWheel__image}></img>
            <p>{props.nameLaboratory}</p>
        </a>
    );
}

export default CircleGearWheel;