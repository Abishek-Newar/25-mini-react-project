
import { useEffect, useState } from "react"
import { CiCircleChevLeft , CiCircleChevRight} from "react-icons/ci";


interface data{
    url: string,
    page: number,
    limit: number
}

export default function Slider({url,page,limit}:data){
    const [images,setImages] = useState<string[]>([]);
    const [currentSlide,setCurrentSlide] = useState<number>(0);
    const [errorMessage,setErrorMessage] = useState<any>(null)
    const [loading,setLoading] = useState(false);
    async function fetchImages(getUrl:string){
        try{
            setLoading(true)
            const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await res.json()
            console.log(data)
            if(data){
                setImages(data);
                setLoading(false)
            }
        }catch(e:any){
            setErrorMessage(e);
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(url !== "") fetchImages(url);
    },[url])

    function handlePrevios(){
        setCurrentSlide(currentSlide === 0 ? images.length-1 : currentSlide - 1)
    }
    function handleNext(){
        setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1)
    }

    function handleClick(index:number){
        setCurrentSlide(index)
    }
    if(loading){
        return <div>Loading...</div>
    }

    if(errorMessage){
        return <div>Error: {errorMessage}</div>
    }
    return <div className="h-screen w-full flex flex-col items-center justify-center" >
       <div className="realtive flex  z-0  w-[600px] h[450px] ">
       {
            images && images.length?   
            images.map((item,index)=>(
                <img key={item.id} src={item.download_url} alt={item.url} className={ `z-[-1] rounded-lg ${currentSlide === index? "block": "hidden"}`} />
            ))
            :null
        }
       </div>
         <div className="flex w-[450px] items-center justify-around gap-2">
         <CiCircleChevLeft className="cursor-pointer" onClick={handlePrevios} />
         {
            images && images.length?   
            images.map((item,index)=>(
                <span className= {`flex rounded-full cursor-pointer border border-black z-10 size-3 ${currentSlide ===index? "bg-black": "bg-white"}`} onClick={()=>handleClick(index)}></span>
            ))
            :null
        }
        <CiCircleChevRight className=" cursor-pointer" onClick={handleNext} />
         </div>
        
    </div>
}