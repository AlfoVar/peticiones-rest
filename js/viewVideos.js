import { conexionAPi } from "./conexionAPi.js"

const list = document.querySelector("[data-lista]")

const createCard = (title, image, url, description) =>{
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML=`<li class="videos__item">
        <iframe width="100%" height="72%" src="${url}"
            title="${title}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            <div class="descripcion-video">
                <img src="${image}" alt="logo canal alura">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </li>`
    
        return video;
}

const getListVideos = async() =>{
    try {
        const listAPI = await conexionAPi.listVideos();
    
        listAPI.forEach(video => list.appendChild(createCard(video.titulo, video.imagen, video.url, video.descripcion)));
    } catch (error) {
        list.innerHTML= `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :(</h2>`
    }
}


getListVideos()

export default createCard;