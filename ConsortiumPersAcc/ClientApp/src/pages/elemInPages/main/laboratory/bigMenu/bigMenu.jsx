import { useState } from "react";
import style from "./bigMenu.module.css";

const BigMenu = (props) => {
    const Grid_column = (id) => {
        return ((id % 4 === 1 || id % 4 === 0) ? 2 : 5);
    }
    const [bigMenuStyle, getbigMenuStyle] = useState({
        gridColumnStart: Grid_column(props.id) - 1,
        gridColumnEnd: Grid_column(props.id) + 2,
        gridRowStart: props.id * 2 - 1,
        gridRowEnd: props.id * 2 + 2,
        marging: "20px",
        height: "200px",
        whith: "200px",
        justifySelf: "center",
        alignSelf: "center"
    })
    return (
        <div 
        className={style.bigMenu + " ref" + props.id} 
        style={{...props.style, ...bigMenuStyle}}
        onClick={props.click}
        >
            <h3>{props.nameLaboratory}</h3>
            {console.log(props)}
            {/*
                название
                партнёры
                проекты
                подробнее (ссылка)
            */}
        </div>
    );
}

export default BigMenu;