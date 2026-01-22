let login = document.getElementsByClassName("h2")[0];
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let log = document.getElementById('log');
let sign = document.getElementById('sign2');
let p = document.getElementsByClassName("p")[0];
let ALert = document.querySelector('.alert');
let hello = document.getElementById("check");
let language = localStorage.getItem("lang") || "EN";

function clearForm() {
    user.value = "";
    pass.value = "";    
}

// CSRF Token handling (same as previous)
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

window.addEventListener("message", function(event) 
{
    if(event.data != "exit")
    {
        if(event.data == "clear")
        {
            ALert.classList.add("hide");
            clearForm();
        }
        else if (event.data == "EN") 
        {
            language ="EN";
            login.innerHTML = "Login";
            user.setAttribute("placeholder","Username");
            pass.setAttribute("placeholder","Password");
            user.classList.remove("textright");
            pass.classList.remove("textright");
            log.innerHTML = "Login";
            log.classList.remove("font");
            p.innerHTML = "Don't have an Account? <button class='sign2' id='sign3'> Sign Up </button>";
            p.classList.remove("font");
            document.getElementById("sign3").addEventListener("click",()=>
            {
                clearForm();
                ALert.classList.add('hide');
                window.parent.postMessage("need to sign", '*');
            });

            ALert.innerHTML = "Invalid login, please try again.";
        } 
        else if(event.data == "AR")
        {
            language ="AR";

            login.innerHTML = "تسجيل دخول";
            user.setAttribute("placeholder","اسم المستخدم");
            pass.setAttribute("placeholder","كلمة السر");
            user.classList.add("textright");
            pass.classList.add("textright");
            log.innerHTML = "تسجيل دخول";
            log.classList.add("font");
            p.innerHTML = "<button id='sign3' class='sign2' >سجل الان </button> ليس لديك حساب؟";
            p.classList.add("font");
            document.getElementById("sign3").addEventListener("click",()=>
            {
                clearForm();
                ALert.classList.add('hide');
                window.parent.postMessage("need to sign", '*');
            });

            
            ALert.innerHTML = ".تسجيل الدخول غير صالح، يرجى المحاولة مرة أخرى";
        }

        
    }
    else if (event.data == "exit")
    {
        clearForm();
        ALert.classList.add('hide');
    }
});

sign.addEventListener("click", () => 
{
    clearForm();
    ALert.classList.add('hide');
    window.parent.postMessage("need to sign", '*');
});

log.addEventListener('click', () => {

    let newUser=
    {
        user:user.value,
        pass:pass.value,

    }

    fetch("http://127.0.0.1:8000/api/login/", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: newUser.user ,password:newUser.pass }),
    })
        .then(response => response.json())
        .then(data => 
        {
            if(data.message == "Login successful")
            {
                ALert.classList.add('hide');
                clearForm();
                window.parent.postMessage({username:newUser.user, level:data.level, exp:data.exp},"*");
            }
            else
            {
                ALert.classList.remove('hide');
                if(data.error == "All fields are required")
                {
                    ALert.innerHTML = language === "EN" ? "Please fill in all fields" : "يرجى ملء جميع الحقول";
                }
                else if(data.error == "Profile does not exist")
                {
                    ALert.innerHTML = language === "EN" 
                    ? "The account not registered." 
                    : ".الحساب غير مسجل";
                }
                else if(data.error == "Invalid credentials")
                {
                    ALert.innerHTML = language === "EN" 
                    ? "Username or Password are not correct." 
                    : ".اسم المستخدم أو كلمه المرور غير صحيح";
                }
            }
        })
        .catch(error => console.error("Fetch error:", error));

});