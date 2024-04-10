
import { data } from "./CardsData"

 const Cards = ()=>{
  
    return(<>           
        {
          data.map((value,index)=>{

            return<>
            
               <div key={value.id} className="category-item rounded-2xl relative border-2  hover:border-blue-500 border-gray-100 px-2 w-80 xl:w-auto">
               {(index == 0)?(<span className="absolute top-0 right-0 bg-blue-600 text-sm text-white px-4 p-1 rounded-tr-xl rounded-bl-md">New</span> ):(true)}
                <img src={value.imgsrc} alt="image" className="bg-cover p-1 w-1/2 h-1/2 m-auto rounded mt-1"/>
                <h3 className="text-center text-xl font-bold mb-1 text-nowrap">{value.heading}</h3>
                <p  className="text-center text-md pb-1"> {value.text}</p>
              </div>   
            </>
          })}
    </>)
}

export default Cards