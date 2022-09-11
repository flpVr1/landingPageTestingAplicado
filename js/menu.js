//Función autoinvocada para proteger las variables de otros archivos

(function(){

    //En esta sección podemos obtener los elementos de nuestro HTML mediante sus clases y así poder darle funciones 
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{ //Esta función hace que al momento de darle un click al menu, este responda de la manera que le vamos a programar
        menu.classList.add('nav__link--show'); //Por ejemplo aquí haremos que al clickear el menu, se nos despliegue toda la información que contiene dicho menu
    });

    closeMenu.addEventListener('click', ()=>{ //Con esta función haremos lo contrario y es que al pinchar el ícono close vamos a cerrar dicho menu con la clase "remove"
        menu.classList.remove('nav__link--show');
    });

    


})();
