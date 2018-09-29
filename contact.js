var config = {
    apiKey: "AIzaSyBHi2SPIcU_bZ8mfuX7u1PiYSsP6CrZBLc",
    authDomain: "contact-form-25489.firebaseapp.com",
    databaseURL: "https://contact-form-25489.firebaseio.com",
    projectId: "contact-form-25489",
    storageBucket: "contact-form-25489.appspot.com",
    messagingSenderId: "145264073477"
};
firebase.initializeApp(config);

const messageRef = firebase.database().ref('messages');
const contactForm = document.getElementById('contactForm');
const alert = document.querySelector('.contactForm--alert');


const getInputValue = (id) => {
    return document.getElementById(id).value;
}

const saveMessage = (name, email, subject, message) => {
    let newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}

const submitForm = (e) => {
    e.preventDefault();

    let name = getInputValue('name');
    let email = getInputValue('email');
    let subject = getInputValue('subject');
    let message = getInputValue('message');

    saveMessage(name, email, subject, message);

    alert.style.display = 'block';

    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000)
    contactForm.reset();
}

contactForm.addEventListener('submit', submitForm);