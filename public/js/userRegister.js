window.addEventListener("load", function () {
    const form = document.querySelector(".create-form")
    const inputProfileImage = document.querySelector("#profileImage")
    const inputNombre = document.querySelector("#nombre")
    const inputEmail = document.querySelector("#email")
    const inputTelefono = document.querySelector("#telefono")
    const inputContrasenia = document.querySelector("#contrasenia")
    const inputConfirmarContrasenia = document.querySelector("#confirmarContrasenia")
    const divErrores = document.querySelector(".errores")
    const ulErrores = this.document.querySelector(".ulErrores")

    //inputNombre.focus()

    let errores = []

    inputProfileImage.addEventListener("change", () => {
        //if (inputProfileImage.value == "") {
        //  errores.push("Debe cargar una imagen")}
    
        // Esto hizo César, es para obtener la extensión del archivo
        //let fileExtension = inputProfileImage.value.split(".").pop();
        //console.log("La imágen se cargó ", fileExtension)
    
        //Ésto hice yo, lo saque del middleware, no funciona
        let errorImage = document.querySelector(".errorImage")
        if(inputProfileImage == ""){
            errorImage.innerHTML = "Debe cargar una imágen"
        } else if (inputProfileImage != "") {
            let acceptedExtensions = ['jpg' , 'gif' , 'png', 'jpeg'];
            let fileExtension = inputProfileImage.value.split(".").pop();
             if (!acceptedExtensions.includes(fileExtension)) {
                errorImage.innerHTML = "Las extensiones de archivo permitidas son .jpg , .gif , .png , .jpeg"
        }} else {
            errorName.innerHTML = " "
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

        let emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        let errorEmail = document.querySelector(".errorEmail")

        if (emailValidation.test(inputEmail.value)) {

            errorEmail.innerHTML = "Debe ingresar un email válido"

        } else {
            errorEmail.innerHTML = " "
        }

    }


    )

    inputTelefono.addEventListener("blur", () => {

        if (inputTelefono.value == "") {

            errores.push("Debe ingresar un número")

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

        //if (inputConfirmarContrasenia.value == "") {
        //errores.push("Debes completar el campo Confirmar Contraseña")
        //} else if (inputConfirmarContrasenia.value.length < 8) {
        //    errores.push("La contraseña tiene que tener al menos ocho caracteres")}
        //else if (inputConfirmarContrasenia.value == inputContrasenia.value) {
        //    errores.push("La contraseña tiene que ser igual a la anterior")}})

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        if (errores.length > 0) {


            //ulErrores.classList.add("alert-warning")

            for (let i = 0; i < errores.length; i++) {



                ulErrores.innerHTML += "<li>" + errores[i] + "<li>"
            }
            //  form.submit()
        }

        console.log("haciendo submit");

        //
    }
    )



