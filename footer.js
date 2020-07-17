import React from "react"
import Github from "./compo/github-image.png"
import Facebook from "./compo/facebook (4).png"
import Instagram from "./compo/instagram.png"




const Footer = () => {
    return(

<div className="footer-footer">
<p className="footer-p">
 <img src={Instagram}></img> Instagram ||  @alexanderzhill
<br></br> <br></br>
    <img src={Facebook}></img> Facebook || Kiser Hill
    <br>
    </br>
   <img src={Github}></img> GitHub:Alexander-hill
</p>
</div>

    );
};


export default Footer;