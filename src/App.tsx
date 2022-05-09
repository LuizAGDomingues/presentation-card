import { useState } from 'react'

function App() {
  return (
    <main className='bg-card bg-no-repeat bg-center bg-cover w-screen min-h-screen h-screen text-gray font-medium text-lg font-Roboto grid'>
      <div className='max-w-sm mx-auto text-center'>
          <div>
              <img src="./images/foto.jfif" alt="Foto Pessoal" className="foto"/>
          </div>
          <h1 className='text-2xl mt-6 font-bold'>Luiz Domingues</h1>
          <a href="https://github.com/LuizAGDomingues" target="_blank" className='text-gray mt-1 mx-28 p-0 flex gap-3 justify-center'>
            <img src="./images/github.svg" alt="ícone github" />    
          LuizAGDomingues</a>
          <p className='mt-8 p-1'>Electrical engineer focused on learning programming</p>
          <ul className='mt-12 list-none p-0 flex gap-2 justify-center'>
            <li>
              <a href="https://facebook.com/luiz.domingues.509" target="_blank">
                <img src="./images/facebook.svg" alt="ícone facebook" className='hover:border-2 border-purple-300'/></a>
            </li>
            <li>
              <a href="https://twitter.com/Luiz_gDomingues" target="_blank">
                <img src="./images/twitter.svg" alt="icone twitter" className='hover:border-2 border-purple-300'/></a>
            </li>
            <li>
              <a href="https://instagram.com/luiz_gdomingues/" target="_blank">
                <img src="./images/instagram.svg" alt="icone instagram" className='hover:border-2 border-purple-300'/></a>
            </li>
          </ul>
      </div>
    </main>
  )
}

export default App
