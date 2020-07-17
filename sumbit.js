import React from "react"
import Styles from "./styles.css"





const Sumbit =() => {
    return (

        <div className="container">
            <form className="form-container">
        <h2 className="header-form">
            JavaScript Authentication
        </h2>
        <div className="form-control">
        <label className="username-label" for="username">UserName </label>
        <input type="text" className="username" placeholder="Username"></input>
        </div>
        <div >
        <label className="form-control">E-Mail </label>
        <input type="text" className="email" placeholder="E-mail"></input>
        </div>
        <div className="form-control">
        <label className="username-password" >Password </label>
        <input type="password" className="password" placeholder="Password"></input>
        </div>
        <div className="form-control">
        <label>Password </label>
        <input type="password" className="password2" placeholder="Password"></input>
        </div>
        <div className="form-button"><button className="button-submit">Sumbit</button></div>
            </form>
            
            


        </div>

    );
};




export default Sumbit;