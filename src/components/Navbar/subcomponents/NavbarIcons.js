export default function NavbarIcons(){

    const icons = ['paper-plane-outline',"compass-outline","heart-outline","person-outline"];

    return(
        <div class="icones">
            {icons.map((icon)=> (
                <ion-icon name={icons}></ion-icon>
            ))}
        </div>
    )
}