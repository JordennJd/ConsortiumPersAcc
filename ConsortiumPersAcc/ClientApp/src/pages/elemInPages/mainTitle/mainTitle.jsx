import './animation/animation.css';
import style from './mainTitle.module.css';



const MainTitle = () => {
    const titleVariants = [
        " идеи",
        " люди",
        " партнёры"
    ];
    return (
        <div className={style.MainTitle__div}>
            <h1 className={style.MainTitle__h1}>
            Консорциум - это<br></br>
            <ul className={style.MainTitle__ul}>
                <div className="animation">
                {titleVariants.map(elem =>
                    <li className="MainTitle__li"> {elem}</li>
                )}
                </div>
            </ul>
            </h1>
        </div>
        
    );
}

export default MainTitle;