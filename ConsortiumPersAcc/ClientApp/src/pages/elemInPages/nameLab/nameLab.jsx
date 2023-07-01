import "./nameLab.css";

const NameLab = (props) => {
    return (
        <div className="nameLab">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default NameLab;