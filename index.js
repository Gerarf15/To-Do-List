var input = document.querySelector(".input")
var botonAgregar = document.querySelector(".boton-agregar")
var container = document.querySelector(".container")

class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea) {
        let inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.value = nuevaTarea;
        inputItem.disabled = true;
        inputItem.classList.add('item-input');

        let div = document.createElement('div');
        div.classList.add('item');

        let botonEditar = document.createElement('button');
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add('boton-editar');

        let botonRemover = document.createElement('button');
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add('boton-remover')

        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);
        container.appendChild(div);

        botonEditar.addEventListener('click', function () {
            inputItem.disabled = !inputItem.disabled
            if (inputItem.disabled) {
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            }
            else {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
            }
        });
        botonRemover.addEventListener('click', function () {
            div.remove();
        });
    }
}

function chequearInput() {
    if (input.value) {
        new Item(input.value);
    }
}

botonAgregar.addEventListener('click', function () {
    chequearInput();
    input.value = '';
});

