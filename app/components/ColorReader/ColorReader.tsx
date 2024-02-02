'use client'
import React, { MouseEventHandler, useState, useRef } from 'react';
import Cropper from 'react-image-crop';

interface LocationProperty{
    XCoordinate: number,
    YCoordinate: number,
    RedValue: number,
    GreenValue:number,
    BlueValue:number
}
//Read the color for given location
const ColorReader = (props: { place: any; location: { x: any; y: any; }; }) => {
    let place = props.place;
    let x = props.location.x;
    let y = props.location.y;
    
   // const [location, setLocation] = useState({x=0,y=0});

    const [color, setColor] = useState("");
    const [currentCoordinate, setCurrentCoordinate] = useState("");
    const [XVal, setXVal] = useState(0);
    const [YVal, setYVal] = useState(0);
    const [MyCanvas, setMyCanvas] = useState(null);
    const mapImageRef = useRef(null);

    /*
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
                    //ctx.drawImage(image, 0, 0, 570, 570, 0, 0, 600, 600);

                    const pixelData = ctx.getImageData(x, y, 1, 1).data;

                        const red = pixelData[0];
                        const green = pixelData[1];
                        const blue = pixelData[2];

                        setColor(`RGB values at (ROW:${x}, COLUMN:${y}): R=${red}, G=${green}, B=${blue}`);
                };

                //image.src = event.target.result;
                image.src = "https://www.met.gov.my/data/radar_peninsular.gif"
                
            };

            reader.readAsDataURL(blob);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };
    */


    /*
    const cropImageNow = () => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
 
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';
 
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );
 
        // Converting to base64
        const base64Image = canvas.toDataURL('image/jpeg');
        setOutput(base64Image);
    };
    */

    /*
    const handleMouseMove=async(event: { clientX: any; clientY: any; })=>{
        try {
            const coordX = event.clientX;
            const coordY = event.clientY;
            
            setCurrentCoordinate(`X: ${coordX} Y: ${coordY}`);
            console.log(`X: ${coordX} y: ${coordY}`);
            
        } catch (error) {
            
        }
    }
    */

    const handleMouseMove = async(e: any) => {
       // console.log("In MouseMove")
            
            setXVal(e.nativeEvent.offsetX)
            setYVal(e.nativeEvent.offsetY)

            //console.log(XVal)
           // console.log(YVal)

            setCurrentCoordinate(`X: ${XVal} Y: ${YVal}`)
            
                
                /*               
                const response = await fetch('https://www.met.gov.my/data/radar_peninsular.gif');
                const blob = await response.blob();

                const reader = new FileReader();
                
                reader.onload = function (event) {
                   
                    const image = new Image()
                
                    image.onload = function () {
                        console.log("Testing");
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = image.width;
                        canvas.height = image.height;

                        ctx.drawImage(image, 0, 0, image.width, image.height);

                        const pixelData = ctx.getImageData(XVal, YVal, 1, 1).data;

                        const red = pixelData[0];
                        const green = pixelData[1];
                        const blue = pixelData[2];

                        setColor(`RGB values at (ROW:${x}, COLUMN:${y}): R=${red}, G=${green}, B=${blue}`);
                        console.log(`RGB values at (ROW:${x}, COLUMN:${y}): R=${red}, G=${green}, B=${blue}`);
                        
                    };
                    reader.readAsDataURL(blob);
                */
                   /* if (reader.readyState === 2)
                    {
                        const image = new Image();
                        image.onload = function () {
                             console.log("Testing");
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            canvas.width = image.width;
                            canvas.height = image.height;
    
                            ctx.drawImage(image, 0, 0, image.width, image.height);
    
                            const pixelData = ctx.getImageData(XVal, YVal, 1, 1).data;
    
                            const red = pixelData[0];
                            const green = pixelData[1];
                            const blue = pixelData[2];
    
                            setColor(`RGB values at (ROW:${x}, COLUMN:${y}): R=${red}, G=${green}, B=${blue}`);
                            console.log(`RGB values at (ROW:${x}, COLUMN:${y}): R=${red}, G=${green}, B=${blue}`);
                        }
    
                    };*/
            
            
        }

        const ReadColor =() =>{
            console.log(` ${XVal} ${YVal}`);
        }
    return (
       /* <div onLoad ={()=>handleFetchImage(x,y)}>  */
        <div> 
          <img src="https://www.met.gov.my/data/radar_peninsular.gif" ref={mapImageRef} id="mapPeninsular" onMouseMove={handleMouseMove.bind(this)} alt="" width="826" height="640"></img>     
          {place} {color && <p>{color}</p>}
          X:{x} Y:{y}
          <br></br>
          <input type="text" name="txtXVal" value={XVal} className="input-primary"></input>
          <input type="text" name="txtYVal" value={YVal} className="input-primary"></input>
          Current Coordinate: {currentCoordinate}
        </div>
    );
};

export default ColorReader;
