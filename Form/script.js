document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // You can add your code here to handle form submission, e.g., sending data to a server.

        alert('Form submitted successfully!');
        form.reset();
    });
});
