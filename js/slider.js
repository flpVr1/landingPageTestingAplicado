(function(){
    
    /*Creación de la constante sliders para sus efectos y su interacción con el cliente*/
    /*Todas las variables hechas a continiación se realizan para crear un arreglo o un Array*/
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    /*Aquí creamos el evento que le dará movilidad al presionar las flechas derecha e izquierda haciendo click*/
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{ /*Con este agrumento */
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add; /*Con esto sumamos el valor que le pasamos a la funcion */


        sliders[Number(currentTestimony)-1 /*Con este -1 lo transformamos a numero o a entero*/].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? /*Significa que estabamos en el primer elemento y ahora retrocedimos*/  sliders.length  : 1; /*Con esta acción nosotros le indicamos al navegador que si estamos en el tercer slider, nos mande nuevamente al primero y si estamos en el primer slidery retrocedimos, volvemos al tercer slider, es como un ciclo*/ 
        }

        sliders[value-1].classList.add('testimony__body--show'); 

    }

})();

// Todo este script nos permite agregar tantos sliders queramos sin que este se rompa y nos envíe un error, es un script que hace los sliders dinámicos sin errores.