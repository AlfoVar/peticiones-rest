import { conexionAPi } from "./conexionAPi.js";
import createCard from "./viewVideos.js";

const filterVideos = async (event) => {
  event.preventDefault();

  const dataSerch = document.querySelector("[data-busqueda]").value;
  const datafilter = await conexionAPi.getFilterVideos(dataSerch);

  const list = document.querySelector("[data-lista]");

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  datafilter.forEach((video) =>
    list.appendChild(
      createCard(
        video.titulo,
        video.imagen,
        video.url,
        video.descripcion
      )
    )
  );

  if (datafilter.length == 0) {
    list.innerHTML = `<h2 class="mensaje__titulo">No fueron encontrados elementos para ${dataSerch}</h2>`
  }
};

const buttonSerch = document.querySelector("[data-boton-busqueda]");

buttonSerch.addEventListener("click", (event) => filterVideos(event));
