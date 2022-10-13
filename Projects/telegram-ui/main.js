const faqContainer = document.querySelector('.faq-box')
const faqBoxes = document.querySelectorAll('.faq')
const displayIcons = () => {
    faqBoxes.forEach(box => {
        const toggler = document.createElement('i')
        toggler.className = `toggler fas fa-chevron-right`
        box.appendChild(toggler)
    })
}

window.addEventListener('DOMContentLoaded', displayIcons)

const showFaqContent = event => {
    if (event.target.classList.contains('toggler') || event.target.classList.contains('faq-title')) {
        const parentElem = event.target.parentElement.parentElement
        const iconElm = event.target.parentElement
        const eventElmClassList = event.target.classList
        parentElem.classList.toggle('active')
        iconElm.classList.toggle('active')
        if(eventElmClassList.contains('toggler')) {
            eventElmClassList.toggle('active')
        } else if(eventElmClassList.contains('faq-title')) {
            console.log(event.target.parentElement.parentElement)
            const i = event.target.parentElement.nextElementSibling.nextElementSibling
            i.classList.toggle('active')
        }
    }
}

faqContainer.addEventListener('click', showFaqContent)
