window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}


function activateMenuAtCurrentSection(section) {
    // linha alvo
    const targetLine = scrollY + innerHeight / 2

    
    // verificar se a sessão passou da linha
    // quais dados vou precisar

    // o topo da seção
    const sectionTop = section.offsetTop

    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo?
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


    // informações dos dados e da lógica
    //console.log('O topo da seção chegou ou passou da linha? ' + sectionTopReachOrPassedTargetLine)


    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?

    // a seção termina onde?
    const sectionEndAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo?
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine 

    // console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    // limites da seçõa
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }

}


function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`);


const chekboxDarkMode = document.querySelector('.button--dark-mode input').addEventListener('click', (e) => {
    if(e.target.checked) {
        document.body.classList.add('dark')
        document.querySelector('#navigation').classList.add('dark')
        document.querySelector('#home').classList.add('dark')
        document.querySelector('#services').classList.add('dark')
        document.querySelector('#about').classList.add('dark')
        document.querySelector('#contact').classList.add('dark')
        document.querySelector('footer').classList.add('dark')
    } else {
        document.body.classList.remove('dark')
        document.querySelector('#navigation').classList.remove('dark')
        document.querySelector('#home').classList.remove('dark')
        document.querySelector('#services').classList.remove('dark')
        document.querySelector('#about').classList.remove('dark')
        document.querySelector('#contact').classList.remove('dark')
        document.querySelector('footer').classList.remove('dark')
    }
})

