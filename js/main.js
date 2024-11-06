// # Funzione
const generateRandomMails = (mailNum) => {
  for (let i = 0; i < mailNum; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => response.json())
      .then((data) => {
        mailList.innerHTML += `<li class="list-group-item list-group-item-success">${data.response}</li>`;
        console.log(data.response);
      });
  }
};

// # Recupero eleemnti html
const mailList = document.getElementById("mail-list");
const changeMailsBtn = document.getElementById("change-mails-btn");

// # Output
generateRandomMails(10);

// # Bonus
changeMailsBtn.addEventListener("click", () => {
  mailList.innerHTML = "";
  generateRandomMails(10)
});
