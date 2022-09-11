//Función autoinvocada para proteger las variables de otros archivos

(function(){
    const titleQuestions = [.../*Estos 3 puntos sirven para convertir esta función en un arreglo o en un array*/document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{ /* con esta parte de la función nosotros obtenemos las preguntas de manera individual */
        question.addEventListener('click', ()=>{
            let height = 0; //Con esta variable, calculamos el alto del elemento 
            let answer = question.nextElementSibling; //Con esta variable obtenemos al hermano y al otro hermano de question con nextElementSibling
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add'); //Con esta función hacemos que se vincule nuestra sección de question padding add para darle un espacio en la parte inferior de la caja de preguntas para que se vea más serparado y ergonomico
            question.children[0].classList.toggle('questions__arrow--rotate'); //Con esta función haremos que la flecha de nuestra caja de preguntas, al hacerle click esta rote en 180 grados, según lo indicado en el archivo css

            if(answer.clientHeight === 0){ // aquí le damos el alto mínimo para que se muestre
                height = answer.scrollHeight; // aquí le damos el alto mínimo para que se muestre
            }

            answer.style.height = `${height}px`; //Si lo anterior es verdad, entonces le agregamos el height a la propiedad answer, que es el parrafo y le agregamos el height de la variable height (height = altura)
        });
    });
})();