const password = document.getElementById('password');
const toggle = document.querySelector('.toggle')

function showHidden(){
    if(password.type === 'password'){
        password.setAttribute('type','text')
        toggle.classList.add('hide')
    }else{
        password.setAttribute('type','password')
        toggle.classList.remove('hide')

    }
}

const body = document.querySelector('body')

document.onmousemove = function(e){
    let x = e.clientX / 15;
    let y = e.clientY / 15;

    body.style.backgroundPositionX = x + 'px'
    body.style.backgroundPositionY = y + 'px'
}