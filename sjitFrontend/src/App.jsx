import Home from "./components/FunctionalComponent/home"
import About from "./components/FunctionalComponent/About"
import Skills from "./components/FunctionalComponent/Skills"
import Contact from "./components/FunctionalComponent/Contact"
import ClassCompEg from "./components/ClassComponent/ClassCompEg"
import Login from "./components/FunctionalComponent/Login"
import Sign from "./components/FunctionalComponent/Sign"
import Navbar from "./components/FunctionalComponent/Navbar"
import{BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  

  return (
    <main>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home  properties="hi" sjit="hello sjit"></Home>}></Route>
        <Route path="/about" element={ <About></About>}></Route>
        <Route path="/signup" element={Sign}></Route>
        <Route path="/" element={<Home  properties="hi" sjit="hello sjit"></Home>}></Route>
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
