import Home from "./components/FunctionalComponent/Home"
import About from "./components/FunctionalComponent/About"
import Skills from "./components/FunctionalComponent/Skills"
import Sign from "./components/FunctionalComponent/Sign"
import Navbar from "./components/FunctionalComponent/Navbar"
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect"
import Login from "./components/FunctionalComponent/Login"
import UseEffectAPI from "./components/FunctionalComponent/Hooks/UseEffectAPI"
import UseRef from "./components/FunctionalComponent/Hooks/UseRef"
import UseState from "./components/FunctionalComponent/Hooks/UseState"
import UseMemo from "./components/FunctionalComponent/Hooks/UseMemo"
function App() {
  

  return (
    <main>
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home  properties="hi" sjit="hello sjit"></Home>}></Route>
        <Route path="/about" element={ <About></About>}></Route>
        <Route path="/signup" element={<Sign> </Sign>}></Route>
        <Route path="/skill" element={<Skills></Skills>}></Route>
        <Route path="/use-effect" element={<UseEffect></UseEffect>}></Route>
        <Route path="/use-effect-api" element={<UseEffectAPI></UseEffectAPI>}></Route>
        <Route path="/use-ref" element={<UseRef></UseRef>}></Route>
        <Route path="/use-state" element={<UseState></UseState>}></Route>
        <Route path="/use-memo" element={<UseMemo></UseMemo>}></Route>
        <Route path="/signup/login" element={<Login></Login>}></Route>
      </Routes>
      </Router>
    </main>
  )
}

export default App
