document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || message.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset(); // Clear the form
    });
});
