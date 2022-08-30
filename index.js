const birthDate = document.querySelector("#birth-date");
const favouriteNumber = document.querySelector("#favourite-number");
const checkButton = document.querySelector("#btn-check");
const outputMessage = document.querySelector(".output-message");

const dateConverter = (dob) => {
  let convertedDate = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < convertedDate.length; i++) {
    sum = sum + Number(convertedDate.charAt(i));
  }
  return sum;
};

const luckyOrNot = () => {
  const sumDob = dateConverter(birthDate.value);
  console.log(birthDate);
  checkLucky(sumDob, favouriteNumber.value);
};

const displayOutput = (msg) => {
  outputMessage.innerText = msg;
};

const checkLucky = (sum, favNumber) => {
  const date = birthDate.value;
  if (favNumber && date) {
    if (sum % favNumber === 0) {
      displayOutput("Lucky! 🎉");
    } else {
      displayOutput("Not lucky, You make your own luck 💪");
    }
  } else {
    displayOutput("Please complete both the input fields 😶‍🌫️");
  }
};

checkButton.addEventListener("click", luckyOrNot);
