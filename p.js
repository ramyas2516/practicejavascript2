 let firstcard=getrandomcard()
 let secondcard=getrandomcard()
 let cards=[firstcard,secondcard]
 let sum=firstcard+secondcard
 let hasblackjack=false
 let isalive=true
 let message="" 
let messageEl=document.getElementById("message-el")


let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")

function getrandomcard(){
  return Math.floor(Math.random()*13)+1
}


function startgame(){
  rendergame()
}
function rendergame(){
  cardEl.textContent="cards:"
  for (let i=0;i<cards.length;i++ ){
    cardEl.textContent+=cards[i]+ ",  "
  }
  sumEl.textContent="sum:"+sum
  if(sum<=20){
    message="do you want to draw a new card?"
  }
  else if(sum ===21){
   message="whoooo! you've got a blackjack" 
   hasblackjack=true
  }
  else{
    message="you're out of game"
    isalive=false
  }
  messageEl.textContent=message
}

function newcard(){
  console.log("Drawing a new card from the dick")
  let card=getrandomcard()
  sum+=card
  cards.push(card)
  console.log(cards)
  rendergame()
}





 