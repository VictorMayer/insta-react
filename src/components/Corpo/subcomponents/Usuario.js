export default function Usuario(props){
    return(
        <div class="usuario">
            <img src={"assets/img/"+props.img} />
            <div class="texto">
                <strong>{props.text}</strong>
                {props.name}
            </div>
        </div>
    )
}