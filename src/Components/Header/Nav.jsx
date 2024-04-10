import { HiArrowTopRightOnSquare } from "react-icons/hi2";

   const Nav =()=>{

    const navlinks = ["Developers", "Report abuse" , "Contact Us" ];
    
    return<>
                <div className="hidden lg:flex flex-row pr-10 xl:pr-0 ">
                        <ul className="ml-4 flex items-center ">
                         {navlinks.map((links)=>{
                          return<>
                          <div className="sm:flex flex flex-row justify-between align-center leading-4 gap-x-1 mt-1 text-nowrap px-1 py-3"><li>{links}</li><HiArrowTopRightOnSquare/> </div>

                          </>
                         })}
                        </ul>
                          
                          <div  className="left-box flex flex-row justify-between align-center">
                              <div><h1 className="text-xl font-light hidden md:inline-block mt-4 px-2 ">|</h1></div>
                                    <ul className="left-box flex flex-row justify-between align-center gap-x-2 mt-4">
                                          <li className="text-nowrap mt-1.5">Log In</li>
                                          <li className="text-nowrap mt-1.5">Sign Up</li>
                                    </ul>                  
                              </div>
                 </div>

            </>
   }


export default Nav








