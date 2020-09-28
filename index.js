const submitForm = (e) => {
	e.preventDefault();

	emailjs.sendForm('ananya_shyamal', 'template_twj0gc8', 'contact-form', '\n' +
        'user_Wc6Nqhxig6mcfpDomJ3DK')
     .then(result => alert('Your message has been sent successfully. I will reachout soon. Thank You!!!'))
     .catch(err => alert('Oops! Please try again.'))
}
document.querySelector('.submitButton').addEventListener('click', submitForm)