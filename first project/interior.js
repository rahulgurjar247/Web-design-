const navbaar = document.querySelector('.navlink')

const navarea = document.querySelector('.narea')

navbaar.addEventListener('click', () => {
    // alert('hello')
    if (navarea.style.display == 'none') {
        navarea.style.display = 'flex'
    }
    else {
        navarea.style.display = 'none'        
    }
    
})