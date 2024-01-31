const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputNotlp = document.getElementById('input-notlp');

const button = document.getElementById('tombol-kirim');

button.addEventListener('click', function(){
    let nama = inputName.value;
    let email = inputEmail.value;
    let notlp = inputNotlp.value;

    if(!nama){
        const nameError = document.getElementById('name-error');
        nameError.classList.add('error-message');

        nameError.innerText = "Nama Harus Di isi!";
    }

    if(!email){
        const emailError = document.getElementById('email-error');
        emailError.classList.add('error=message');

        emailError.innerText = "Email Harus Di Isi!"
    }
    if(!notlp){
        const notlpError = document.getElementById('notlp-error');
        notlpError.classList.add('error=message');

        notlpError.innerText = "Nomor Telepon Harus Di Isi!"
    }

});

let currentIndex = 0;

const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
const slideContainer = document.getElementById('slides');

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();

}

function updateSlide() {
    slideContainer.style.transform = 'translateX(${-currentIndex * slideWidth}px)'
}

setInterval(nextSlide, 2000);