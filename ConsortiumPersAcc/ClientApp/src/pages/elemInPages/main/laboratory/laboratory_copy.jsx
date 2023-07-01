import { useState } from "react";
import CircleGearWheel from "./circleGearWheel/circleGearWheel";
import style from './laboratory.module.css';
import Sponsors from "./sponsors/sponsors";
import BigMenu from "./bigMenu/bigMenu";

const Laboratory_copy = (props) => {
    const Grid_column = (id) => {
        return ((id % 4 === 1 || id % 4 === 0) ? 2 : 5);
    }
    const laboratoryStyle = {
        gridColumn: Grid_column(props.id),
        gridRow: props.id * 2
    }
    const [SponsorsPokazStyle, getSponsorsPokazStyle] = useState({
        gridColumnStart: Grid_column(props.id) - 1,
        gridColumnEnd: Grid_column(props.id) + 2,
        gridRowStart: props.id * 2 - 1,
        gridRowEnd: props.id * 2 + 2,
        marging: "20px"
    })
    const [sponsorsStyle, setSponsorsStyle] = useState({
        opacity: 0
    });
    const [BigMenuStyle, setBigMenuStyle] = useState({
        display: "none"
    })
    const [replaceOnBigMenu, setReplaceOnBigMenu] = useState({
        display: "block"
    })
    const [center, setCenter] = useState();
    const [flag, setFlag] = useState(true)
    if (flag) {
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
                    <CircleGearWheel key={props.id} id={props.id} nameLaboratory={props.nameLaboratory} />
                    <Sponsors parent={center} sponsors={props.sponsors} style={sponsorsStyle} />

                </div>
                <div style={SponsorsPokazStyle}
                    onMouseEnter={(e) => {
                        setSponsorsStyle({ opacity: 1 })
                        e.target.getBoundingClientRect();
                        setCenter(e.target.getBoundingClientRect());
                    }}
                    onMouseLeave={() => { setSponsorsStyle({ opacity: 0 }) }}
                    onClick={() => {
                        console.log("click!");
                        setFlag(!flag);
                        setBigMenuStyle({ display: "block" });
                        setReplaceOnBigMenu({ display: "none" });
                        setSponsorsStyle({ display: "none" });
                        getSponsorsPokazStyle({display: "none"});
                    }}
                >

                </div>
            </>
        );
    } else {
        return (
            <>
            <BigMenu
                id={props.id}
                nameLaboratory={props.nameLaboratory}
                partners={props.partners}
                projects={props.projects}
                style={BigMenuStyle}
                click={ () => {
                    console.log("click!");
                    setFlag(false);
                    setBigMenuStyle({ display: "none" });
                    setReplaceOnBigMenu({ display: "block" });
                    setSponsorsStyle({ display: "block" });
                    getSponsorsPokazStyle({ display: "none" })
                }}
            />
            <div style={SponsorsPokazStyle}
                onClick={() => {
                    console.log("click!");
                    setFlag(true);
                    setBigMenuStyle({ display: "none" });
                    setReplaceOnBigMenu({ display: "block" });
                    setSponsorsStyle({ display: "block" });
                    getSponsorsPokazStyle({ display: "none" })
                }}
            >

            </div>
        </>
        );
        
    }
    /*
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
                onClick={() => {
                    setBigMenuStyle({ display: "block" });
                    setReplaceOnBigMenu({ display: "none" });
                    sponsorsStyle({ display: "none" });
                }}
            >
                <CircleGearWheel key={props.id} id={props.id} nameLaboratory={props.nameLaboratory} style={replaceOnBigMenu} />
                <Sponsors parent={center} sponsors={props.sponsors} style={sponsorsStyle} />
                <BigMenu
                    id={props.id}
                    nameLaboratory={props.nameLaboratory}
                    partners={props.partners}
                    projects={props.projects}
                />
                
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
    );*/
}

export default Laboratory_copy;