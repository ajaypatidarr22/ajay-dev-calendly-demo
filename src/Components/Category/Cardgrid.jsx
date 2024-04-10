import Cards from "./Cards"

const Cardsgrid=()=>{

    return<>   
       <div className="cardsgrid flex flex-col justify-between align-center sm:grid md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-5 w-full ">     
           <Cards/>
       </div>
    </>
}


export default Cardsgrid