// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Defino variables
let amigos=[];


//Verifica que el nombre ingresado no sea una cadena vacía
function validarEntrada(entrada){
    if(entrada == ""){
        return false;
    }
    return true;
}
/* Funcion mostrarAmigos:
*       - Creo el elemento ul
        - Les agrego el nombre del amigo correspondiente
*       - Muestro cada nombre en pantalla
*/ 
function mostrarAmigos(){

    
    let listaAmigosHTML= document.getElementById("listaAmigos");
    listaAmigosHTML.innerHTML="";
    //Para cada nombre de la lista de amigos
    for(let i = 0; i<amigos.length; i++){
        //Creo el li
        let nuevoAmigo= document.createElement("li");
        //Seteo el nombre
        nuevoAmigo.textContent=amigos[i];
        //seteo la clase
        nuevoAmigo.className="nuevo-amigo";
    
        //Agrego a la etiqueta 
        listaAmigosHTML.appendChild(nuevoAmigo);
    }



}


/*Funcion agregar amigo:
      - Valido el nombre que se ingresa.
      - Guardo el nombre en la lista
      - Llamo a la función para mostrar los nombres por pantalla
      - "Limpio" el input */
function agregarAmigo(){
    //Obtengo el nombre ingresado al input de id:"amigo"
    let nombre=  document.getElementById("amigo").value;

    if(validarEntrada(nombre) == false){
    
        alert("Por favor, inserte un nombre.");
        return;
    }
    else{
        amigos.push(nombre);
        mostrarAmigos();    
        document.getElementById("amigo").value="";
    }
}




