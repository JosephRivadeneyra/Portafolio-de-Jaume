const formulario = document.getElementById('contact');
const formularioBtn = document.getElementById('mailTo');

function sendEmail(e){
    e.preventDefault();
    const formulario = new FormData(this);
    formularioBtn.setAttribute('href', `mailto:zedpliss15@gmail.com?subject=${formulario.get('name')} - ${formulario.get('email')}&body=${formulario.get('message')}`);
    formularioBtn.click();
}

formulario.addEventListener('submit', sendEmail);