import Footer from '../elemInPages/footer/footer';
import Header from '../elemInPages/header/header';
import Main from '../elemInPages/main/main';
import MainTitle from '../elemInPages/mainTitle/mainTitle';

import style from './laboratorySelection.module.css';
import {useEffect, useState} from "react";


const LaboratorySelection = (props) => {
    const [name, setName] = useState('');


    console.log(name)
    return (
        <div className={style.laboratorySelection}>
            <Header style={"header_normal"} name={props.name} setName={props.setName} />
            <MainTitle />
            <Main />
            <Footer />
        </div>
    );
}

export default LaboratorySelection;