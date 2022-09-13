window.addEventListener("load", function(){
    const form= document.querySelector(".create-form")      
    const inputNombre = document.querySelector("#nombre")  
    const inputPrecio = document.querySelector("#precio") 
    const inputDescripcion = document.querySelector("#descripcion") 
    const inputImagenProducto = document.querySelector("#imagenProducto")      
    const divErrores = document.querySelector(".errores")
    const ulErrores = this.document.querySelector(".ulErrores")

    inputNombre.focus()   
       
    
    form.addEventListener("submit", (e) => {
    
        e.preventDefault();
        let errores = []
        if (inputNombre.value == ""){
    
            errores.push("Debes completar el campo Nombre")              
       
        } 

        if (inputDescripcion.value == ""){
    
            errores.push("Debes completar el campo descripción")              
       
        } 
        if (inputPrecio.value == ""){
    
            errores.push("Debes completar el campo precio")              
       
        } 


        // else if (inputContrasenia.value.length<8){
        //     errores.push("La contraseña tiene que tener al menos ocho caracteres")
            
        // }    QUE SEA UN NUMERO
    
        if (errores.length > 0) {
    
       
            //ulErrores.classList.add("alert-warning")
        
            for (let i=0; i<errores.length ; i++){
        
                
        
                ulErrores.innerHTML += "<li>" + errores[i] + "<li>"
            }
            //  form.submit()
        }
    
        console.log("haciendo submit");
    
        //
    } 
    )

 
    }) 