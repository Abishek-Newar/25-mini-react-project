import Slider from "./components/slider"


function App() {

  return (
    <>
      <Slider url={`https://picsum.photos/v2/list`} page={1} limit={10} />
    </>
  )
}

export default App
