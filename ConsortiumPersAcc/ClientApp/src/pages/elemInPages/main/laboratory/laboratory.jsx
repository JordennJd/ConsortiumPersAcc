import { useState } from "react";
import CircleGearWheel from "./circleGearWheel/circleGearWheel";
import style from './laboratory.module.css';
import BigMenu from "./bigMenu/bigMenu";

const Laboratory = (props) => {
    const Grid_column = (id) => {
        return ((id % 4 === 1 || id % 4 === 0) ? 2 : 5);
    }
    const laboratoryStyle = {
        gridColumn: Grid_column(props.id),
        gridRow: props.id * 2,
        position: "relative"
    }
    const SponsorsPokazStyle = {
        gridColumnStart: Grid_column(props.id) - 1,
        gridColumnEnd: Grid_column(props.id) + 2,
        gridRowStart: props.id * 2 - 1,
        gridRowEnd: props.id * 2 + 2,
        /*border: '1px #fff solid',*/
        justifySelf:"stretch",
        marging: "20px"
    }
    const [sponsorsStyle, setSponsorsStyle] = useState({
        opacity: 0
    });
    const [BigMenuStyle, setBigMenuStyle] = useState({
        display: "none"
    })
    const [replaceOnBigMenu, setReplaceOnBigMenu] = useState({
        display: "block"
    })

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
                <CircleGearWheel key={props.id} id={props.id} nameLaboratory={props.nameLaboratory} style={replaceOnBigMenu} sponsors={props.sponsors} styleSponsors={sponsorsStyle} />
                <BigMenu
                    id={props.id}
                    nameLaboratory={props.nameLaboratory}
                    partners={props.partners}
                    projects={props.projects}
                    style={BigMenuStyle}
                />
                {/*
            кружок
            спонсоры
            открывающееся меню
        */}
            </div>
            <div style={SponsorsPokazStyle}
                onMouseEnter={(e) => {
                    setSponsorsStyle({ opacity: 1 })
                }}
                onMouseLeave={() => { setSponsorsStyle({ opacity: 0 }) }}
                onClick={() => {
                    setBigMenuStyle({ display: "block" });
                    setReplaceOnBigMenu({ display: "none" });
                }}
            >

            </div>
        </>
    );
}

export default Laboratory;