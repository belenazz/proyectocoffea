window.addEventListener("load", function(){
    const form= document.querySelector(".create-form")      
    const inputNombre = document.querySelector("#nombre")  
    const inputPrecio = document.querySelector("#precio") 
    const inputDescripcion = document.querySelector("#descripcion") 
    const inputImagenProducto = document.querySelector("#imagenProducto")      
    const divErrores = document.querySelector(".errores")
    const ulErrores = this.document.querySelector(".ulErrores")

    inputNombre.focus()   
       
    inputNombre.addEventListener("keyup", () => {
        let errorName = document.querySelector(".errorName")
        if (inputNombre.value.length < 5) {

            errorName.innerHTML = "El nombre debe tener al menos cinco caracteres"
            //  inputNombre.classList.remove("errorName")               
        } else {
            // inputNombre.classList.add("errorName") 
            errorName.innerHTML = " "
        }})

    inputDescripcion.addEventListener("keyup", () => {
        let errorDescription = document.querySelector(".errorDescription")
        if (inputDescripcion.value.length < 20) {
           errorDescription.innerHTML = "El nombre debe tener al menos veinte caracteres"
        } else {
            errorDescription.innerHTML = " "
        }})
    
    
    form.addEventListener("submit", (e) => {
    
        e.preventDefault();
        let errores = []
        if (inputNombre.value == ""){
    
            errores.push("Debes completar el campo Nombre")              
       
        } 

        if (inputDescripcion.value == ""){
    
            errores.push("Debes completar el campo descripción")              
       
        } 
    
        if (errores.length > 0) {
    
            //ulErrores.classList.add("alert-warning")
        
            for (let i=0; i<errores.length ; i++){
        
                ulErrores.innerHTML += "<li>" + errores[i] + "<li>"
            }
            //  form.submit()
        }
    
        console.log("haciendo submit");
    } 
    )
    }) 