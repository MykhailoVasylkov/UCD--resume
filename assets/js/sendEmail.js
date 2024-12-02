window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const form = this;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('Your message has been sent successfully!');

                // Очистка формы
                form.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}