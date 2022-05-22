export default function Footer() {
    return(
        <div className="text-gray font-medium text-lg font-Roboto">
            <p>
                Criado por Luiz Domingues utilizando <a href="https://pt-br.reactjs.org" target='_blank' className="hover:text-react transition-all delay-100 ease-linear">React</a>, 
                <a href="https://vitejs.dev" target='_blank' className="hover:text-vite transition-all delay-100 ease-linear"> Vite</a> e
                <a href="https://tailwindcss.com" target='_blank' className="hover:text-Tailwindcss transition-all delay-100 ease-linear"> Tailwindcss</a>.
            </p>
            <span>
                Inspirado por <a href="https://www.rocketseat.com.br" target='_blank' className="hover:text-Rocketseat transition-all delay-100 ease-linear">Rocketseat</a>
            </span>
        </div>
    )
}