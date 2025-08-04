// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Defino variables
let amigos=[];


//Verifica que el nombre ingresado no sea una cadena vacía
function validarEntrada(entrada){
    if(entrada == ""){
        return false;
    }
}
/* Funcion agregar amigo:
*       - Agrega el nombre a la lista amigos
*       - Muestra la cada nombre en la etiqueta ul de html
*/ 
function cargarAmigo(nombreAmigo){

    amigos.push(nombreAmigo);

    let listaAmigosHTML= document.getElementById("listaAmigos");
    //Creo el li
    let nuevoAmigo= document.createElement("li");
    //Seteo el nombre
    nuevoAmigo.textContent=nombreAmigo;
    //seteo la clase
    nuevoAmigo.className="nuevo-amigo";
    
    //Agrego a la etiqueta ul
    listaAmigosHTML.appendChild(nuevoAmigo);

}



function agregarAmigo(){
    //Obtengo el nombre ingresado al input de id:"amigo"
    let nombre=  document.getElementById("amigo").value;

    if(validarEntrada(nombre) == false){
    
        alert("No ha ingresado un nombre valido. Por favor, intentelo nuevamente.");
    }
    else{
        cargarAmigo(nombre);

        
        document.getElementById("amigo").value="";
    }


}


