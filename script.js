const YOUR_WHATSAPP_NUMBER = "916354958339";

document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = Number(document.getElementById("age").value);
  const error = document.getElementById("error");

  if (age < 18) {
    error.textContent = "Sorry, this opportunity is for 18+ only.";
    return;
  }

  error.textContent = "";

  const message =
    `Hello Zakir, I am interested in online work.\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Age: ${age}\n\n` +
    `Please share the details.`;

  const whatsappURL =
    `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});
