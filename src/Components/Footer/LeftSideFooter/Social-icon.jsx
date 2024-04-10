import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";


const Socialicon =()=>{

            return<>
                           
               <div className="social-icons  flex flex-row justify-around align-center w-60 ">
                  <FaTwitter className="text-2xl"/>
                  <FaFacebookF className="text-2xl"/>
                  <FaInstagram className="text-2xl"/>
                  <FaLinkedinIn className="text-2xl"/>
                  <FiYoutube className="text-2xl"/>
                  </div>
            </>
   }

export default Socialicon

