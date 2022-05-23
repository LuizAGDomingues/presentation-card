import React from "react";
import { Ficha1 } from "../componentes/Ficha1";
import Footer from "../componentes/Footer";

export default function Home() {
    return(
        <main>
            <div className='bg-[#121214] bg-center bg-cover grid'>
                <img src="../../images/Desktop.svg" alt="gradiente do fundo" className="fixed rotate-90 ml-44 mt-56 md:rotate-0 md:m-0 md:absolute md:w-full md:h-screen md:object-cover"/>
                <Ficha1 />
                <Footer />
            </div>
        </main>
    )
}