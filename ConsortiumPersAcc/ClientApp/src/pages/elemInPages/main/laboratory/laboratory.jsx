import { useState } from "react";
import CircleGearWheel from "./circleGearWheel/circleGearWheel";
import style from './laboratory.module.css';
import Sponsors from "./sponsors/sponsors";

const Laboratory = (props) => {
    const Grid_column = (id) => {
        return ((id % 4 === 1 || id % 4 === 0) ? 2 : 5);
    }
    const laboratoryStyle = {
        gridColumn: Grid_column(props.id),
        gridRow: props.id * 2
    }
    const SponsorsPokazStyle = {
        gridColumnStart: Grid_column(props.id) - 1,
        gridColumnEnd: Grid_column(props.id) + 2,
        gridRowStart: props.id * 2 - 1,
        gridRowEnd: props.id * 2 + 2,
        /*gridRow:  + "/" + ,*/
        /*border: '1px #fff solid',*/
        marging: "20px"
    }
    const [sponsorsStyle, setSponsorsStyle] = useState({
        opacity: 0
    });
    const [center, setCenter] = useState();

    return (
        <>
            <div className={style.laboratory}
                id={props.id}
                ref={props.ref}
                style={laboratoryStyle}
                onMouseEnter={(e) => {
                    setSponsorsStyle({ opacity: 1 })
                }}
                onMouseLeave={() => { setSponsorsStyle({ opacity: 0 }) }}
            >
                <CircleGearWheel key={props.id} id={props.id} nameLaboratory={props.nameLaboratory}
                    parent={center} sponsors={props.sponsors} style={sponsorsStyle}
                />
                <Sponsors parent={center} sponsors={props.sponsors} style={sponsorsStyle} />
                {/*
            кружок
            спонсоры
            открывающееся меню
        */}
            </div>
            <div style={SponsorsPokazStyle}
                onMouseEnter={(e) => {
                    setSponsorsStyle({ opacity: 1 })
                    e.target.getBoundingClientRect();
                    setCenter(e.target.getBoundingClientRect());
                }}
                onMouseLeave={() => { setSponsorsStyle({ opacity: 0 }) }
                }>

            </div>
        </>
    );
}

export default Laboratory;