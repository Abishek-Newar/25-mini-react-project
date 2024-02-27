import { useEffect, useState } from "react"


export default function LoadMore(){
    const [item,setItem] = useState<any>([]);
    const [count, setCount] = useState<number>(0);
    const [disabled,setDisabled] = useState(false);
    

    useEffect(()=>{
        async function calling(){
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0? 0 : count* 20}`)
            const data = await response.json();
            if(count === 0){
                if(data && data.products && data.products.length){
                    setItem(data.products);
                }
            }else{
                if(data && data.products && data.products.length){
                    setItem((prevData:any) => [...prevData, ...data.products]);
                }
            }
            console.log(data);
        }
        calling();
    },[count])

    useEffect(()=>{
        if(count*20 === 100){
            setDisabled(true)
        }
    },[count])
    return <div className="flex flex-col  items-center" >
         <h1 className="text-center mb-10"> Products</h1>
        <div className="flex flex-wrap gap-10 justify-center">
        { 
        item.map((items:any,index:number)=>(
            <div key={index} className="w-[200px] h-[200px] border flex items-center justify-center overflow-hidden p-4">
                <img src={items.thumbnail} alt="" />
            </div>
        ))
        }
        </div>
        <br />
        <div>
            <button className={`border rounded-lg px-6 py-2 ${disabled? " bg-white text-slate-600" : " bg-slate-700 "} `} disabled={disabled} onClick={()=>setCount(count + 1) }> Load More</button>
            {disabled? <p className="text-red-600"> Loaded 100 items</p> :null}
        </div>
    </div>
}