const btn = document.getElementById("send");

emailjs.init("ucIfUOeHXKFXJEp1Q");

document
  .getElementById("hire_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.innerHTML = "Sending...";

    const serviceID = "service_1vj8ikv";
    const templateID = "template_g1fhiea";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.innerHTML = "Confirm Your Request";
        alert("Your hire request was sent successfully");
      },
      (err) => {
        btn.innerHTML = "Confirm Your Request";
        alert(JSON.stringify(err));
      }
    );
  });
