import Navbar from "./components/Navbar"
import Card from "./components/Card"
import "./index.css"
function App() {

  return (
    <>
   <Navbar/>
   <div className="cards">
   <Card title1="My name is rajat mathur" desc1="I am from gwalior currently studying in MITS Balaghat"/>
   <Card title1="My name is gurudatt" desc1="I am from gwalior currently studying in MITS Betul"/>
   <Card title1="My name is gurumeet" desc1="I am from gwalior currently studying in MITS Bhopal"/>
   <Card title1="My name is gaurav" desc1="I am from gwalior currently studying in MITS Indore"/>
  
   </div>
    </>
  )
}

export default App