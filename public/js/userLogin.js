window.addEventListener("load", function(){
    const form= document.querySelector(".create-form")      
    const inputEmail = document.querySelector("#email")   
    const inputContrasenia = document.querySelector("#contrasenia")
    
    const divErrores = document.querySelector(".errores")
    const ulErrores = this.document.querySelector(".ulErrores")

    inputEmail.focus()

    
    
       
    
    
    
    
    form.addEventListener("submit", (e) => {
    
        e.preventDefault();

        let errores = []

        if (inputEmail.value == ""){
    
            errores.push("Debes completar el campo Email")              
       
        } 
        if (inputContrasenia.value == ""){
    
            errores.push("Debes completar el campo Contraseña")              
       
        } else if (inputContrasenia.value.length<8){
            errores.push("La contraseña tiene que tener al menos ocho caracteres")
            
        }
    
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