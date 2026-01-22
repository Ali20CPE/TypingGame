let signup = document.getElementsByClassName("h2")[0];
let user = document.getElementById('user');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let conPass = document.getElementById('conPass');
let Alert = document.querySelector('.alert');
let sign = document.getElementById('sign');
let p = document.getElementsByClassName("p")[0];
let login = document.getElementById("login");

function clearForm() {
    user.value = "";
    email.value = "";
    pass.value = "";
    conPass.value = "";
}

// // CSRF Token handling
// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }

window.addEventListener("message", function(event) 
{
    language = event.data;
    if(event.data != "exit")
    {
        if(event.data == "clear")
        {
            Alert.classList.add("hide");
            clearForm();
        }
        else if (event.data == "EN") 
        {
            signup.innerHTML = "Register";
            user.setAttribute("placeholder","Username");
            pass.setAttribute("placeholder","Password");
            conPass.setAttribute("placeholder","Confirm Password");
            email.setAttribute("placeholder","Email");
            email.classList.remove("textright");
            user.classList.remove("textright");
            pass.classList.remove("textright");
            conPass.classList.remove("textright");
            sign.innerHTML = "Sign Up";
            sign.classList.remove("font");
            p.innerHTML = "Do you have an Account? <button class='login' id='login1'> Login </button>";
            p.classList.remove("font");

            document.getElementById("login1").addEventListener("click",()=>
            {
                clearForm();
                window.parent.postMessage("need to login", '*');
                Alert.classList.add('hide');
            });

            // var loginbutton = document.createElement("button");
            // loginbutton.id = "login";
            // loginbutton.innerHTML ="Login";
            // loginbutton.classList.add("font");
            // p.appendChild(loginbutton);
            // p.classList.remove("rtl");

            // login.innerText = "Login";
            // login.classList.remove("font");


        } 
        else if(event.data == "AR")
        {
            signup.innerHTML = " تسجيل جديد";
            user.setAttribute("placeholder","اسم المستخدم");
            pass.setAttribute("placeholder","كلمة السر");
            conPass.setAttribute("placeholder","تأكيد كلمة المرور");
            email.setAttribute("placeholder","البريد الإلكتروني");
            user.classList.add("textright");
            pass.classList.add("textright");
            conPass.classList.add("textright");
            email.classList.add("textright");
            sign.innerHTML = "تسجيل ";
            sign.classList.add("font");
            p.innerHTML = "<button class='login' id='login1'> سجل الان </button>هل لديك حساب؟";
            p.classList.add("font");

            document.getElementById("login1").addEventListener("click",()=>
            {
                clearForm();
                window.parent.postMessage("need to login", '*');
                Alert.classList.add('hide');
            });
            // var loginbutton = document.createElement("button");
            // loginbutton.id = "login";
            // loginbutton.innerHTML ="تسجيل دخول";
            // loginbutton.classList.add("font");
            // p.appendChild(loginbutton);
            // p.classList.add("rtl");
            // login.innerText = "تسجيل الدخول";
            // login.classList.add("font");

            //____________Extend Code___________
            // loginbutton.addEventListener("click", (event)=>
            // {
            //     clearForm();
            //     window.parent.postMessage("need to login",'*');
            //     Alert.classList.add('hide');
            // });
            //____________EnD Extend Code___________
                        
        }
    }
    else if(event.data == "exit")
    {
        clearForm();
        Alert.classList.add('hide');
    }
});

login.addEventListener("click", (event) => {
    clearForm();
    window.parent.postMessage("need to login", '*');
    Alert.classList.add('hide');
});

sign.onclick =  () => 
{
    
    // // Client-side validation
    // if (!isValidEmail(email.value)) {
    //     Alert.classList.remove('hide');
    //     Alert.innerHTML = language === "EN" 
    //         ? "Invalid email!" 
    //         : "!البريد الإلكتروني غير صالح";
    //     return;
    // }
    
    // if (!user.value || !email.value || !pass.value || !conPass.value) {
    //     Alert.classList.remove('hide');
    //     Alert.innerHTML = language === "EN" 
    //         ? "All fields are required" 
    //         : "جميع الحقول مطلوبة";
    //     return;
    // }
    
    // if (conPass != pass) {
    //     Alert.innerHTML = language === "EN" ? "Passwords don't match" : "كلمتا المرور غير متطابقتين";
    //     return;
    // }
    const language = localStorage.getItem("lang") || "EN";

    let newUser=
    {
        user:user.value,
        pass:pass.value,

    }
    fetch("http://127.0.0.1:8000/api/signup/", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: newUser.user ,email:email.value ,password:newUser.pass ,conpassword:conPass.value}),
    })
        .then(response => response.json())
        .then(data => 
        {
            if(data.message == "User created successfully")
            {
                clearForm();
                window.parent.postMessage("succedsign");
                Alert.classList.add('hide');

            }
            else
            {
                Alert.classList.remove('hide');
                if(data.error == "Username already exists")   
                {
                    Alert.innerHTML = language === "EN" 
                    ? "Username already exists" 
                    : "اسم السمتخدم موجود";
                }
                else if(data.error == "Invalid email address")
                {
                    Alert.innerHTML = language === "EN" 
                    ? "Invalid email!" 
                    : "!البريد الإلكتروني غير صالح";
                }
                else if(data.error == "Passwords do not match")   
                {
                    Alert.innerHTML = language === "EN" 
                    ? "Passwords don't match" 
                    : "كلمتا المرور غير متطابقتين";
                }
                else
                {
                    Alert.innerHTML = language === "EN" 
                    ? "All fields are required" 
                    : "جميع الحقول مطلوبة";
                } 
            }
        })
        .catch(error => console.error("Fetch error:", error));
};

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}