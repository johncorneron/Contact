document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("ydQoS12N5KDNVGvIj"); // Replace with your Email.js API key

  const form = document.getElementById("contact-form");
  const resultMessage = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;

    // Send email using Email.js
    emailjs
      .send("service_fm0snws", "template_yem4odb", {
        from_name: name,
        from_email: email,
        from_number: number,
        message: message,
      })
      .then(
        function (response) {
          resultMessage.innerHTML = "Email sent successfully!";
          form.reset();
        },
        function (error) {
          resultMessage.innerHTML =
            "Error sending email. Please try again later.";
        }
      );
  });
});
