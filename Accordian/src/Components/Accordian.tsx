import { useState } from "react"

interface datas {
    id: string,
    question: string,
    answer: string,
}

export default function Accordian(){
    const data:datas[] = [
        {
          id  : "1",
          question: "What are accordion components?",
          answer:
            "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
        },
        {
          id  : "2",
          question: "What are they used for?",
          answer:
            "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
        },
        {
          id  : "3",
          question: "Accordion as a musical instrument",
          answer:
            "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
        },
        {
          id  : "4",
          question: "Can I create an accordion component with a different framework?",
          answer:
            "Yes of course, it is very possible to create an accordion component with another framework.",
        },
      ];
    const [selected,setSelected] = useState<String>("");
    const [single,setSingle] = useState<Boolean>(true);
    const [multple,setMultiple] = useState<string[]>([]);
    function handleClick(id:string){
        setSelected(id);
    }
    function handleMultiple(id:string){
        
        const index = multple.indexOf(id);
        console.log(index);
        if(index >=0){
            multple.splice(index,1);
        }else{
            setMultiple([...multple,id])
        }
        
        
        
    }
    console.group(multple);
    
    return <div className="h-screen w-full flex flex-col items-center justify-center">
        <button className="bg-red-400 p-3 rounded-lg mb-8" onClick={()=>setSingle(!single)}>Click me for multi</button>
        <div>
            {
                data? 
                    (data.map((item:datas)=>(
                        <div className="w-[600px] " onClick={()=>{single? handleClick(item.id): handleMultiple(item.id)}}>
                             <div className="flex justify-between items-center rounded-lg  p-1 bg-red-300">
                             <h3 className="text-lg">{item.question}</h3>
                        <span className="font-extrabold text-3xl">+</span>
                             </div >
                        
                        {single? 
                        selected === item.id && (
                            <div className="bg-red-200 py-4 px-3 rounded-lg">{item.answer}</div>
                        ):
                        multple.indexOf(item.id) !== -1 &&(
                            <div className="bg-red-200 py-4 px-3">{item.answer}</div>
                        )
                          
                        }
                        </div>
                        
                        
                    )))
                :
                <div></div>
            }
        </div>
    </div>
}