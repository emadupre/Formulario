document
  .getElementById("landingForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    const response = await fetch("https://formspree.io/f/xanqnwgw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Formulario enviado correctamente.");
      this.reset();
    } else {
      alert("Error al enviar el formulario. Intenta nuevamente.");
    }
  });
