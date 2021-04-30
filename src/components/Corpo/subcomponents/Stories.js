export default function Stories(){

    const stories = [
        {src:'9gag.svg', text:'9gag'},
        {src:'meowed.svg', text:'meowed'},
        {src:'barked.svg', text:'barked'},
        {src:'nathanwpylestrangeplanet.svg', text:'nathanwpylestrangeplanet'},
        {src:'wawawicomics.svg', text:'wawawicomics'},
        {src:'respondeai.svg', text:'respondeai'},
        {src:'filomoderna.svg', text:'filomoderna'},
        {src:'memeriagourmet.svg', text:'memeriagourmet'},
    ]

    return (
        <div class="stories">
            
            {stories.map(story => (
                <div class="story">
                <div class="imagem">
                    <img src={"assets/img/"+story.src} />
                </div>
                <div class="usuario">
                    {story.text}
                </div>
            </div>
            ))}

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}