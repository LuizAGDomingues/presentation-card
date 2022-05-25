import React from "react"
import Footer from "../componentes/Footer"
import HeaderMenu from "../componentes/HeaderMenu"

export default function AboutLuiz() {
    return(
        <main className='bg-[#121214] bg-center bg-cover'>
            <img src="../../images/Desktop.svg" alt="gradiente do fundo" className="absolute m-0 w-full h-screen object-cover"/>
            <div className='text-center text-gray font-medium text-lg font-Roboto relative'>
                <HeaderMenu />
                <div>
                    <ul className="m-20 lg:flex lg:items-center lg:gap-44 lg:mt-56 lg:ml-28">
                        <li className="mb-10 max-w-md max-h-md animate-side1 lg:animate-move1">
                            <img src="../../images/Fontes-de-Energia-Renováveis.jpg" alt="Imagem de Fontes de energia renováveis" />
                            <span>
                                Electrical engineer graduated from the Federal Institute of Santa Catarina 
                                 -<a href="https://www.ifsc.edu.br" target='_blank' className="hover:text-[#2f9e40] transition-all delay-100 ease-linear">IFSC</a>- 
                                 with emphasis on work with energy generation,
                                 mainly from renewable and atomic sources.
                            </span>
                        </li>
                        <li className="mb-7 max-w-md max-h-md animate-side2 lg:animate-move2">
                            <img src="../../images/Gerenciador-logins.JPG" alt="Imagem de Fontes de energia renováveis" />
                            <span>
                            Login manager, created entirely with Python. It is possible to generate random passwords according to the user's preference,
                             in addition to providing the option to type manually. In the near future, I plan to turn it into an app. You can access the codes through:
                             <a href="https://github.com/LuizAGDomingues/Gerenciador-de-contas" target='_blank' className="flex gap-3 justify-center">
                                 <img src="../../images/github.svg" alt="ícone github" /> Github repository </a>
                            </span>
                        </li>
                        <li className="mb-4 max-w-md max-h-md animate-side3 lg:animate-move3">
                            <img src="../../images/Presentation-cards.JPG" alt="Imagem do site"/>
                            <span>
                            This site itself was created in order to learn how to use more Front-end programming tools,
                             such as react, tailwindcss and vite. As well as other concepts such as website hosting and communication.
                             The idea of this page is to contain other cards of introduction, forming a set. For example for the presentation of project members of a company.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-32 lg:mt-[8.75rem]">
                <Footer />
            </div>
        </main>
    )
}