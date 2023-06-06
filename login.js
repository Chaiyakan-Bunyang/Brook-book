const email = document.getElementById('email')
const password = document.getElementById('password');
const login_form = document.getElementById('login-form');
const btn_login = document.querySelector('#btn_login');

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const En = /^[a-zA-Z0-9]+$/i; 

login_form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInputValue([email,password]);  
    if(email.value.trim()===""){
        showerror(email,"กรุณากรอกข้อมูล");
    }
    else if(!email.value.match(re)){
        showerror(email,"กรุณากรอกอีเมลให้ถูกต้อง (เช่น book@gmail.com)")
    }
    else{
        showsuccess(email);
    }
    checkInputLenghth(password,5,16);
});

function showerror(input,message){
    const formlogin = input.parentElement;
    formlogin.className = "form-item error"
    const Error_Message = formlogin.querySelector('small');
    Error_Message.innerText =message;
}
function showsuccess(input){
    const formlogin = input.parentElement;
    formlogin.className = "form-item success"
}


function checkInputValue(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim()===""){
            showerror(input,"กรุณากรอกข้อมูล");
        }
        else{
            showsuccess(input);
        }
    })
}


function checkInputLenghth(input,min,max){
    if(input.value.length<min){
        showerror(input,"กรุณากรอกข้อมูลไม่ต่ำว่า 5 ตัวอักษร");
    }
    else if(input.value.length>max){
        showerror(input,"กรุณากรอกข้อมูลไม่เกิน 16 ตัวอักษร");
    }
}

/*function checkInputIsEnglish(inputArray){
    inputArray.forEach(function(input){
        const btn_disabled = btn_login;
        if(!input.value.match(En)){
            btn_login.disabled = true;
            btn_disabled.className = "btn_login error"
        }
        else{
            showsuccess(input)
            btn_login.disabled = false;
            btn_disabled.className = "btn_login"
        }
    })
}
*/