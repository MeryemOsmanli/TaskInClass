// qalibin teyin olunmasi
function findWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Berabere qaldiniz";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Siz qazandiniz";
  } else {
    return "Komputer qazandi";
  }
}
// komputerin random secimi
function compRandom() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// oyunun hazirlanmasi

document.getElementById("rock").addEventListener("click", playGame);
document.getElementById("paper").addEventListener("click", playGame);
document.getElementById("scissors").addEventListener("click", playGame);

function playGame() {
  let userChoice = this.id;
  let computerChoice = compRandom();
  let result = findWinner(userChoice, computerChoice);

  // neticenin ekrana yazilmasi
  let message = `Senin secimin: ${userChoice}. \n \n \n  ${result} \n \n \nKomputerin secimi: ${computerChoice} `;
  document.getElementById("result").innerText = message;

  //komputerin cavabina uygun sekil
  const computerImage = document.querySelector("#computer-choice img");
  if (computerChoice === "rock") {
    computerImage.src =
      "https://i.pinimg.com/236x/91/d1/38/91d138b2728e673eb7aa3ca68367357c.jpg";
  } else if (computerChoice === "paper") {
    computerImage.src =
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-U9Y29gf-d4T0EbDkbxIlIu6czMCkNqgJPGsxTy8xwPXLcb2z";
  } else {
    computerImage.src =
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxe3VcpkZcSaIbeBa1mA3AwZaQ_UjmZQKQQT2DxkDxX_Sdut67";
  }
}
