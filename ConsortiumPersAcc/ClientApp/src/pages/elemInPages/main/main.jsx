import Laboratory from './laboratory/laboratory';
import style from './main.module.css';
import {useEffect,useState} from "react";


const Main = () => {
    const [LaboratoryList, setLaboratory] = useState([])
    
    useEffect(()=>{
        fetch("api/Laboratory/GetLabs")
            .then(response=>{return response.json()})
            .then(responseJson => {
                setLaboratory(responseJson)
            })
    },[])
    const mainStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 2fr 1fr 1fr',
        gridTemplateRows: 'repeat(' + 2 + ', 1fr)',
        rowGap: '2em'
    };
    return (
        <main className={style.mainContent} style={mainStyle}>
            {
                LaboratoryList.map((Lab) =>( 
                <Laboratory id={Lab.id} nameLaboratory={Lab.name}
                />)
                )}
        {/*
        элементы - лаборатории с props
            будут передаваться координаты центра или типо того
        элемент
            линия между элементами-лаборатории
        */}
        </main>
    );
}

export default Main;