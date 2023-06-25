import Laboratory from './laboratory/laboratory';
import style from './main.module.css';
import LeaderLine from "react-leader-line";
import { useRef, useEffect, createRef } from 'react';

const laboratoryList = [
    {
        id: '1',
        name: 'Лаборатория технологического предпринимательства',
        sponsors: [
            { id: 1, name: 'MegafonLogo.svg' },
            { id: 2, name: 'YandexLogo.svg' },
            { id: 3, name: 'GazPromLogo.svg' },
            { id: 4, name: 'UniversityNTILogo.svg' },
            { id: 5, name: 'KirovskiiZavodLogo.svg' }
        ]
    },
    {
        id: '2', name: 'Лаборатория интернета вещей', sponsors: [
            { id: 1, name: 'MegafonLogo.svg' },
            { id: 2, name: 'YandexLogo.svg' },
            { id: 3, name: 'GazPromLogo.svg' },
            { id: 4, name: 'UniversityNTILogo.svg' },
            { id: 5, name: 'KirovskiiZavodLogo.svg' }
        ]
    },
    {
        id: '3', name: 'Лаборатория робототехники', sponsors: [
            { id: 1, name: 'MegafonLogo.svg' },
            { id: 2, name: 'YandexLogo.svg' },
            { id: 3, name: 'GazPromLogo.svg' },
            { id: 4, name: 'UniversityNTILogo.svg' },
            { id: 5, name: 'KirovskiiZavodLogo.svg' }
        ]
    },
    {
        id: '4', name: 'Лаборатория беспилотных авиационных систем', sponsors: [
            { id: 1, name: 'MegafonLogo.svg' },
            { id: 2, name: 'YandexLogo.svg' },
            { id: 3, name: 'GazPromLogo.svg' },
            { id: 4, name: 'UniversityNTILogo.svg' },
            { id: 5, name: 'KirovskiiZavodLogo.svg' }
        ]
    },
    {
        id: '5', name: 'Лаборатория искусственного интеллекта', sponsors: [
            { id: 1, name: 'MegafonLogo.svg' },
            { id: 2, name: 'YandexLogo.svg' },
            { id: 3, name: 'GazPromLogo.svg' },
            { id: 4, name: 'UniversityNTILogo.svg' },
            { id: 5, name: 'KirovskiiZavodLogo.svg' }
        ]
    },
    {
        id: '6', name: 'Лаборатория кибербезопасности ГУАП-Infowatch', sponsors: [
            { id: 1, name: 'MegafonLogo.svg' },
            { id: 2, name: 'YandexLogo.svg' },
            { id: 3, name: 'GazPromLogo.svg' },
            { id: 4, name: 'UniversityNTILogo.svg' },
            { id: 5, name: 'KirovskiiZavodLogo.svg' }
        ]
    }
];

const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(' + laboratoryList.at(-1).id + ', 1fr)',
    alignItems: 'stretch',
    justifyItems: 'stretch',
    rowGap: '2em'
};



const Main = () => {

    useEffect(() => {
        const lineOptions = {
            endPlug: "behind",
            path: "straight",
            color: "rgba(255, 255, 255, 0.5)"
        };
        for (let i = 1; i < laboratoryList.length; i++) {
            new LeaderLine(document.getElementsByClassName("ref" + i)[0], document.getElementsByClassName("ref" + (i+1))[0], lineOptions);
        }
    }, []);

    let i = 1
    return (
        <main className={style.mainContent} style={mainStyle}>
            {laboratoryList.map(laboratory =>
                <Laboratory
                    id={laboratory.id}
                    ref={laboratoryList.ref}
                    nameLaboratory={laboratory.name}
                    sponsors={laboratory.sponsors}
                />
            )}

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