import LeftFooter from "./LeftSideFooter/LeftFooter"
import RightFooter from "./RightSideFooter/RightFooter"

const Footer = ()=>{
  
    return<> 
        
          <div className="footer flex flex-col justify-between align-center m-auto gap-5 sm:flex-col md:flex-row sm:m-5 max-w-6xl  lg:m-auto ">
                <LeftFooter/>
                <RightFooter/>
          </div>

    </>
  }
  
  export default Footer   
  








