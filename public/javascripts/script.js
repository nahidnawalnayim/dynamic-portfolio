const moon=document.getElementById('nightmode');
const body=document.querySelector('body');
const bscttxt=document.getElementById('bsctxt')
const cards=document.getElementById('night')
const form=document.getElementById('form')
const navbar=document.getElementById('navbar')

function nightmode(){
    body.classList.toggle('show')
    navbarnight()
}

moon.addEventListener('click', nightmode)


new Typewriter('#typewriter', {
    strings: ['Nahid Nawal',' A Web-developer','Computer Engineer'],
    autoStart: true,
    loop: true,
    cursor: "|"
  });


function navbarnight(){
    navbar.classList.toggle('night')
}





