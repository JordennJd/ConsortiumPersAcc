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
        gridRow: props.id
    }
    const SponsorsPokazStyle = {
        gridColumn: Grid_column(props.id),
        gridRow: props.id
    }
    const [sponsorsStyle, setSponsorsStyle] = useState({
        display: 'none'
    });
    const [center, setCenter] = useState();
    
    return (
        <>
        <div className={style.laboratory}
            id={props.id}
            ref={props.ref}
            style={laboratoryStyle}
            >
            <CircleGearWheel key={props.id} id={props.id} nameLaboratory={props.nameLaboratory} />
            <Sponsors parent={center} sponsors={props.sponsors} style={sponsorsStyle} />
            {/*
            кружок
            спонсоры
            открывающееся меню MegafonLogo.png
        */}
        </div>
        <div style={SponsorsPokazStyle}
        onMouseEnter={(e) => {
            setSponsorsStyle({ display: 'block' })
            e.target.getBoundingClientRect();
            setCenter(e.target.getBoundingClientRect());
        }}
        onMouseLeave={() => { setSponsorsStyle({ display: 'none' }) }
        }></div>
        </>
    );
}

export default Laboratory;