const cardsArray = [
    { name: 'new york', img: 'img/new york.jpeg' },
    { name: 'london', img: 'img/london.jpeg' },
    { name: 'dubai', img: 'img/Dubai.jpeg' },
    { name: 'paris', img: 'img/paris.jpeg' },
    { name: 'hawaii', img: 'img/Hawaii.jpeg' },
    { name: 'roma', img: 'img/roma.jpeg' }
];

const cards = document.querySelectorAll('.memory-card')
const gameGrid = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let currentCardSelected;

function flipCard(event) {
    

    if (lockBoard) return;
    if (this === firstCard) return;

   

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        currentCardSelected = event.target.classList[1]
        return;
    }else{
        secondCard = this
        checkForMatch(event.target.classList[1]);
    }
    
  
}

function checkForMatch(cardClicked) {
    const isMatch = cardClicked === currentCardSelected
    console.log(isMatch)

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    currentCardSelected = ''

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


// WIN GAME
// when all the cards in the cards variable have the class flip
// make function called checkWin
// fn  loops through all the cards -- see line 78  but we dont add event listener
// every , you will check the classlist to see if it contains the class flip. 
// next make a function that shows a you win message. 
