import  ArrayofElements  from "./ArrayofElements.js"

const FooterLinks = ()=>{

return<>

      {
        ArrayofElements.map((value, index)=>{
        return<>  
             <div className="flex flex-col  justify-start align-center w-full m-auto h-min  gap-y-3 pb-5  text-start mt-10">
                      <h1 className="sm:text-xl text-3xl font-extrabold pb-3  ">{value.heading}</h1>
                      <p  className="text-md " >{value.textone}</p>
                      <p  className="text-md " >{value.textwo}</p>
                      <p  className="text-md " >{value.texthree}</p>
                      <p  className="text-md " >{value.texfour}</p>
                      <p  className="text-md " >{value.texfive}</p>
                 </div>
            </>
      })
   }
</>
}


export default FooterLinks