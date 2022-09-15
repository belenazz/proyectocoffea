window.addEventListener("load", function(){
    const form= document.querySelector(".create-form")      
    const inputNombre = document.querySelector("#nombre")  
    const inputPrecio = document.querySelector("#precio") 
    const inputDescripcion = document.querySelector("#descripcion") 
    const inputImagenProducto = document.querySelector("#imagenProducto")      
    const divErrores = document.querySelector(".errores")
    const ulErrores = document.querySelector(".ulErrores")

    inputNombre.focus()   
       
    form.addEventListener("submit", (e) => {
    
        e.preventDefault();
        let errores = []
        if (inputNombre.value == ""){
            errores.push("Debes completar el campo Nombre")              
        } else if (inputNombre.value.length < 5){
            errores.push("El nombre debe tener al menos 5 caracteres.")
        }

        if (inputDescripcion.value == ""){
            errores.push("Debes completar el campo descripción")              
        } else if (inputDescripcion.value.length < 20){
            errores.push("La descropción debe tener al menos 20 caracteres.")
        }

        if (inputPrecio.value == ""){
            errores.push("Debes completar el campo precio")              
        } 
    
        if (errores.length > 0) {
            //ulErrores.classList.add("alert-warning")
        
            for (let i=0; i<errores.length ; i++){
        
                ulErrores.innerHTML += "<li>" + errores[i] + "<li>"
            }
            //  form.submit()
        }
    } 
    )
    }); 
    
    