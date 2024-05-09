const first = document.querySelector('#first') 
const second = document.querySelector('#second') 
const third = document.querySelector('#third') 
const fourth = document.querySelector('#fourth') 

const fp = document.querySelector('#firstP')
const sp = document.querySelector('#secondP')
const tp = document.querySelector('#thirdP')
const ftp = document.querySelector('#fourthP')


document.addEventListener('DOMContentLoaded', function () {
    fp.style.display = 'none'
    sp.style.display ='none'
    tp.style.display ='none'
    ftp.style.display = 'none'
    
    first.addEventListener('click', yeahbeti)
    second.addEventListener('click', yeahbeti)
    third.addEventListener('click', yeahbeti)
    fourth.addEventListener('click', yeahbeti)
    
})

function yeahbeti(event) {
    const id = event.target.id;
    const paragraphid = id + 'P'
    const paragraph = document.querySelector('#' + paragraphid)

    const imgtag = document.querySelector(id)
    
    if (paragraph.style.display==='none') {
        paragraph.style.display = 'block'
        document.getElementById(id).src = './assets/images/icon-minus.svg';
        
    } else {
        paragraph.style.display = 'none'
        document.getElementById(id).src = './assets/images/icon-plus.svg'; 

    }
}




























// document.addEventListener('DOMContentLoaded', function() {
//     fp.style.display = 'none';
//     sp.style.display = 'none';
//     tp.style.display = 'none';
//     ftp.style.display = 'none';

//     first.addEventListener('click', toggleParagraph);
//     second.addEventListener('click', toggleParagraph);
//     third.addEventListener('click', toggleParagraph);
//     fourth.addEventListener('click', toggleParagraph);
// });

// function toggleParagraph(event) {
//     const buttonId = event.target.id;
//     const paragraphId = buttonId + 'P';
//     const paragraph = document.querySelector('#' + paragraphId);

//     if (paragraph.style.display === 'none') {
//         paragraph.style.display = 'block';
//     } else {
//         paragraph.style.display = 'none';
//     }
// }
