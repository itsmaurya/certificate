import React, { useState, useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "../App.css"
import Certificate from "./Certificate.png";
import Navbar from "./Navbar";

const App = () => {
    const certificateWrapper = useRef(null);
    const [Name, setName] = useState("");
    const [Title, setTitle] = useState("");
    const [info, setInfo] = useState("");
    const [imageSrc, setImageSrc] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageSrc = e.target.result;
            setImageSrc(imageSrc);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="App">
            <Navbar />
            <div className="Meta">

                <h1 style={{textAlign:"center", paddingBottom:"20px", fontFamily:"Josefin Sans"}}>Details Form</h1>

                <p>Upload Certificate logo</p>
                <input type="file" onChange={handleImageUpload} style={{background:"#fff", color:"#000b2c"}}/>


                <p>Please enter Title of certificate</p>
                <input
                    type="text"
                    placeholder="Please enter Title of certificate"
                    value={Title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <p>Please enter your name.</p>
                <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={Name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <p>Please enter Description of certificate</p>
                <textarea
                    type="text"
                    placeholder="Please enter Description of certificate"
                    value={info}
                    onChange={(e) => {
                        setInfo(e.target.value);
                    }}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        exportComponentAsPNG(certificateWrapper, {
                            html2CanvasOptions: { backgroundColor: null }
                        });
                    }}
                >
                    <ion-icon name="cloud-download-outline"></ion-icon> 
                     Download Certificate
                </button>
            </div>

            <div id="downloadWrapper" ref={certificateWrapper}>
                <div id="certificateWrapper" >
                 {imageSrc && <img className="logo" src={imageSrc} />}
                    <h2>{Title}</h2>
                    <p>{Name}</p>
                    <p className="description">{info}</p>
                    <img src={Certificate}  />
                </div>
            </div>
        </div>
    );
};

export default App;
