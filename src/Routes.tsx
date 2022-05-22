import { Link, Route, Routes } from "react-router-dom"
import AboutLuiz from "./Páginas/AboutLuiz"
import Home from "./Páginas/Home"

export default function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AboutLuiz" element={<AboutLuiz/>}/>
        </Routes>
    )
}