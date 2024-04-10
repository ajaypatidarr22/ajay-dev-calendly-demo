import { IoSearch } from "react-icons/io5";



function Searchbar(){

return <>

   <div className="searchbar flex flex-row justify-around align-center border-2 border-gray-300 border-solid rounded-3xl w-3/4   shadow-sm m-auto  mt-20 mb-20">
         <div   className="text-3xl mt-2.5 mb-2 pl-3 h-max  w-max text-gray-400"><IoSearch/></div>
        <input type="text" placeholder="Search our articles"  className=" w-full p-1  rounded-xl m-1 border-none outline-none"/>     
    </div>

</>

}



export default Searchbar