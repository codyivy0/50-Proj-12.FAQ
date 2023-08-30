// const toggles = document.querySelectorAll('.faq-toggle')
const faqCards = document.querySelectorAll('.faq')

faqCards.forEach(card => {
    card.addEventListener('click', () => {
        clear()
        card.classList.toggle("active")
    })
})

function clear() {
    faqCards.forEach(card => {
        card.classList.remove('active')
    })
}

// toggles.forEach(button => {
//     button.addEventListener('click', () => {
//         button.parentNode.classList.toggle('active')
//     })
// })