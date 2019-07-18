var max = 100,
  min = 0,
  yourRandomNumber = Math.ceil(Math.random() * (+max - +min)) + -+min,
  numberGuessesArr = "",
  count = 10,
  i = 0,
  btnRetry = document.createElement("BUTTON");
btnRetry.innerHTML = "Retry";
btnRetry.className = "ml-3 btn btn-raised btn-success";
btnRetry.onclick = function() {
  window.location.reload();
};

document.getElementById("btn1").onclick = function() {
  let inputValue = document.getElementById("input1").value,
    result = document.getElementById("result");
  count--;
  i++;
  switch (true) {
    case inputValue < yourRandomNumber:
      result.className = "alert alert-danger col-md-6";
      result.innerHTML = `Your number is too low. You has ${count} guesses left`;
      break;
    case inputValue > yourRandomNumber:
      result.className = "alert alert-danger col-md-6";
      result.innerHTML = `Your number is too high. You has ${count} guesses left`;
      break;
    case inputValue == yourRandomNumber:
      result.className = "alert alert-success col-md-6";
      result.innerHTML = `Congratulations! ${yourRandomNumber} was the correct answer. It took you ${i} tries to guess the answer`;
      disabledGuessButton();
      result.appendChild(btnRetry);
      break;
  }

  if (count == 0) {
    alert("Your wrong 10 times. Please retry.");
    disabledGuessButton();
    result.appendChild(btnRetry);
  }
  console.log(yourRandomNumber);
};

function disabledGuessButton() {
  document.getElementById("btn1").disabled = true;
}
