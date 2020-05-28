const cards = document.querySelectorAll('.card')

const dropzones = document.querySelectorAll('.dropzone')
const todo = document.querySelector('.todo')
const progress = document.querySelector('.progress')
const done = document.querySelector('.done')


cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    //dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag() {

}

function dragend() {
    //dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}


todo.addEventListener('dragenter', dragenter)
todo.addEventListener('dragover', dragover)
todo.addEventListener('dragleave', dragleave)
todo.addEventListener('drop', drop)

progress.addEventListener('dragenter', dragenter)
progress.addEventListener('dragover', dragover)
progress.addEventListener('dragleave', dragleave)
progress.addEventListener('drop', drop)

done.addEventListener('dragenter', dragenter)
done.addEventListener('dragover', dragover)
done.addEventListener('dragleave', dragleave)
done.addEventListener('drop', drop)


function dragenter() {
}

function dragover() {
    this.classList.add('over')

    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    this.classList.remove('over')

}

function drop() {
    this.classList.remove('over')
}