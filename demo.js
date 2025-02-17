document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        let formData = new FormData(form);

        let response = await fetch("contact.php", {
            method: "POST",
            body: formData
        });

        let result = await response.text();
        responseMessage.textContent = result; // Show success or error message
        form.reset();
    });
});
