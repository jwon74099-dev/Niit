const signup = document.querySelector("#Signup")
signup.addEventListener("submit",(event)=>{
    event.preventDefault()  

    const fullname = document.querySelector("#fullname").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirmpassword = document.querySelector("#confirmpassword").value
    const error = document.querySelector("#error")
    
    error.textContent
    error.style.color ="red"
    error.style.fontSize ="15px"
    error.style.backgroundColor = "gray"
    
    if(password.length < 5){
        // alert("password must be greater than 5 characters")
        error.textContent = "password must be greater than 5 characters"
          error.style.color ="red"
        return
    }
    if(!fullname || !email || !password || !confirmpassword){
        // alert("All field must be filled")
         error.textContent = "All field must be filled"
           error.style.color ="blue"
        return
    }
      if(password !== confirmpassword){
        // alert("password don't match")
         error.style.color ="red"
         error.textContent ="password don't match"
        return
    }
    const user ={
        fullname:fullname,
        email:email,
        password:password,
        confirmpassword:confirmpassword
    }
    localStorage.setItem("User",JSON.stringify(user))
    // alert("Account created successfully")
    error.textContent = "Account created successfully"
    signup.reset()

    window.location.href = "login.html"
})