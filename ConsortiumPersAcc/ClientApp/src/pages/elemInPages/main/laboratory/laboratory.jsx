import CircleGearWheel from "./circleGearWheel/circleGearWheel";
import style from './laboratory.module.css';



const Laboratory = (props) => {
        const Grid_column = (id) => {
            console.log(id);
            console.log(props.id);
            console.log((id%4==1 || id%4==0) ? 2 : 4);
            return ((id%4==1 || id%4==0) ? 2 : 4);
        }
        console.log(props);
        const laboratoryStyle = {
            gridColumn:  Grid_column(props.id),
            gridRow: props.id
        }
    return (
        <div className={style.laboratory} style={laboratoryStyle}>
            <CircleGearWheel  key={props.keu} nameLaboratory={props.nameLaboratory}/>
        {/*
            кружок
            спонсоры
            открывающееся меню
            <a><img src={image}></img></a>
        */}
        </div>
    );
}

export default Laboratory;