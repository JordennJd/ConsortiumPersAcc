import style from "./mainInfo.module.css";
import OtherInfo from "./otherInfo/otherInfo";
import PictureWithDescription from "./pictureWithDescription/pictureWithDescription";

const MainInfo = (props) => {

    const conteinerStyle = {
        gridTemplateColumns: 'repeat(2, 50%)'
        /*gridTemplateRows: 'repeat(' + props.infa.at(-1).id + ', 1fr)',*/
    }

    return (
        <main className={style.mainInfo}>
            {props.pictureWithDescription.map(elem => 
                    <PictureWithDescription id={elem.id} img={elem.picture} headline={elem.headline} description={elem.description} />
            )}
            {console.log(props.infa.infa)}
            <OtherInfo infa={props.infa} contacts={props.contacts}/>
        </main>
    );
}

export default MainInfo;