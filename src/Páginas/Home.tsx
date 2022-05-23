import React from "react";
import { Ficha1 } from "../componentes/Ficha1";
import Footer from "../componentes/Footer";

export default function Home() {
    return(
        <main>
            <div className='bg-[#121214] bg-center bg-cover grid'>
                <img src="../../images/Desktop.svg" alt="gradiente do fundo" className="absolute m-0 w-full h-screen object-cover"/>
                <Ficha1 />
                <div className="hidden md:block">
                    <Footer />
                </div>
            </div>
        </main>
    )
}