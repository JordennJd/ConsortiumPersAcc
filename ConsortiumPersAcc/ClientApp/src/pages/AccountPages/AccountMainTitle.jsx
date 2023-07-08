import React from "react";


const Account = (props) => {
    const submit = () =>{
    //     Тут html запрос 
    }
    
    
    return (
        <div >
            здарова
            <form onSubmit={submit}>
                <p><b>Введите ваше предложение</b></p>
                <p><textarea rows="10" cols="45" name="text"></textarea></p>
                <p><input type="submit" value="Отправить"/></p>
            </form>
        </div>
    );
}

export default Account;