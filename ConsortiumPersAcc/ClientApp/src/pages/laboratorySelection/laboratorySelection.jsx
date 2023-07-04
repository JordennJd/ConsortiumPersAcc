import Footer from '../elemInPages/footer/footer';
import Header from '../elemInPages/header/header';
import Main from '../elemInPages/main/main';
import MainTitle from '../elemInPages/mainTitle/mainTitle';

import style from './laboratorySelection.module.css';

const LaboratorySelection = () => {
    return (
        <div className={style.laboratorySelection}>
            <Header style={"header_normal"} />
            <MainTitle />
            <Main />
            <Footer />
        </div>
    );
}

export default LaboratorySelection;