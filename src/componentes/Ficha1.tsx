export function Ficha1 () {
    return (
      <div className='h-screen max-w-sm mx-auto text-center text-gray font-medium text-lg font-Roboto z-0'>
        <img src="./images/background.svg" alt="Imagem de fundo" className="absolute ml-[0.3rem] -z-[1] mt-10 md:mt-36 md:mx-[0.85rem] md:w-[22.37rem] md:h-[38rem] md:object-cover"/>
        <div>
          <img src="./images/faixa1.svg" alt="Faixa do cartao" className="hidden md:block mx-[10.1rem]"/>
          <img src="./images/faixa2.svg" alt="Conexão" className="hidden md:block mx-[9.6rem]"/>
          <div className="mt-56 mx-28 md:mt-[4.15rem] md:mx-26">
            <img src="./images/foto.jfif" alt="Foto Pessoal" className="foto"/>
          </div>
        </div>
        <h1 className='text-2xl mt-6 font-bold'>Luiz Domingues</h1>
        <a href="https://github.com/LuizAGDomingues" target="_blank" className='text-gray mt-1 mx-28 p-0 flex gap-3 justify-center'>
          <img src="./images/github.svg" alt="ícone github" />    
        LuizAGDomingues</a>
        <p className='mt-8 p-1'>Electrical engineer focused on learning programming</p>
        <ul className='mt-12 list-none p-0 flex gap-2 justify-center'>
          <li>
            <a href="https://facebook.com/luiz.domingues.509" target="_blank">
              <img src="./images/facebook.svg" alt="ícone facebook" className='rounded hover:border-2 border-purple-300'/></a>
          </li>
          <li>
            <a href="https://twitter.com/Luiz_gDomingues" target="_blank">
              <img src="./images/twitter.svg" alt="icone twitter" className='rounded hover:border-2 border-purple-300'/></a>
          </li>
          <li>
            <a href="https://instagram.com/luiz_gdomingues/" target="_blank">
              <img src="./images/instagram.svg" alt="icone instagram" className='rounded hover:border-2 border-purple-300'/></a>
          </li>
        </ul>
        <button className="m-12 w-40 rounded md:m-3 hover:border-2 border-purple-300">Conheça mais</button>
      </div>
    )
}