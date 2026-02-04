// Tạo số ngẫu nhiên từ 1-100
let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let guess = document.getElementById("guessInput").value;
  let result = document.getElementById("result");

  if (guess == secretNumber) {
    result.innerHTML = "🎉 Chính xác! Bạn đã đoán đúng!";
  } else if (guess < secretNumber) {
    result.innerHTML = "📉 Số bí mật lớn hơn!";
  } else {
    result.innerHTML = "📈 Số bí mật nhỏ hơn!";
  }
}
