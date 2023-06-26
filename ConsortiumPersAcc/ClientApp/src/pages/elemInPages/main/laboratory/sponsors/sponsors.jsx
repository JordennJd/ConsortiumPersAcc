import { useState } from 'react';
import style from './sponsors.module.css';

const Sponsors = (props) => {
    let i = 1;
    return (
        <div className={style.sponsors} style={props.style}>
            {/*props.sponsors.map(elem =>
            <>
                {}
                <img 
                src={process.env.PUBLIC_URL + '/image/otherImages/SponsorsLogo/' + elem.name} 
                className={style.sponsors__img} 
                style={sponsorsStyle}
                />
            </>    
            )*/}

            {props.sponsors.map(elem => (
                <>
                    <Image elem={elem} countSponsors={5} id={i++} parent={props.parent} />
                </>
            ))}
        </div>
    );
}

const Image = (props) => {
    if (typeof props.parent != "undefined") {
        const countSponsors = props.countSponsors;
        const arc = Math.PI * (1 / countSponsors);
        const radius = 100;

        const angle = props.id * arc + 9 * Math.PI / 10;
        const x = radius * Math.cos(angle) + props.parent.width/8.5 + "px";//
        const y = radius * Math.sin(angle) - props.parent.height/1.55 + "px";//
        const sponsorsStyle = {
            position: "absolute",
            left: x,
            top: y
        }
        return (
            <>
                <img
                    src={process.env.PUBLIC_URL + '/image/otherImages/SponsorsLogo/' + props.elem+'logo.svg'}
                    className={style.sponsors__img}
                    style={sponsorsStyle}
                />
            </>
        );
    } else {
        return (<></>);
    }


}

export default Sponsors;