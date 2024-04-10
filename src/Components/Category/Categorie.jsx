import Cardsgrid from "./Cardgrid"
import Categoryheading from "./Categoryheading"
import { TiMessages } from "react-icons/ti";

const Categories=()=>{ 

    return<>    
            <div className="category flex flex-col relative justify-between align-center sm:max-w-6xl m-auto mt-20 mb-20">                  
            <div  className="m-auto"><Categoryheading/><Cardsgrid/></div>
                     <div className="text-7xl text-blue-500 m-auto fixed bottom-14 right-1 sm:right-5 mt-20 md:pl-20"><TiMessages/></div>                 
            </div>
    </>
  }
  
  export default Categories
  