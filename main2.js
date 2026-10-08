const Login = document.querySelector("#Login")
Login.addEventListener("submit",(event)=>{
     event.preventDefault()  
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const error = document.querySelector("#error").value

    if(!email || !password){
        // alert("All field must be filled")
          error.textContent = "All field must be filled"
        return
    }
    
    const saveUser = JSON.parse(localStorage.getItem("User"))

    if(!saveUser){
        // alert("No account found.Pls signup first ")
          error.textContent = "No account found.Pls signup first"
    }
    if(email === saveUser.email && password === saveUser.password){
        alert(`Welcome ${saveUser.fullname}`)
        //   error.textContent = "All field must be filled"
    Login.reset()

    window.location.href = "home.html"
    
    // alert("Account created successfully")
      error.textContent = "Account created successfully"
    }else{
        // alert("invalid email and pasword")
          error.textContent = "invalid email and pasword"
    }

})