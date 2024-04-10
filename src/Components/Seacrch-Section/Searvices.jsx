import { MdOutlineSettingsBrightness } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdAutoMode } from "react-icons/md";
import { MdOutlineTroubleshoot } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";
import { PiGoogleChromeLogo } from "react-icons/pi";


const Searvices=() =>{

    return<>
        <div className="services  sm:grid  sm:grid-cols-2 sm:grid-rows-3 flex flex-col text-lg  gap-8   m-auto">

                <div className="setting-event flex flex-row justify-start align-center ">
                     <div className="text-2xl px-2 mt-1 text-blue-700"><MdOutlineSettingsBrightness/></div>
                    <p className="text-blue-500">setting up your first event</p>
                </div>
                
                <div className="shedule-conferencing  mt-1  flex flex-row justify-start align-center">
                    <div className="text-2xl px-2 text-blue-700"><AiOutlineSchedule/></div>
                    <p className="text-blue-500">Schedule with video conferencing</p>
                </div>

                <div className="automate-workflowes   mt-1 flex flex-row justify-start align-center">
                    <div className="text-2xl px-2 text-blue-700" ><MdAutoMode/></div>
                    <p className="text-blue-500">Automate tasks with Workflows</p>
                </div>

                <div className="troubleshooting    mt-1 flex flex-row justify-start align-center">
                     <div className="text-2xl px-2 text-blue-700 "><MdOutlineTroubleshoot/></div>
                    <p className="text-blue-500">Troubleshooting availability</p>
                </div>

                <div className="embed-overview  mt-1 flex flex-row justify-start align-center">
                    <div className="text-2xl px-2 text-blue-700"><ImEmbed2/></div>
                    <p  className="text-blue-500">Embed options overview</p>
                </div>

                <div className="calendly-crome   mt-1 flex flex-row justify-start align-center">
                     <div className="text-2xl px-2 text-blue-700"><PiGoogleChromeLogo/></div>
                    <p className="text-blue-500"  >Using Calendly for Crome</p>
                </div>
        </div>
    </>
}

export default Searvices
