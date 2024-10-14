Step 1: Initialize the Game
Create an array of card objects, each with a name and img property.
Duplicate the array and shuffle it to create a gameGrid for the memory game.
Step 2: Set Up Event Listeners
Select all elements with the class .memory-card.
Add a click event listener to each card that triggers the flipCard function.
Step 3: Define the flipCard Function
Check if the board is locked or if the clicked card is the first card; if so, return.
Add the flip class to the clicked card to show its face.
If no card has been flipped, set hasFlippedCard to true and store the first card.
If a card has been flipped, store the second card and call checkForMatch.
Step 4: Define the checkForMatch Function
Compare the class of the clicked card with the stored currentCardSelected.
If they match, call disableCards; otherwise, call unflipCards.
Step 5: Define the disableCards Function
Remove the click event listener from both matched cards.
Reset the currentCardSelected and call resetBoard.
Check if all cards are flipped to show a win message.
Step 6: Define the unflipCards Function
Temporarily lock the board to prevent further clicks.
Use setTimeout to remove the flip class from both cards after a delay.
Call resetBoard to reset the game state.
Step 7: Define the resetBoard Function
Reset the game state variables: hasFlippedCard, lockBoard, firstCard, and secondCard.
Step 8: Shuffle Cards on Load
Use an IIFE (Immediately Invoked Function Expression) to shuffle the card order when the page loads.
Step 9: Define the checkWin Function
Check if all cards have the flip class.
If true, call showWinMessage.
Step 10: Define the showWinMessage Function
Display an alert with the message "You Win!".
Step 11: Define the flipAllCards Function
Flip all cards on 

Instructions about how to play the game are included in your app. 

Step 1: Setup
Shuffle the deck of cards and lay them face down in a grid pattern on a flat surface.
Step 2: Objective
The goal is to find matching pairs of cards by remembering their positions.
Step 3: Player Turn
A player flips over two cards, one at a time, to reveal their faces.
Step 4: Check for a Match
If the two cards match, the player keeps the pair and takes another turn.
If they do not match, the cards are turned back face down, and the next player takes their turn.
Step 5: Continue Playing
Players continue taking turns flipping two cards at a time, trying to remember the positions of previously revealed cards.
Step 6: End of Game
The game ends when all pairs have been found.
The player with the most pairs wins.