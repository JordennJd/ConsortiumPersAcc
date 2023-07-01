import "./otherInfo.css";

const OtherInfo = (props) => {
    const divDescriptionStyle = {
        padding: "3em 7em",
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        alignSelf: "center"
    }
    const spanStyle = {
        fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        fontSize: "1.5em"
    }
    const avaStyle = {
        width: "100px",
        borderRadius: "50%"
    }

    return (
        <>
            <div style={divDescriptionStyle}>
                {props.infa.map(elem =>
                    <p><span className="BigNumber">{elem.col}</span>{elem.description}</p>
                )}
            </div>
            <div style={divDescriptionStyle}>
                <img src={process.env.PUBLIC_URL + "/image/otherImages/avaImg/" + props.contacts.img} style={avaStyle}></img>
                <p><span style={spanStyle}>{props.contacts.name}</span>{props.contacts.description}</p>
                <p>{props.contacts.email}</p>
                <p>{props.contacts.phoneNumber}</p>
                <p>{props.contacts.address}</p>
            </div>
        </>
    );
}

export default OtherInfo;