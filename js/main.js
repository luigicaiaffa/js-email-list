// # Funzione

const generateRandomMail = () => {
  for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => response.json())
      .then((data) => {
          mailList.innerHTML += `<li>${data.response}</li>`;
          console.log(data.response);
      });
  }
};

const mailList = document.getElementById("mail-list");
generateRandomMail();
