import React from "react";
import "./canvas.css"

const CreateCanvas = () => {
    console.log('create')
    return(
        <canvas context="2d" className="canvas"></canvas>
    )
}

export default CreateCanvas;