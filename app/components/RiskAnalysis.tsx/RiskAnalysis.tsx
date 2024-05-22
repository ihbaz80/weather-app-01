import React from 'react'
interface IRiskAnalysis {
  place: string,
  red: number,
  green: number,
  blue: number
}

const RiskAnalysis = (props:{Place: string, Red:number, Green:number, Blue: number}) => {
    const red = props.Red
    const green = props.Green
    const blue = props.Blue
    const place = props.Place

    console.log(props.Place)
    
    let mm_threshold =1|2|3|4|5
    let percentile=""
    let mm = 0.0
    //let mA = 0.0
    let wl = 0.00
    let wl_threshold=1|2|3|4|5
    let risk_threshold=1|2|3|4|5
    let desc=""
    let range =""

    if (red>=green && blue>90) {
      mm = (542-(0.5926*red)-(1.667*green))
    }
    else if (red>=green && blue<50 && blue>=0 && red>=180 && green<50){
      mm= (172-(0.4*red)-0.762*green)
    }
    else if (red>=green && blue<50 && red>=180 && green>=50){
      mm =(-93+(0.52*red)-(0.1438*green))
    }
    else if (green>red && red<100 && blue<100){
      mm = -1.52+(0.0139*green)
    }
    else if (green>red && blue>red && blue>200){
      mm = (-0.07157+(0.000963*red)+(0.001076*green))
    }
    // else if (red>green && green>blue){
    //   mm=0
    // }

    wl = 0.3042*Math.exp(0.0356)*mm

    //mA must be in water level range to get the threshold
    //select mm or mA which ever is highest.
  
//     console.log(place)
 if (place==="Gunung Pulai"){
  if (mm<=16.2){
  
    mm_threshold=1
    desc="Low"
    range="<80%"
  } 
  else if (mm>=16.2 && mm<=26.5){
  
    mm_threshold=2
    desc="Moderate"
    range="80%-90%"
  }
  else if (mm>26.5 && mm<=33.2){
  
    mm_threshold=3
    desc="Watch"
    range="90%"
  }
  else if (mm>33.2 && mm<=41.1){
  
    mm_threshold=4
    desc="Advisory"
    range="95%"
  }
  else if (mm>41.1){
  
    mm_threshold=5
    desc="Warning"
    range="98%"
  }

  if (wl<=1.00){
    wl_threshold=1
  }
  else if (wl>1.00 && wl<=1.53){
    wl_threshold=2
  }
  else if (wl>1.53 && wl<=1.92){
    wl_threshold=3
  }
  else if (wl>1.92 && wl<=2.37){
    wl_threshold=4
  }
  else if (wl>2.37){
    wl_threshold=5
  }

  risk_threshold = mm_threshold>wl_threshold ?  mm_threshold : wl_threshold
  

  
 }

 if (props.Place==="Gunung Berlumut"){

 }

    // if (red===0 && green===113 && blue===226) mm=0.05, threshold=1, desc="Low", range="<59.9%";
    // else if (red===5 && green===155 && blue===255) mm=0.1,threshold=1, desc="Low", range="<59.9%" ;
    // else if (red===52 && green===206 && blue===236) mm=0.2,threshold=2, desc="Moderate", range="60%-74.9%";
    // else if (red===0 && green===135 && blue===0) mm=0.5, threshold=2, desc="Moderate", range="60%-74.9%";
    // else if (red===0 && green===172 && blue===0) mm=0.8, threshold=2, desc="Moderate", range="60%-74.9%";
    // else if (red===0 && green===200 && blue===0) mm=1.0, threshold=3, desc="Watch", range="75%-89.9%";
    // else if (red===0 && green===240 && blue===0) mm=2.0, threshold=3, desc="Watch", range="75%-74.9%";
    // else if (red===255 && green===255 && blue===0) mm=5.0, threshold=4, desc="Advisory", range="90%-97.9%";
    // else if (red===255 && green===209 && blue===0) mm=8.0, threshold=5, desc="Warning", range=">98%";
    // else if (red===247 && green===165 && blue===0) mm=10.0, threshold=5 ,desc="Warning", range=">98%";
    // else if (red===247 && green===119 && blue===0) mm=20.0, threshold=5 ,desc="Warning", range=">98%";
    // else if (red===255 && green===38 && blue===0) mm=50.0, threshold=5, desc="Warning", range=">98%";
    // else if (red===220 && green===0 && blue===0) mm=80.0, threshold=5, desc="Warning", range=">98%";
    // else if (red===180 && green===0 && blue===0) mm=100.0, threshold=5, desc="Warning", range=">98%";
    // else if (red===255 && green===115 && blue===255) mm=200, threshold=5, desc="Warning", range=">98%";
    // else if (red===255 && green===55 && blue===255) mm=300, threshold=5, desc="Warning", range=">98%";
    // else if (red===210 && green===10 && blue===210) mm=400, threshold=5, desc="Warning", range=">98%";
    // else threshold=0, desc="Clear Weather", range="0%";
    
return (
    <div>
     <h6>Risk Analysis</h6>
<table style={{ border: 1}} className="table">
  <tbody>
    <tr>
    <td>RED</td><td>{red}</td>
    </tr>
    <tr>
    <td>GREEN</td> <td>{green}</td>
    </tr>
    <tr>
    <td>BLUE</td> <td>{blue}</td>
    </tr>
    <tr>
    <td>MM/H</td> <td>{mm}</td>
    </tr>
    <tr>
    <td>WL</td>  <td>{wl}</td>
    </tr>
    <tr>
    <td>THRESHOLD</td>  <td>{risk_threshold}</td>
    </tr>
    <tr>
    <td>DESC</td> <td>{desc}</td>
    </tr>
    <tr>
    <td>RANGE</td> <td>{range}</td>
    </tr>
  </tbody>
    
</table>

    </div>

  )
}

export default RiskAnalysis