import { conexionAPi } from "./conexionAPi.js";

const form = document.querySelector("[data-formulario]")

const createVideo = async(event) => {
    event.preventDefault();

    const title = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const image = document.querySelector("[data-imagen]").value;

    const description = Math.floor(Math.random()*10).toString();

    try {
        await conexionAPi.sendVideoData(title, description, url, image)
        window.location.href= "../pages/envio-concluido.html"
    } catch (error) {
        alert(error)
    }
}

form.addEventListener("submit", event => createVideo(event))