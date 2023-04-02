/*help*/
function log(message) {
  console.log('> ' + message)
}

/*app*/
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.cards')
const dropzoneColor = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)  
})

function dragstart() {
  //log('CARD: Start dragging')
  dropzones.forEach( dropzoneColor => dropzoneColor.classList.add('highlight'))

  // this = card
  this.classList.add('is-dragging')
}

function drag() {
  //log('CARD:  Is dragging')
}

function dragend() {
  //log('CARD:  Stop drag!')
  dropzones.forEach(dropzoneColor => dropzoneColor.classList.remove('highlight'))

  // this = card
  this.classList.remove('is-dragging')
}

/* local onde vou soltar os cartões */
dropzones.forEach( dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  //log('DROPZONE: Enter in zone')
}

function dragover() {
  // this = dropzone
  this.classList.add('over')

  // get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging')

  // this = dropzone
  this.appendChild(cardBeingDragged)
}

function dragleave() {
  //log('DROPZONE: Leave')
  // this = dropzone
  this.classList.remove('over')
}

function drop() {
  //log('DROPZONE: Dropped')
  this.classList.remove('over')
}  

