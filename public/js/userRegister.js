window.addEventListener("load", function () {
    const inputProfileImage = document.querySelector("#profileImage")
    const inputNombre = document.querySelector("#nombre")
    const inputEmail = document.querySelector("#email")
    const inputContrasenia = document.querySelector("#contrasenia")
    const inputConfirmarContrasenia = document.querySelector("#confirmarContrasenia")
    

    //inputNombre.focus()

    let errores = []

    inputProfileImage.addEventListener("mouseOver",()=>{

        let errorImage = document.querySelector(".errorImage")
        if(inputProfileImage == ""){
            errorImage.innerHTML = "Debe cargar una imágen"

    }})    

    inputProfileImage.addEventListener("change", () => {   
        
        let errorImage = document.querySelector(".errorImage")        
        
         if (inputProfileImage != "") {
            let acceptedExtensions = ['jpg' , 'gif' , 'png', 'jpeg'];
            let fileExtension = inputProfileImage.value.split(".").pop();
             if (!acceptedExtensions.includes(fileExtension)) {
                errorImage.innerHTML = "Las extensiones de archivo permitidas son .jpg , .gif , .png , .jpeg!!!"
        }} else {
            errorName.innerHTML = " "
            console.log("Imagen ok")
        }

        
    })

    inputNombre.addEventListener("keyup", () => {

        let errorName = document.querySelector(".errorName")

        if (inputNombre.value.length < 2) {

            errorName.innerHTML = "El nombre debe tener al menos dos caracteres"

            //  inputNombre.classList.remove("errorName")               

        } else {
            // inputNombre.classList.add("errorName") 
            errorName.innerHTML = " "

        }

        // else if (inputNombre.value.length<2){
        //     errores.push("El nombre tiene que tener más de dos caracteres")

        // }
    }
    )

    inputEmail.addEventListener("keyup", () => {        

    let errorEmail = document.querySelector(".errorEmail")

        if (!validator.isEmail(inputEmail.value)) {

            errorEmail.innerHTML = "Debe ingresar un email válido"

        } else {
            errorEmail.innerHTML = " "
        }

        

    }


    )

    inputEmail.addEventListener("blur", () => {        

        let errorEmail = document.querySelector(".errorEmail")
    
            if (inputEmail.value == "") {
    
                errorEmail.innerHTML = "Debes completar este campo"
    
            } else {
                errorEmail.innerHTML = " "
            }
    
        }
    
    
        )   

    inputContrasenia.addEventListener("keyup", () => {
        let errorPassword = document.querySelector(".errorPassword")

        if (inputContrasenia.value.length < 8) {
            errorPassword.innerHTML = "La contraseña debe tener al menos ocho caracteres"              
        } else {
            errorPassword.innerHTML = " "
        }
    }
    )
        // if (inputContrasenia.value == "") {
        //    errores.push("Debes completar el campo Contraseña")
        //} else if (inputContrasenia.value.length < 8) {
        //    errores.push("La contraseña tiene que tener al menos ocho caracteres")
        //}
    }
    )

    inputConfirmarContrasenia.addEventListener("keyup", () => {
        let errorConfirmPassword = document.querySelector(".errorConfirmPassword")

        if (inputConfirmarContrasenia.value.length < 8) {
            errorConfirmPassword.innerHTML = "La contraseña debe tener al menos ocho caracteres"              
        } else {
            errorConfirmPassword.innerHTML = " "
        }})

        

    
        
    



