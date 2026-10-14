
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    let x = event.clientX * scaleFactor;
    let y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const booleanInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y * booleanInt}px)`
    }
}

window.addEventListener('mousemove', moveBackground);


let contrastToggle = false;

function toggleContrast()  {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme")
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}     



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

            // Show loading overlay

    loading.classList.add("modal__overlay--visible");

            // Send the email

    emailjs
        .sendForm(
            'service_wg1uq2e',
            'template_aedyrp4',
            event.target,
            'Jr73KZwu15MSaut8r'
    ).then(() => {

            // Hide laoding overlay

        loading.classList.remove("modal__overlay--visible");

            // Show Success

        success.classList.add("modal__overlay--visible");
    }).catch (() => {

            // Hide loading overlay

        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email servie is temporarily unavalible. Please contact me dirctly on hopetresca3122@gmail.com"
        );
    });
}



let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open");
    }
            // toggle modal
    isModalOpen = true
    document.body.classList += " modal--open";
}



function scrollToTopAndOpenModal(modalId) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    toggleModal(modalId);
}
