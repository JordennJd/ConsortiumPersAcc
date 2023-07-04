import Laboratory from './laboratory/laboratory';
import style from './main.module.css';
import LeaderLine from "react-leader-line";
import { useRef, useEffect, useLayoutEffect, createRef, useState } from 'react';
import Laboratory_copy from './laboratory/laboratory_copy';

// const LaboratoryList = [
//     {
//         id: '1',
//         name: 'Лаборатория технологического предпринимательства',
//         sponsors: [
//             { id: 1, name: 'MegafonLogo' },
//             { id: 2, name: 'YandexLogo' },
//             { id: 3, name: 'GazPromLogo' },
//             { id: 4, name: 'UniversityNTILogo' },
//             { id: 5, name: 'KirovskiiZavodLogo' }
//         ],
//         partners: [
//             { id: 1, name: 'GazProm' },
//             { id: 2, name: 'Megafon' },
//             { id: 3, name: 'SilovMash' },
//             { id: 4, name: 'Rosseti' }
//         ]
//     },
//     {
//         id: '2', name: 'Лаборатория интернета вещей', sponsors: [
//             { id: 1, name: 'MegafonLogo' },
//             { id: 2, name: 'YandexLogo' },
//             { id: 3, name: 'GazPromLogo' },
//             { id: 4, name: 'UniversityNTILogo' },
//             { id: 5, name: 'KirovskiiZavodLogo' }
//         ],
//         partners: [
//             { id: 1, name: "nationalInstruments" },
//             { id: 2, name: "kuka" }
//         ]
//     },
//     {
//         id: '3', name: 'Лаборатория робототехники', sponsors: [
//             { id: 1, name: 'MegafonLogo' },
//             { id: 2, name: 'YandexLogo' },
//             { id: 3, name: 'GazPromLogo' },
//             { id: 4, name: 'UniversityNTILogo' },
//             { id: 5, name: 'KirovskiiZavodLogo' }
//         ],
//         partners: [
//             { id: 1, name: "nationalInstruments" },
//             { id: 2, name: "kuka" }
//         ]
//
//     },
//     {
//         id: '4', name: 'Лаборатория беспилотных авиационных систем', sponsors: [
//             { id: 1, name: 'MegafonLogo' },
//             { id: 2, name: 'YandexLogo' },
//             { id: 3, name: 'GazPromLogo' },
//             { id: 4, name: 'UniversityNTILogo' },
//             { id: 5, name: 'KirovskiiZavodLogo' }
//         ],
//         partners: [
//             { id: 1, name: 'GazProm' },
//             { id: 2, name: 'Megafon' },
//             { id: 3, name: 'SilovMash' },
//             { id: 4, name: 'Rosseti' }
//         ]
//     },
//     {
//         id: '5', name: 'Лаборатория искусственного интеллекта', sponsors: [
//             { id: 1, name: 'MegafonLogo' },
//             { id: 2, name: 'YandexLogo' },
//             { id: 3, name: 'GazPromLogo' },
//             { id: 4, name: 'UniversityNTILogo' },
//             { id: 5, name: 'KirovskiiZavodLogo' }
//         ],
//         partners: [
//             { id: 1, name: 'GazProm' },
//             { id: 2, name: 'Megafon' },
//             { id: 3, name: 'SilovMash' },
//             { id: 4, name: 'Rosseti' }
//         ]
//     },
//     {
//         id: '6', name: 'Лаборатория кибербезопасности ГУАП-Infowatch', sponsors: [
//             { id: 1, name: 'MegafonLogo' },
//             { id: 2, name: 'YandexLogo' },
//             { id: 3, name: 'GazPromLogo' },
//             { id: 4, name: 'UniversityNTILogo' },
//             { id: 5, name: 'KirovskiiZavodLogo' }
//         ],
//         partners: [
//             { id: 1, name: 'GazProm' },
//             { id: 2, name: 'Megafon' },
//             { id: 3, name: 'SilovMash' },
//             { id: 4, name: 'Rosseti' }
//         ]
//     }
// ];



const Main = () => {

    const [line, setLine] = useState(new Map());
    let [click, setClick] = useState(false)
    const [LaboratoryList, setLaboratory] = useState([])
   useEffect(()=>fetch("api/Laboratory/GetLabs")
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            setLaboratory(responseJson)
        }),[])
    const mainStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(' + LaboratoryList.length + ', 100px 1fr) 100px',
        alignItems: 'stretch',
        justifyItems: 'center',
    };
    console.log(LaboratoryList)
    useEffect(() => {
        const lineOptions = {
            endPlug: "behind",
            path: "straight",
            color: "rgba(255, 255, 255, 0.5)"
        };
        for (let i = 1; i < LaboratoryList.length; i++) {
            let startElem = (
                window.getComputedStyle(document.getElementsByClassName("ref" + i)[1]).display == "none") ?
                document.getElementsByClassName("ref" + i)[0] :
                document.getElementsByClassName("ref" + i)[1];
            let endElem = (
                window.getComputedStyle(document.getElementsByClassName("ref" + (i + 1))[1]).display == "none") ?
                document.getElementsByClassName("ref" + (i + 1))[0] :
                document.getElementsByClassName("ref" + (i + 1))[1];

            setLine(line.set(i, new LeaderLine(
                startElem,
                endElem,
                lineOptions)
            ))
        }
        return () => {
            for (let j = 1; j < LaboratoryList.length; j++) {
                line.get(j).remove();
            }
        }
    }, [click]);

    let i = 1
    return (
        <main
            className={style.mainContent}
            style={mainStyle}
            onClick={() => {
                for (let i = 1; i < LaboratoryList.length; i++) {
                    // document.getElementsByClassName("ref" + i)[1].style.display = "none"
                    // document.getElementsByClassName("conteiner" + i)[0].style.display = "block"
                }
                setClick(click => !click)

            }}
        >
            {LaboratoryList.map(laboratory =>
                <Laboratory
                    id={laboratory.id}
                    ref={LaboratoryList.ref}
                    nameLaboratory={laboratory.name}
                    sponsors={laboratory.sponsors}
                    partners={LaboratoryList.partners}
                    line={line}
                />
            )}
            {/*laboratoryList.map(laboratory =>
                <Laboratory_copy
                    id={laboratory.id}
                    ref={laboratoryList.ref}
                    nameLaboratory={laboratory.name}
                    sponsors={laboratory.sponsors}
                    partners={laboratoryList.partners}
                />
            )*/}
            {/*
        элементы - лаборатории с props
            будут передаваться координаты центра или типо того
        элемент
            линия между элементами-лаборатории
        */}
        </main >
    );
}

export default Main;
