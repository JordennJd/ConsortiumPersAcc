import { Link, Route } from 'react-router-dom';
import image from './../../../../../image/otherImages/wheelGear.svg';
import style from './circleGearWheel.module.css';

const CircleGearWheel = (props) => {
    let i=0;
    return (
        <Link to="/labInfo" state={{id:props.id}} className={style.circleGearWheel + " conteiner" + props.id} style={props.style}>
            <img src={image} className={style.circleGearWheel__image + " ref" + props.id}></img>
            <p>{props.nameLaboratory}</p>
            {props.sponsors.map(elem => (
                <>
                    <Image elem={elem} countSponsors={props.sponsors.length} id={i++} idLab={props.id} style={props.styleSponsors}/>
                </>
            ))}
        </Link>
    );
}

const Image = (props) => {
        const countSponsors = props.countSponsors;
        const arc = Math.PI * (1 / countSponsors);
        const radius = 100;
        let angle = 0
        if (props.idLab%4==1 || props.idLab%4==0) {
            angle = props.id * arc + 9 * Math.PI / 10;
        } else {
            angle = props.id * arc + 9 * Math.PI / 7;
        }
        
        const x = radius * Math.cos(angle) + 50  + "px";//2.8+ props.parent.width / 8
        const y = radius * Math.sin(angle) + 10 + "px";//1.45 - props.parent.height / 2.5
        const sponsorsStyle = {
            position: "absolute",
            transition: "1s",
            left: x,
            top: y
        }
        return (
            <>
                <img
                    src={process.env.PUBLIC_URL + '/image/otherImages/SponsorsLogo/' + props.elem.name + ".svg"}
                    className={style.sponsors__img}
                    style={{...sponsorsStyle, ...props.style}}
                />
            </>
        );
}

export default CircleGearWheel;