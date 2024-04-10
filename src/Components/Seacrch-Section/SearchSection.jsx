import Heading from "./Heading"
import Searchbar from "./Searchbar"
import Searvices from "./Searvices"


const SearchSection = () =>{
  
    return<>
    <div className="flex flex-col justify-between align-center max-w-3xl m-auto mt-20">
            <Heading/>
            <Searchbar/>
            <Searvices/>
    </div>
    </>
  }
  
  export default SearchSection 