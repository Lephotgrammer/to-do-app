function gettextoValue() {
	var texto = document.getElementById("texto");
	return texto.value;
}
function añadir() {
	var textoValue = gettextoValue();
	if (textoValue !== "") {
		doañadir(textoValue);
		clean();
	}
}

function doañadir(textoDeContenido) {
	var tareas = document.getElementById("tareas");
	var content = '<div class="box">' +
    '<div class="check"><input type="checkbox" onclick="tachar(this)">' +  
    textoDeContenido +'<i class="glyphicon glyphicon-trash" onclick="remover(this)"></i>' +
    '</div>' + '</div>';
	
	var elemento = document.createElement("div");
	elemento.className = "añadir";
	elemento.innerHTML = content;
	tareas.appendChild(elemento);

}
function clean() {
	var texto = document.getElementById("texto");
	texto.value = "";
	texto.focus();
}

function tachar(checkbox) {
	var parent = checkbox.parentElement;
	if(checkbox.checked){
		parent.classList.add("tachado");
	}else {
		parent.classList.remove("tachado");
	}

}
function remover(glyphicon) {
	var parent = glyphicon.parentElement.parentElement;
	parent.remove();
}
