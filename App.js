import React from "react";
import ReactDOM from "react-dom/client";


const HeaderComponent = () => {
return (<div className="header">
    <div className="logo">  
        <img src="https://images-platform.99static.com//XjwbkQ5tf1RpCZSNedwjAB8DyTE=/0x0:1000x1000/fit-in/590x590/99designs-contests-attachments/95/95490/attachment_95490984" alt="logo" />
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>   
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
</div>);

}

//React Element => Object => HTMLElement (Rendering on DOM)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);