import logo from '../../../../image/image__logo/logo.svg';
import './_background/header__logo_background_none.css';

const Header__logo = () => {
    return(
        <>
            <img src={logo} className='header__logo_background_none'></img>
        </>
    );
}

export default Header__logo;