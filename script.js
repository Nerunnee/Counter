const countNumber1 = document.querySelector("#countNumber");

let count = "";

const nemeh = () => {
  count++;
  countNumber1.innerHTML = count;
  if (count >= 0) {
    countNumber1.style.color = "black";
  }
};

const hasah = () => {
  count--;
  countNumber1.innerHTML = count;
  if (count < 0) {
    countNumber1.style.color = "red";
  } else {
    countNumber1.style.color = "black";
  }
};

const reset = () => {
  count = 0;
  countNumber1.innerHTML = count;
  if ((count = 0)) {
    countNumber1.style.color = "black";
  }
};

countNumber1.style.fontSize = "70px";
