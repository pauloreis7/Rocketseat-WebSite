const modalFull = document.querySelector('.full_modal');
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener("click", function () {
        const courseId = card.getAttribute('id');
        
        modalFull.classList.add('active')
        modalFull.querySelector('iframe').src =`https://rocketseat.com.br/${courseId}`;
    })
}

modalFull.querySelector('.close_modal').addEventListener("click", function () {
    modalFull.classList.remove('active')
    modalFull.querySelector('iframe').src =""
    
    modal.classList.remove('maximized')
})

modalFull.querySelector('.expand_modal').addEventListener("click", function () {
    if (modal.classList.contains('maximized')) {
        modal.classList.remove('maximized')
    } else {
    modal.classList.add('maximized')
    }
})