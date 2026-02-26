import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
import Reg from "./reg"
function App() {
  return (

    <>
    <h1>Iam App</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/h" element={<Home/>}/>
      <Route path="/reg" element={<Reg/>}/>
    </Routes>
    </BrowserRouter>  
    </>
  )
}
export default App;