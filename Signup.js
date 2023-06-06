const form = document.getElementById('Register-form');
const username= document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cf_password = document.getElementById('confirm-password');

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const En = /^[a-zA-Z0-9]+$/i; 
form.addEventListener('submit',function(e){
    e.preventDefault();
    //ตรวจสอบว่า input เป็นค่าว่างหรือไม่ แบบสั้น โดยการสร้างฟังก์ชั่นและเก็บค่าไว้ในอาเรย์
    checkInput([username,email,password,cf_password]);
     //check email
    if(email.value===""){
        showerror(email,"กรุณาป้อนชื่ออีเมล");
     }

     //ตรวจสอบว่าระบุอีเมลได้ถูกต้องหรือไม่ โดยเช็คว่า email match กับสัญลักษณ์ในตัวแปร Re หรือไม่
     else if(!email.value.match(re)){ 

        showerror(email,"ระบุอีเมลไม่ถูกต้อง");
     }
    
     else{
        showsuccess(email);
     }

     checkPassword(password,cf_password);
     
     checkInputLenghth(username,5,16);
     checkInputLenghth(password,6,16);
     checkInputLenghth(cf_password,6,16);

     checkInputIsEnglish([username,email,password,cf_password]);


/* เช็คข้อมูลว่าเป็นค่าว่างหรือไม่ (แบบเก่า) 
      //check username
    checkInput([username,email,password,cf_password]);
    if(username.value===""){
       showerror(username,"กรุณาป้อนชื่อผู้ใช้งาน");
    }
   
    else{
       showsuccess(username);
    }
       //check password
     if(password.value===""){
        showerror(password,"กรุณาป้อนรหัสผ่าน");
     }
    
     else{
        showsuccess(password);
     }

      //check cf_password
     if(cf_password.value===""){
        showerror(cf_password,"กรุณายืนยันรหัสผ่าน");
     }
    
     else{
        showsuccess(cf_password);
     }
*/

})

function showerror(input,message){
    const formControl= input.parentElement; //ย้ายจากตัวusername (เป็น<input> </input>) ไปใช้งานในส่วนของRegister-form (เป็น<div> </div>) ซึ่งเป็น parent elementของ input
    formControl.className="Register-form error"
    const small = formControl.querySelector('small'); //เข้าถึง tag <small> </small> ใน html
    small.innerText=message;
}

function showsuccess(input){
    const formControl = input.parentElement;
    formControl.className="Register-form success"
}

function checkInput(inputArray){
   inputArray.forEach(function(input){
      if(input.value.trim()===""){
         showerror(input,`กรุณาป้อนข้อมูล  ${getInputCase(input)}`);
      }
      else{
         showsuccess(input);
      }
   })
}

function getInputCase(input){
   return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function checkPassword(password,cf_password){
   if(password.value===cf_password.value){
      showsuccess(cf_password)
   }
   else{
      showerror(cf_password,"กรุณากรอกรหัสผ่านให้ตรงกัน")
   }
}

function checkInputLenghth(input,min,max){
   if(input.value.length<min){
      showerror(input,`กรุณาป้อน ${getInputCase(input)} มากกว่า ${min} ตัวอักษร`)
   }
   else if(input.value.length>max){
      showerror(input,`กรุณาป้อน ${getInputCase(input)} ไม่เกิน ${max} ตัวอักษร`)
   }
}

function checkInputIsEnglish(input){
   input.forEach(function(input){
      if(!input.value.match(En)){
         showerror(input,"กรุณาป้อนข้อมูลเป็นตัวอักษรภาษาอังกฤษ [A-Z] หรือตัวเลข [0-9]")
      }
   })
}