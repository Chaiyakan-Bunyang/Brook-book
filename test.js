const dropdownlist = document.getElementById('dropdown_list');
const profile_list = document.getElementById('dropdown');

dropdownlist.addEventListener("click",()=>{
    profile_list.classList.toggle('hide');
    console.log("test")
})