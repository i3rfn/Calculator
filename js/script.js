let dis1 = document.querySelector(".dis1");
let dis2 = document.querySelector(".dis2");
let number = document.querySelectorAll(".adad");
let oper = document.querySelectorAll(".amliyt");
let mosv = document.querySelector(".mosvi");
let clear = document.querySelector(".clear");
let clearAll = document.querySelector(".clearAll");

let dis1Num = "";
let dis2Num = "";
let lastOper = "";
let opName = "";
let ntije = null;
let noqte = false;

number.forEach(function (num) {
  num.addEventListener("click", function () {
    if (num.innerHTML === "." && !noqte) {
      noqte = true;
    } else if (num.innerHTML === "." && noqte) {
      return;
    }
    dis2Num += num.innerHTML;
    dis2.innerHTML = dis2Num;
  });
});

oper.forEach(function (op) {
  op.addEventListener("click", function () {
    if (!dis2Num) return;
    noqte = false;
    opName = op.innerHTML;
    if (dis1Num && dis2Num && lastOper) {
      mathop();
    } else {
      ntije = Number(dis2Num);
    }
    clearVar(opName);
    lastOper = opName;
  });
});

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  dis1.innerHTML = dis1Num;
  dis2.innerHTML = "";
  dis2Num = "";
}

function mathop() {
  if (lastOper === "×") {
    ntije = Number(ntije) * Number(dis2Num);
  } else if (lastOper === "+") {
    ntije = Number(ntije) + Number(dis2Num);
  } else if (lastOper === "-") {
    ntije = Number(ntije) - Number(dis2Num);
  } else if (lastOper === "÷") {
    ntije = Number(ntije) / Number(dis2Num);
  } else if (lastOper === "%") {
    ntije = Number(ntije) % Number(dis2Num);
  }
  console.log(dis2Num);
}
mosv.addEventListener("click", function () {
  if (!dis2Num || !dis1Num) return;
  mathop();
  clearVar();
  dis2.innerHTML = ntije;
  dis2Num = ntije;
  dis1Num = "";
});

clearAll.addEventListener("click", function () {
  dis1Num = "";
  dis2Num = "";
  dis1.innerHTML = "";
  dis2.innerHTML = "";
  ntije = "";
});

clear.addEventListener("click", function () {
  dis2.innerHTML = "";
  dis2Num = "";
});

window.addEventListener("keydown", function (e) {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonEl(e.key);
  } else if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "/" ||
    e.key === "%" ||
    e.key === "*"
  ) {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
  } else if (e.key == "Enter" || e.key === "=") {
    dokmeMosvi();
  }
});
function clickButtonEl(key) {
  number.forEach(function (dokme) {
    if (dokme.innerHTML === key) {
      dokme.click();
    }
  });
}
function clickOperation(key) {
  oper.forEach(function (amliyt) {
    if (amliyt.innerHTML === key) {
      amliyt.click();
    }
  });
}
function dokmeMosvi() {
  mosv.click();
}
