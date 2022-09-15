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

    inputProfileImage.addEventListener("blur", () => {

        if (inputProfileImage.value == "") {

            errores.push("Debes cargar una imagen")




        }
    }
    )

    inputNombre.addEventListener("keyup", () => {

        let errorName = document.querySelector(".errorName")

        if (inputNombre.value.length < 2) {

            errorName.innerHTML = "El nombre tiene que tener más de dos caracteres"



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

            errorEmail.innerHTML = "Este campo tiene que tener campo email"

        } else {
            errorEmail.innerHTML = " "
        }

    }


    )

    inputTelefono.addEventListener("blur", () => {

        if (inputTelefono.value == "") {

            errores.push("Debes ingresar un número")

        }
    }
    )

    inputContrasenia.addEventListener("blur", () => {

        if (inputContrasenia.value == "") {

            errores.push("Debes completar el campo Contraseña")

        } else if (inputContrasenia.value.length < 8) {
            errores.push("La contraseña tiene que tener al menos ocho caracteres")

        }
    }
    )

    inputConfirmarContrasenia.addEventListener("blur", () => {

        if (inputConfirmarContrasenia.value == "") {

            errores.push("Debes completar el campo Confirmar Contraseña")

        } else if (inputConfirmarContrasenia.value.length < 8) {
            errores.push("La contraseña tiene que tener al menos ocho caracteres")

        }
        else if (inputConfirmarContrasenia.value == inputContrasenia.value) {
            errores.push("La contraseña tiene que ser igual a la anterior")

        }
    }
    )



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



}) 