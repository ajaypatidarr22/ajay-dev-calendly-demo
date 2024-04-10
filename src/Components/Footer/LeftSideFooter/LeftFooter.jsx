import Socialicon from "./Social-icon"
import Appicon from "./Appicon"
import Dropdown from "./Dropdown"
import Footertext from "./Footertext"
import Easyahead from "./Easyahed"


const LeftFooter=()=>{

     return<>
        <div className="leftfooter md:w-1/2 flex flex-col justify-between align-center gap-y-14 m-auto mt-0">

                <Easyahead/>
                <Footertext/>
                <Dropdown/>   
                <Appicon/>
                <Socialicon/>
        </div>
     </>
}
export default LeftFooter
