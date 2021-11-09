const questions = document.querySelectorAll('.faq-toggle')

questions.forEach ( perg => {
    perg.addEventListener('click', () => {
        perg.parentNode.classList.toggle('ativo')
    })
})