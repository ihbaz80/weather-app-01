'use client'
import React, { useState } from 'react';


const ColorReader = (props: { place: any; location: { x: any; y: any; }; }) => {
    let place = props.place;
    let x = props.location.x;
    let y = props.location.y;
    
   // const [location, setLocation] = useState({x=0,y=0});

    const [color, setColor] = useState("");
    const [currentCoordinate, setCurrentCoordinate] = useState("");

    const handleFetchImage = async (x:number, y:number) => {
        
        try {
            const response = await fetch('https://www.met.gov.my/data/radar_peninsular.gif');
            const blob = await response.blob();

            const reader = new FileReader();

            reader.onload = function (event) {
                const image = new Image();
                image.onload = function () {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = image.width;
                    canvas.height = image.height;

                    ctx.drawImage(image, 0, 0, image.width, image.height);

                    const pixelData = ctx.getImageData(x, y, 1, 1).data;

                        const red = pixelData[0];
                        const green = pixelData[1];
                        const blue = pixelData[2];

                        setColor(`RGB values at (ROW:${x}, COLUMN:${y}): R=${red}, G=${green}, B=${blue}`);
                };

                image.src = event.target.result;
                
            };

            reader.readAsDataURL(blob);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    const handleMouseMove=async(event: { clientX: any; clientY: any; })=>{
        try {
            const coordX = event.clientX;
            const coordY = event.clientY;
            
            setCurrentCoordinate(`X: ${coordX} Y: ${coordY}`);
            console.log(`X: ${coordX} y: ${coordY}`);
            
        } catch (error) {
            
        }

    }

    return (
        <div onLoad ={handleFetchImage(x,y)}>   
            <img src="https://www.met.gov.my/data/radar_peninsular.gif" id="mapPeninsular" onMouseMove={handleMouseMove} alt="" width="826" height="640"></img>      
          {place} {color && <p>{color}</p>}
          X:{x} Y:{y} Current Coordinate: {currentCoordinate}
        </div>
    );
};

export default ColorReader;
