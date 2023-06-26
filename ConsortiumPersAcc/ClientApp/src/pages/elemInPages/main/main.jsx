import Laboratory from './laboratory/laboratory';
import style from './main.module.css';
import LeaderLine from "react-leader-line";
import { useRef, useEffect, createRef,useState } from 'react';
const Main = () => {
    const [LaboratoryList, setLaboratory] = useState([])
    window.addEventListener('load', () => {
        fetch("api/Laboratory/GetLabs")
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                setLaboratory(responseJson)
            })
    })
    useEffect(()=>{
        
        const lineOptions = {
            endPlug: "behind",
            path: "straight",
            color: "rgba(255, 255, 255, 0.5)"}
            for (let i = 1; i < LaboratoryList.length; i++) {
            new LeaderLine(document.getElementsByClassName("ref" + i)[0],
                document.getElementsByClassName("ref" + (i+1))[0], lineOptions);

        };
    })
    console.log(LaboratoryList)
        
    const mainStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(' + LaboratoryList.at(-1) + ', 100px 1fr) 100px',
        alignItems: 'stretch',
        justifyItems: 'stretch',
    };
    return (
        <main className={style.mainContent} style={mainStyle}>
            {LaboratoryList.map((laboratory) =>(
                <Laboratory id={laboratory.place} ref={LaboratoryList.ref} nameLaboratory={laboratory.name} sponsors={laboratory.sponsors.split('&')}/>
            ))}

        </main>
    );
}

export default Main;