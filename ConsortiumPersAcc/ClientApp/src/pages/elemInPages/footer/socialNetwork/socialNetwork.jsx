import style from './socialNetwork.module.css';
import VKlogo from './../../../../image/image__logo/VKlogo.svg';
import YouTubelogo from './../../../../image/image__logo/YouTubelogo.svg';
import Telegrammlogo from './../../../../image/image__logo/Telegrammlogo.svg';


const SocialNetwork = () => {
    return (
        <div className={style.socialNetwork}>
            <img src={VKlogo} className={style.socialNetwork__img}></img>
            <img src={YouTubelogo} className={style.socialNetwork__img}></img>
            <img src={Telegrammlogo} className={style.socialNetwork__img}></img>
        </div>
    );
}

export default SocialNetwork;