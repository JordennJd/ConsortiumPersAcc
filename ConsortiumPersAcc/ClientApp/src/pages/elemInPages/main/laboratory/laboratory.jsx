import { useState } from "react";
import CircleGearWheel from "./circleGearWheel/circleGearWheel";
import style from './laboratory.module.css';
import Sponsors from "./sponsors/sponsors";

const Laboratory = (props) => {
    const Grid_column = (id) => {
        console.log(id);
        console.log(props.id);
        console.log((id % 4 === 1 || id % 4 === 0) ? 2 : 5);
        return ((id % 4 === 1 || id % 4 === 0) ? 2 : 5);
    }
    const laboratoryStyle = {
        gridColumn: Grid_column(props.id),
        gridRow: props.id
    }
    //const rect = ref.current.getBoundingClientRect();
    const [sponsorsStyle, getSponsorsStyle] = useState({
        border: '1px blue solid',
        display:'none'
    });
    const fff = (e) => {
        const parent = e.target.parentNode.getBoundingClientRect();
        const element = e.target.getBoundingClientRect();

        const x = element.left;
        const y = element.top;

        console.log(x, y);
    };

    return (
        <div className={style.laboratory} style={laboratoryStyle} onMouseOverCapture={() => getSponsorsStyle({display:'block'})} onMouseOutCapture={() => getSponsorsStyle({display:'none'})}>
            <CircleGearWheel key={props.id} nameLaboratory={props.nameLaboratory} />
            <Sponsors sponsors={props.sponsors} center={0} style={sponsorsStyle}/>
            {/*
            кружок
            спонсоры
            открывающееся меню MegafonLogo.png
        */}

        </div>
    );
}

export default Laboratory;