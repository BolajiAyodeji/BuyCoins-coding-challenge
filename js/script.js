/* 
TO DO:
======

1. When the user clicks on the button that says "Move to start", move that <article> element to the beginning of the row
2. When the user clicks on the button that says "Delete", remove that <article> from the page entirely
*/

//CODE STARTS

// gets a NodeList of  all buttons with data-action attribute == delete.
let deleteBtn = document.querySelectorAll('[data-action="delete"]')

//it is then looped over like an array , event listener is attached, and the remove method attached.
for (let i=0; i< deleteBtn.length; i++){
  deleteBtn[i].addEventListener('click', function(e){
      console.log(e.currentTarget.parentNode)
   e.currentTarget.parentNode.remove() 
  },false)
}

// gets a NodeList of  all buttons with data-action attribute == start.
let startBtn = document.querySelectorAll('[data-action="start"]')

//it is then looped over like an array , event listener is attached, and the move to start method attached.
for (let i=0; i< startBtn.length; i++){
  startBtn[i].addEventListener('click', function(e){
      console.log(e.currentTarget.parentNode)
   e.currentTarget.parentNode.move() 
  },false)
}

//CODE ENDS
