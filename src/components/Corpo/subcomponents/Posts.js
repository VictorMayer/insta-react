export default function Posts(){

    const posts = [
        {userImg: 'meowed.svg', text:'meowed' , contentImg:'gato-telefone.svg' , likedImg:'respondeai.svg' , likedText:'respondeai', likedNum:'101.523' },
        {userImg: 'barked.svg', text:'barked' , contentImg:'dog.svg' , likedImg:'adorable_animals.svg' , likedText:'adorable_animals', likedNum:'99.159' }
    ]

    return(
        <div class="posts">
            {posts.map(post=>(
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={"assets/img/"+post.userImg} />
                            {post.text}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={"assets/img/"+post.contentImg} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={"assets/img/"+post.likedImg} />
                            <div class="texto">
                                Curtido por <strong>{post.likedText}</strong> e <strong>outras {post.likedNum} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}