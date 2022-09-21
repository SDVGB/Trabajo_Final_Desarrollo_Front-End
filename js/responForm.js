
window.addEventListener('DOMContentLoaded', (e) => {
    console.log("evento DOMContentLoaded");

    let boton = document.getElementById("btn-Enviar");
    boton.addEventListener("click", (ev) => {
        try {
        let descripcion  = document.getElementById("descripción").value;
        let tema   = document.getElementById("tema").value;
        let rama  = getRama(); 
        let area = getArea();
        if( tema.length < 3 || descripcion.length <3) {
            throw new Error("Llene los campos!!!");
        }
        let ideasformulario = { 
            descripcion: descripcion, 
           tema: tema,
           rama,
           area,
            fecha_registro: (new Date()).toISOString() 
        };        
        console.dir(ideasformulario);
        saveForm(ideasformulario); 
        mensajeGuardar("Se ha enviado su Idea");
    } catch(err) { 
        mostrarError(err.message); 
    }
    
    });    
});

function mensajeGuardar(mensaje){
    alert(mensaje)
}

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
        alert("Debes seleccionar al menos 1 area de INTERES!!!");
        return false; 
    }
    return inputArea; 
}
function getRama() {
    let inputArr = document.querySelector("input[name='rama']:checked");
    if ( inputArr == null ) {
        alert("Debes seleccionar una rama!!!");
        return false;
    }
    const rrama = inputArr.value;
    return rrama;
}

function mostrarError(mensajeDeError) {
    // valor anterior "none"    
    document.getElementById("form-mensaje-error").style.display = "block";
    const ul = document.querySelector("#form-mensaje-error ul");
    const li = document.createElement("li");
    const liText = document.createTextNode(mensajeDeError);
    li.appendChild(liText); 
    ul.appendChild(li); 
}

