import Header from "./Components/Header/Header.jsx"
import SearchSection from "./Components/Seacrch-Section/SearchSection.jsx"
import Categories from "./Components/Category/Categorie.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Copyright from "./Components/Copyright.jsx"

const  App = () =>{

  return<>
    
        <Header/>
        <SearchSection/>
        <Categories/>
        <div className=" border-b-2 border-gray-300 border-dotted max-w-6xl m-auto mb-10"></div>
        <Footer/>
        <Copyright/>
  
</>
}
export default App
