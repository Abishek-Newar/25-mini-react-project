import { useEffect, useState } from "react";


const ScrollIndicator = () => {
    const[scroll,setScroll] = useState<number>(0)
    const [data,setData] = useState<string[]>([])
    
    useEffect(()=>{
        async function call(){
            const response = await fetch("https://dummyjson.com/products?limit=100");
            const res = await response.json();
            setData(res.products);
            console.log(res);
        }
        call();
    },[])

    function handleScroll(){
        const scrolls:number = document.body.scrollTop || document.documentElement.scrollTop;
        const height:number = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScroll((scrolls/height)*100)
        console.log(scroll);
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);

        return(
            window.removeEventListener("scroll",()=>{})
        )
    })
  return <>
    <div className="bg-sky-300 h-20 flex items-center justify-center"><h1 className="text-4xl">Scroll Indicator</h1></div>
    <div className=" w-screen h-6 bg-red-600 flex justify-start sticky top-0"><div className="bg-green-300" style={{width: `${scroll}%`}}></div></div>
    
    <h1 className="text-3xl uppercase mb-5 text-center ">Products</h1>
    {data.map((item:any,index:number)=>(
        <div className="text-center" key={index}>{item.title}</div>
    ))}
  </>
}

export default ScrollIndicator;