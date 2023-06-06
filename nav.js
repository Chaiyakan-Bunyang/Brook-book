load_nav();

function load_nav(){
    const nav_id = document.getElementById('nav-placeholder');
    $(nav_id).load("nav.html");
}

