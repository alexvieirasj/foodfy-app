
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card_index');
const cards_recipes = document.querySelectorAll('.card_recipe');
const recipe = document.querySelectorAll('.ingredients');


//Redireciona o id do array
for(let card of recipe) {
    card.addEventListener('click', function(){

        var visibility =  card.querySelector('ul').getAttribute('class');
        
        if(visibility == "hidden"){ 
            card.querySelector('ul').classList.remove('hidden');
            card.querySelector('ul').classList.add('visibility');
            card.getElementsByTagName('p')[0].innerHTML = "ESCONDER"; 

        } else {
            card.querySelector('ul').classList.remove('visibility');
            card.querySelector('ul').classList.add('hidden');
            card.getElementsByTagName('p')[0].innerHTML = "MOSTRAR";
        }


    });
}



//Redireciona o id do array
for(let card of cards_recipes) {
    card.addEventListener('click', function(){
        const recipeId = card.getAttribute('id');
        window.location.href = `/receitas/${recipeId}`; //envia para a página receitas com id selecionado
    });
}
       

//Modal da página inicial
for(let card of cards) {
    card.addEventListener('click', function(){
        const videoId = card.getAttribute('id'); //pega o id
        const src = card.querySelector('img').src; //pega a img

        const nameValue = card.getElementsByTagName('h3')[0].innerHTML;
        const authorValue = card.getElementsByTagName('p')[0].innerHTML;

        console.log(nameValue)
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = src; //busca na propriedade diretamente
        modalOverlay.querySelector('h3').innerHTML = `${nameValue}`;
        modalOverlay.querySelector('p').innerHTML = `${authorValue}`;
    });
}

document.querySelector('.close-modal')
    .addEventListener('click',  function(){
        modalOverlay.classList.remove('active');
        modalOverlay.querySelector('img').src = ""; //busca na propriedade diretamente
    });

    modalOverlay.classList.add('active');
    modalOverlay.classList.remove('active');