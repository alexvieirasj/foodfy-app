
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card_index');
const cards_recipes = document.querySelectorAll('.card_recipe');

for(let card of cards_recipes) {
    card.addEventListener('click', function(){
        const recipeId = card.getAttribute('id');
        window.location.href = `/receitas/${recipeId}`; //envia para a página receitas com id selecionado
    });
}
       

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

