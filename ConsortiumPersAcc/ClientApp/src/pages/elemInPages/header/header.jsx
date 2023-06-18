import Header__logo from './__logo/header__logo';
import Hedaer__navigation from './__navigation/header__navigation';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <Header__logo />
            <Hedaer__navigation />
        </header>
    );
}

export default Header;