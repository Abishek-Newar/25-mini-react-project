import { useState } from "react";


const RandomPicker = () => {
    const [colorType,setColorType] = useState<string>("HEX");
    function generateRandom(length:number){
        return Math.floor(Math.random()*length);
    }
    const[color,setColor] = useState<string>("");
    function handleHEX(){
        let generateColor:string = "#";
        const random:string[] = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
        for(let i=0;i<6;i++){
            const randomN:number = generateRandom(random.length);
            generateColor += random[randomN];
        }
        setColor(generateColor);
        setColorType("HEX");
        console.log(color);
    }
    function handleRGB(){
        const R:number = generateRandom(256);
        const G:number = generateRandom(256);
        const B:number = generateRandom(256);
        const generateColor:string = (`rgb(${R},${G},${B})`) 
        setColorType("RGB");
        setColor(generateColor);
    }
  return <div className="w-full h-screen " style={{backgroundColor: color}}><div className={`  flex justify-center z-0 gap-4 `} >
    <button className="border w-32 h-10 mt-3 rounded-lg bg-white hover:bg-black hover:text-white" onClick={handleHEX}>HEX</button>
    <button className="border w-32 h-10 mt-3 rounded-lg bg-white hover:bg-black hover:text-white" onClick={handleRGB}>RGB</button>
    <button className="border w-32 h-10 mt-3 rounded-lg bg-white hover:bg-black hover:text-white" onClick={()=>{colorType === "HEX"? handleHEX() : handleRGB()}}>Generate Color</button>
    
  </div>
  <div className="flex items-center h-screen justify-center z-20 ">
    <div className={`text-4xl bg-${color}`}>{color}</div>
    </div>
    </div>
}

export default RandomPicker