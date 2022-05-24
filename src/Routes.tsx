import { Route, Routes, Navigate } from "react-router-dom"
import AboutLuiz from "./Páginas/AboutLuiz"
import Home from "./Páginas/Home"


export default function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AboutLuiz" element={<AboutLuiz/>}/>
            <Route path="*" element={<Navigate to={'/'} replace/>} />
        </Routes>
    )
}