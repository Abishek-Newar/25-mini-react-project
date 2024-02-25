import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Ratings({noOfStars = 5}){
    const [rating,setRating] = useState<number>(0);
    const [hover,setHover] = useState<number>(0);
    function handleClick(currentIndex:number){
        setRating(currentIndex);
    }
    function handleMove(currentIndex:number){
        setHover(currentIndex);
    }
    function handleRemove(){
        setHover(rating);
    }
    return <div className="flex w-full justify-center "> 
        {
            [...Array(noOfStars)].map((_,index)=>{
                index = index + 1;
                return <FaStar
                className={`w-10 h-10  ${(rating >= index || hover >= index)? "text-yellow-400": "text-black"}`}
                key={index}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMove(index)}
                onMouseLeave={handleRemove}
                />
            })
        }
    </div>
}