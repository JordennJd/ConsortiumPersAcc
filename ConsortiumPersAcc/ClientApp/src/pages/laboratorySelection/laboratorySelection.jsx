import Header from '../elemInPages/header/header';
import Main from '../elemInPages/main/main';
import MainTitle from '../elemInPages/mainTitle/mainTitle';

import style from './laboratorySelection.module.css';

const LaboratorySelection = () => {
    return (
        <div className={style.laboratorySelection}>
            <Header />
            <MainTitle />
            <Main />
        </div>
    );
}

export default LaboratorySelection;