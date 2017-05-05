//only if JS enabled: show menu button and hide menu
document.getElementById('menu-button').style.display = 'block';
document.getElementById('menu').className = 'hide'; 

//bind hide/show event to menu button
document.getElementById('menu-button').onclick = function(){
    var menu = document.getElementById('menu');
    var image = document.getElementById('main-image');
    if (menu.className != 'hide'){
        menu.className = 'hide';
        image.className = 'show';
    }
    else {
        menu.className = 'show';
        image.className = 'hide';
    }
}
