export default function Sugestions() {

    const sugestions = ['bad.vibes.memes','chibidart','razoesparaacreditar','adorable_animals','smallcutecats']

    return(
        <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    {sugestions.map((sugestions)=>(
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={"assets/img/"+sugestions+".svg"} />
                            <div class="texto">
                                <div class="nome">{sugestions}</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>))}
                </div>
    )
}