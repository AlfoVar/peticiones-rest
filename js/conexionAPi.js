const urlVideos = 'http://localhost:3001/videos';

const listVideos = async() =>{
    const conection = await fetch(urlVideos);

    const parseConection = await conection.json();

    return parseConection;
}

const sendVideoData = async(title, description, url, image) => {
    const conection = await fetch(urlVideos, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body:JSON.stringify(
         {
            titulo: title,
            descripcion: `${description} mil visualizaciones`,
            url:url,
            imagen:image
        })
    });
    const parceConection = conection.json();

if (!conection.ok) {
    throw new Error("ha ocurrido un error al agregar el video");
}

    return parceConection;
}

const getFilterVideos = async(elements) => {
    return (await fetch(`${urlVideos}?q=${elements}`)).json();
 
}

export const conexionAPi = {
    listVideos, sendVideoData, getFilterVideos
}
