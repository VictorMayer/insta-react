import Stories from './subcomponents/Stories'
import Posts from './subcomponents/Posts'
import Sugestions from'./subcomponents/Sugestions'
import Usuario from './subcomponents/Usuario'

export default function Corpo(){
    return(
        <div class="corpo">
            <div class="esquerda">
                
                <Stories/>

                <Posts />

            </div>

            <div class="sidebar">

                <Usuario img ='catanacomics.svg' text ='catanacomics' name ='Catana'/>

                <Sugestions/>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}