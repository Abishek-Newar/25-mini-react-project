import Ratings from "./components/ratings"


function App() {
  const stars:number = 5;
  return (
    <>
      <Ratings noOfStars ={stars}/>
    </>
  )
}

export default App
