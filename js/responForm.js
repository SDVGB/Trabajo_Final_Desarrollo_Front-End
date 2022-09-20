
window.addEventListener('DOMContentLoaded', (e) => {
    console.log("evento DOMContentLoaded");

    let boton = document.getElementById("btn-Enviar");
    boton.addEventListener("click", (ev) => {
        let descripcion  = document.getElementById("descripción").value;
        let tema   = document.getElementById("tema").value;
        let rama  = getRama(); 
        let area = getArea();
        let ideasformulario = { 
            descripcion: descripcion, 
           tema: tema,
           rama,
           area,
            fecha_registro: (new Date()).toISOString() 
        };        
        console.dir(ideasformulario);
        saveForm(ideasformulario);
    });    
});
function saveForm(ideasformulario) {
    const url = "https://paginaweb-27c9e-default-rtdb.firebaseio.com/ideasformulario.json";
    fetch(url,{
        method: "POST",
        body:   JSON.stringify(ideasformulario) 
    });
}

function getArea() {
    let inputArea  = document.querySelectorAll("input[name='area']:checked");
    let arrea    = []; 
    
    for( let i = 0; i < inputArea.length; i++ ) {
        const areas = inputArea[i].value;
        arrea.push(areas);
    }

    if( inputArea.length < 1 ) {
        mostrarError("Debes seleccionar al menos 1 area de INTERES!!!");
        return false; 
    }
    return inputArea; 
}
function getRama() {
    let inputArr = document.querySelector("input[name='rama']:checked");
    if ( inputArr == null ) {
        mostrarError("Debes seleccionar una rama!!!");
        return false;
    }
    const rrama = inputArr.value;
    return rrama;
}

function mostrarError(mensajeDeError) {
    console.error(mensajeDeError); 
}
