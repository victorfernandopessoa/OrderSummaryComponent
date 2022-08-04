var init = onload = () =>{
    let _date        = new Date();
    let current_year = _date.getFullYear();
    let develop_year = 2022;
    let description  = document.querySelector("#copyright-desc");
    let text         = "";

    if (current_year > develop_year){
        text = "© 2022 - "+current_year+" Desenvolvido por Victor Fernando";
    } else {
        text = "© 2022 | Desenvolvido por Victor Fernando";
    }

    description.textContent = text;
}