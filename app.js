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
    mostrarElemento("listaAmigos");


    //Para cada nombre de la lista de amigos
    for(let i = 0; i<amigos.length; i++){
        //Creo el li
        let nuevoAmigo= document.createElement("li");
        //Cambio el nombre
        nuevoAmigo.textContent=amigos[i];
    
        //Agrego el nuevoAmigo al elemento ul 
        listaAmigosHTML.appendChild(nuevoAmigo);
    }

     if( amigos.length != 0){
        ocultarElemento("resultado");
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

function indiceAleatorio(tamanioArreglo) {
    //Genero un numero aleatorio que esté entre 0 
    //y el maximo indice de la lista 
    return Math.floor(Math.random()* tamanioArreglo) ;
} 


/* Función sortearAmigo():
*       - Verifica que la lista de amigos no esté vacía
*       - Calculo el indice aleatorio para buscar en la lista amigos
*       - Oculto la lista de amigos que se muestra a medida que se cargan
*       - Cargo el amigo en la etiqueta de id "resultado"
*       - Muestro el elemento de id "reusltado"
 */
function sortearAmigo(){
    if(amigos.length != 0){
        let nombreAmigo=amigos[indiceAleatorio(amigos.length)];

        ocultarElemento("listaAmigos");
        document.getElementById("resultado").innerHTML =`El amigo secreto sorteado es: ${nombreAmigo}`;

        mostrarElemento("resultado");
    }
    else{
        alert("No ha ingresado ningún amigo.")
        return;
    }
}


/*Como indica su nombre muestran o ocultan un elemento de HTML 
* según su id. Las cree para que sea mas facil de leer y entender
* el código    
*  */
function mostrarElemento(id){
    document.getElementById(id).style.display="block";
}
function ocultarElemento(id){
    document.getElementById(id).style.display="none";
}


