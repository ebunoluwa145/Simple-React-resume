import React from "react";
import './Introduction.css'

function Introduction(){
    return(
        <div className="introduction">
            <div className="contact">
            <h3>Contact</h3>
            <hr className="introductionrule" />
            <h5>+234-705-155-9767</h5>
            <h5>omosebiebunoluwa@gmail.com</h5>
            <h5>No2 Abike Afolabi street, oluyole Ibadan</h5>
            <h5>ebunoluwa.biz</h5>

            </div>
            <div className="summary">
                <h3>Summary</h3>
                <hr className="introductionrule" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consequuntur laudantium cum qui itaque voluptatum commodi, magnam quae, modi quam corrupti maxime veritatis aut ullam quis sed cupiditate est recusandae!</p>
            </div>
            
        </div>

    );
}
export default Introduction