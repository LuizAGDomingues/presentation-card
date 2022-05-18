import { Ficha1 } from "./componentes/Ficha1"

function App() {
  return (
    <main>
      <div className='bg-[#121214] bg-center bg-cover grid'>
        <img src="./images/Desktop.svg" alt="gradiente do fundo" className="fixed rotate-90 ml-44 mt-56 md:rotate-0 md:m-0 md:absolute md:w-full md:object-contain"/>
        <Ficha1 />
      </div>
    </main>
  )
}

export default App
