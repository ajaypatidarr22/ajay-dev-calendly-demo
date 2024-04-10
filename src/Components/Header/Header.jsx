import { useState } from "react"
import Logo from "./Logo"
import Nav from "./Nav"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import { HiArrowTopRightOnSquare} from "react-icons/hi2";


const Header =() =>{

      const[isclicked , setisclicked] = useState(false)

      const toggleNavebar = ()=>{
          setisclicked(!isclicked)
      }

    const navlinks = ["Developers", "Report abuse" , "Contact Us" ];
       

   return<>
        
        <div className="m-auto sm:max-w-6xl">
            <div className="flex item-center justify-between h-16">
                     <div className="flex items-center flex-shrink-0 pl-10 xl:pl-0">
                        <Logo/>
                     </div>

                     <Nav/>
                      <div  className="lg:hidden flex items-center">
                           <button className="text-2xl mt-2 pr-10 xl:pr-0" onClick={toggleNavebar}>
                                    {  (isclicked ? (
                                          <RxCross2/>
                                    ):(
                                          <GiHamburgerMenu/>
                                    ))}
                            </button>
                        </div>
            </div >
      </div>

                { (isclicked && (
           
                     <div className="flex  md:flex-col lg:hidden flex-col ">
                            
                          <ul className="left-box  flex lg:hidden  flex-row   justify-around align-start gap-x-2 w-full">
                                <li className="text-nowrap  hover:text-white hover:bg-blue-500  rounded-2xl px-20">Log In</li>
                                <li className="text-nowrap   hover:text-white hover:bg-blue-500  rounded-2xl px-20">Sign Up</li>
                          </ul>                  
            
                        <ul className="flex m-4 flex-col  justify-start block items-center rounded-lg ">
                            {navlinks.map((links)=>{
                                return<>
                                    <div  className=" flex  flex-row  border-2 border-transparent  hover:text-white hover:text-bold  rounded-2xl px-3 rounded-2xl hover:bg-blue-400 w-full hover:text-white   border-solid leading-4 gap-x-1 mt-1 text-nowrap  px-1 py-3"><li>{links}</li><HiArrowTopRightOnSquare/> </div>
                            </>
                             })}                     
                                                  
                  </ul>

                 </div>
               
        ))}


    </>     
  }
  
  export default Header



  

  









