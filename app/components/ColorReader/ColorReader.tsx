"use client";
import React, { useState, useRef } from "react";
import RiskAnalysis from "../RiskAnalysis.tsx/RiskAnalysis";
import { ImageLoader } from "next/dist/client/image-component";
//import { Typography } from "@mui/material";

interface LocationProperty {
  // XCoordinate: number;
  // YCoordinate: number;
  // RedValue: number;
  // GreenValue: number;
  // BlueValue: number;
}
//Read the color for given location
export const ColorReader = (props: {place: string;point: { x: number; y: number }}) => {
  const place = props.place;
  const x = props.point.x;
  const y = props.point.y;

  const [XVal, setXVal] = useState(0);
  const [YVal, setYVal] = useState(0);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  //const [currentPlace, setCurrentPlace]= useState("");

  //setCurrentPlace(props.place)

  const handleMouseMove = async (e: any) => {
    // console.log(e.nativeEvent.offsetX);
    // console.log(e.nativeEvent.offsetY);
    setXVal(e.nativeEvent.offsetX);
    setYVal(e.nativeEvent.offsetY);
    handleFetchImage2(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleFetchImage2 = (x: number, y: number) => {
    let img = new (window as any).Image();
    img.src = "https://www.met.gov.my/data/radar_peninsular.gif";
    img.crossOrigin = "Anonymous";
    let arrRGB = [0, 0, 0];

    console.log("Data X:" + x + " Data Y:" + y);
    img.onload = () => {
      const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
      canvas.width = img.width;
      canvas.height = img.height;

      let ctx: CanvasRenderingContext2D = canvas.getContext("2d", {
        willReadFrequently: true,
      }) as CanvasRenderingContext2D;
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(x, y, 1, 1, { colorSpace: "srgb" }).data;
      // const data = imgData.data;
      console.log(
        `RGB Data: R= ${imgData[0]} G=${imgData[1]} B=${imgData[2]} `
      );
      arrRGB[0] = imgData[0];
      arrRGB[1] = imgData[1];
      arrRGB[2] = imgData[2];

      setRed(imgData[0]);
      setGreen(imgData[1]);
      setBlue(imgData[2]);
    };
  };

  const handleImageOnLoad=(e:any)=>{
    setXVal(e.nativeEvent.offsetX);
    setYVal(e.nativeEvent.offsetY);
    handleFetchImage2(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <canvas
                id="myCanvas"
                width="826"
                height="640"
                onMouseMove={handleMouseMove.bind(this)}
                //onLoad={handleMouseMove.bind(this)}
              ></canvas>
              <img src="https://www.met.gov.my/data/radar_peninsular.gif" onLoad={handleImageOnLoad.bind(this)}></img>
            </td>
            <td valign="top">
              Setting Location: {place} <br />
              Setting Coordinate: X:{x} Y:{y} <br />
              Current Coordinate: X:{XVal} Y:{YVal} <br />
              <RiskAnalysis Place={props.place} Red={red} Green={green} Blue={blue} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ColorReader;
