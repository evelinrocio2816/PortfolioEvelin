
const btnSubmit = document.querySelector(".contacts__form-container form")

btnSubmit.addEventListener("submit", (e) => {
  e.preventDefault()

  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const telInput = document.getElementById("tel")
  const msgInput = document.getElementById("message")

  const miEmail = "evelinr2816@gmail.com"

  const url = `https://formsubmit.co/ajax/${miEmail}`
  const option = {
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      subjet: telInput.value,
      comments: msgInput.value
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST"
  }
  const sendEmail = async () => {
    try {
      const response = await fetch(url, option)

      console.log(response);

      nameInput.value = ""
      emailInput.value = ""
      telInput.value = ""
      msgInput.value = ""

    } catch (error) {
      console.log("Ocurrio un error al intentar enviar el msj: ", error);

    }

  }

  sendEmail()

})
