const prevBtns = document.querySelectorAll(".prev");
const nextBtns = document.querySelectorAll(".next");
const progress = document.getElementById("progress");
const card = document.querySelectorAll(".card");
const progressSteps = document.querySelectorAll(".progress-step");

let cardNum = 0;


nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        cardNum++;
        updatecard();
        updateProgressbar()
    })
})

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        cardNum--;
        updatecard();
        updateProgressbar();
    })
})

function updatecard(){
    card.forEach((cards) => {
        cards.classList.contains("s-active") &&
          cards.classList.remove("s-active");
    })

    card[cardNum].classList.add("s-active");
}

  function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < cardNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
  
    const progressActive = document.querySelectorAll(".progress-step-active");
  
    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  }


let minus = document.querySelector(".fa-minus");
let plus = document.querySelector(".fa-plus");
let number = document.querySelector(".number");
let numberr = document.querySelector(".numberr");
let tot = document.querySelector(".tot");

let a = 1;
let price = 1536;

plus.addEventListener("click", (e) => {
  if(20 > a){
  a++;
  number.innerText = a;
  numberr.innerText = a;
  let total = price * a;
  tot.innerText = total;
  }
});
minus.addEventListener("click", () => {
  if(a > 1){
  a--;
  number.innerText = a;
  numberr.innerText = a;
  let total = price * a;
  tot.innerText = total;
  };
});



