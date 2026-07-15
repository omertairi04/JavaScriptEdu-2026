const seats = document.getElementById("seats");
const bln = document.getElementById("balance");
let balance = 100;

bln.innerText = balance;
let cmimi = 5;
for (let i = 0; i < 15; i++) {
  const btn = document.createElement("button");
  btn.innerText = "$" + cmimi;
  seats.append(btn);
  cmimi += 5;
  const lv = btn.innerText.split("$")[1];

  btn.addEventListener("click", () => {
    if (balance < lv) {
      alert("Nuk ki pare!");
      return;
    }

    balance -= lv;
    bln.innerText = balance;

    btn.style.backgroundColor = "red";
  });
}

function shtoPare() {
  balance += 5;
  bln.innerText = balance;
}
