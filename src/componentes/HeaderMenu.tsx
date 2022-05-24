import { Link } from 'react-router-dom'
import { ArrowCircleLeft, WhatsappLogo, Envelope, TelegramLogo, Browser } from 'phosphor-react'

export default function HeaderMenu() {
    return(
        <div>
        <div className="flex p-9 animate-fade">
            <Link to='/' className="flex-none ml-1"><ArrowCircleLeft size={35}/></Link>
            <ul className="flex gap-10 ml-auto items-center">
                <li className="flex-initial">
                    <a href="mailto:luiz.domingues.pro@gmail.com" target="_blank">
                        <Envelope size={25}/>
                    </a>
                </li>
                <li className="flex-initial">
                    <a href="https://wa.me/48988561149?text=Hello! I saw your website" target="_blank">
                        <WhatsappLogo size={25}/>
                    </a>
                </li>
                <li className="flex-initial">
                    <a href="https://telegram.me/LuizAGDomingues" target="_blank">
                        <TelegramLogo size={25}/>
                    </a>
                </li>
                <li className="flex-initial">
                    <a href="https://github.com/LuizAGDomingues" target="_blank">
                        <Browser size={25}/>
                    </a>
                </li>
            </ul>
            
        </div>
        <hr />
        </div>
    )
}