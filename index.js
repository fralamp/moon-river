const headerNavigation = document.querySelector('#navigation--bg')
const closeButton = document.querySelector('#close')

// const checkboxNav = document.querySelector('.navigation__checkbox')
// const headerNavigation = document.querySelector('.navigation')
// const closeButton = document.querySelector('.navigation__button')



// closeButton.addEventListener('click', () => {
//     if (headerNavigation.style.width === '100%') {
//         headerNavigation.style.backgroundColor = 'transparent'
//         console.log('click')
//     } else {
//         headerNavigation.style.backgroundColor = '#272727'
//     }
// })


closeButton.onclick = () => {
    if (headerNavigation.style.width === '100%') {
        headerNavigation.style.backgroundColor = '#272727'
        console.log('click')
    } else {
        headerNavigation.style.backgroundColor = 'transparent'
    }
}


// console.log(typeof closeButton)
// console.dir(headerNavigation)
