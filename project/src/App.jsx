import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {

  return (
    <div className='bg-gray-300 h-screen w-full'>
      
      <SearchBar />
      <Tabs />
      <ResultGrid />
     
    </div>
  )
}

export default App