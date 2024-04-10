import { useState } from "react";
import { FaBorderAll } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

// footer 
// responsiness 
// center 
// border on hover on cards
// search bar border 
// languages on footer  


const Dropdown = ()=>{
       

       return<>
              <div className="dropdown flex flex-row justify-between align-center rounded w-80 p-2 border-2 border-gray-400 border-solid mb-2">
                   <div className="dropdown-text font-bold">
                     <select name="dropdown" id="#" className="w-72 border-none outline-none">
                            <option value="font-bold">English (US)</option>
                            <option value="font-bold">English (UK)</option>
                            <option value="font-bold">English (India)</option>
                     </select>
                   </div>
                    
             </div>
            </>
}

export default Dropdown


