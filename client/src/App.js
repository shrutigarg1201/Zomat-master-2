
//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import FoodTab from "./components/FoodTab";
import Master from "./components/master";

function App() {
  return (
    <>
    <HomeLayoutHOC path="/" exact component={FoodTab}/>
    <HomeLayoutHOC path="/:type" exact component={Master}/>
    
    </>
  )
}

export default App;
