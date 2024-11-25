const buttonMenu = document.getElementById("buttonMenu");
const menu = document.getElementById("menu");
buttonMenu.addEventListener('click', ()=>{
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})
console.log(menu);
