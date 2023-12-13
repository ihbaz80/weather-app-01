import React from 'react';
import Image from "next/image"; 

const ReadMap = () => {
  interface Temperature{
    place: string;
    red: number;
    green:number;
    blue:number;
    }

    const canvas = React.createElement("img", "https://www.met.gov.my/data/radar_peninsular.gif");
    
    //const ctx = canvas.getContext('2d');
    //const img = new Image();
    //img.onload = function () {
    //ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  // const pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
   // Assuming you want the RGB values of a specific pixel, let's say (x, y)
    //const x = 100;
    //const y = 100;

     //           const red = pixelData[(y * canvas.width + x) * 4];
      //          const green = pixelData[(y * canvas.width + x) * 4 + 1];
      //          const blue = pixelData[(y * canvas.width + x) * 4 + 2];

     //           console.log(`RGB values at (${x}, ${y}): R=${red}, G=${green}, B=${blue}`);



  return (
    <div>
      <Image src="https://www.met.gov.my/data/radar_peninsular.gif" alt="" width="826" height="640"></Image>
    </div>

  )
}

export default ReadMap