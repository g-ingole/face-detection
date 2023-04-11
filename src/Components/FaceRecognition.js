import React from "react";
import './FaceRecognition.css';
const FaceRecognition = ({ IMAGE_URL, box }) => {
    return (
        <div>
            <div className="absolute mt2" >
                <img id="inputimage" alt="" src={IMAGE_URL} width='500' height='auto' style={{marginLeft:"500px"}}/>
                <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    )
}
export default FaceRecognition;