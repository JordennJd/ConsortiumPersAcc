import Laboratory from './laboratory/laboratory';
import style from './main.module.css';
import {useEffect,useState} from "react";

// const laboratoryList = [
//     {
//         id:'1', 
//         name:'Лаборатория технологического предпринимательства', 
//         sponsors:[
//             {id:1, name:'MegafonLogo.svg'},
//             {id:2, name:'YandexLogo.svg'},
//             {id:3, name:'GazPromLogo.svg'},
//             {id:4, name:'UniversityNTILogo.svg'},
//             {id:5, name:'KirovskiiZavodLogo.svg'}
//             ]
//         },
//     {id:'2', name:'Лаборатория интернета вещей', sponsors:[]},
//     {id:'3', name:'Лаборатория робототехники', sponsors:[]},
//     {id:'4', name:'Лаборатория беспилотных авиационных систем', sponsors:[]},
//     {id:'5', name:'Лаборатория искусственного интеллекта', sponsors:[]},
//     {id:'6', name:'Лаборатория кибербезопасности ГУАП-Infowatch', sponsors:[]}
// ];





const Main = () => {
    const mainStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 2fr 1fr 1fr',
        gridTemplateRows: 'repeat(' + 2 + ', 1fr)',
        rowGap: '2em'
    };
    const [LaboratoryList, setLaboratory] = useState([])
    useEffect(()=>{
        fetch("api/Laboratory/GetLabs")
            .then(response=>{return response.json()})
            .then(responseJson => {
                setLaboratory(responseJson)
            })
    },[])
    {console.log(LaboratoryList)}
    return (
        <main className={style.mainContent} style={mainStyle}>
            {LaboratoryList.map((laboratory) =>(
                <Laboratory id={laboratory.place} nameLaboratory={laboratory.name} sponsors={laboratory.sponsors.split('&')}/>
                ))}
           
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