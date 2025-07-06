let rock = document.querySelector(".i1");
let paper = document.querySelector(".i2");
let scisior = document.querySelector(".i3");
let result = document.querySelector(".result");
let ycount = document.querySelector(".you");
let ccount = document.querySelector(".comp");
let button = document.querySelector('.new')
function secureRandom(max) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % max;
}

let userinput = 4;
wininput = secureRandom(3);

let usercount = 0;
let compcount = 0;

rock.addEventListener("click", () => {
  userinput = 0;
  if (wininput == 2) {
    result.style.color = "Green"
    result.innerText = "you won, computer chose : scisior";
    wininput = secureRandom(3);
    usercount++;
    ycount.innerText = "You : " + usercount;
  } else if (wininput == userinput) {
    result.innerText = "its a draw";
    wininput = secureRandom(3);
    result.style.color = "#0dff00"
  } else {
    result.style.color = "red"
    result.innerText = "you lost, computer chose : paper";
    wininput = secureRandom(3);
    compcount++;
    ccount.innerText = "Comp : " + compcount;
  }
});
paper.addEventListener("click", () => {
  userinput = 1;
  if (wininput == 0) {
    result.style.color = "Green"
    result.innerText = "you won, computer chose : rock";
    wininput = secureRandom(3);
    usercount++;
    ycount.innerText = "you : " + usercount;
  } else if (wininput == userinput) {
    result.innerText = "its a draw";
    result.style.color = "#0dff00"
    wininput = secureRandom(3);
  } else {
    result.style.color = "red"
    result.innerText = "you lost, computer chose : scissor";
    wininput = secureRandom(3);
    compcount++;
    ccount.innerText = "Comp : " + compcount;
  } 
});
scisior.addEventListener("click", () => {
  userinput = 2;
  if (wininput == 1) {
    result.style.color = "Green"
    result.innerText = "you won, computer chose : paper";
    wininput = secureRandom(3);
    usercount++;
    ycount.innerText = "you : " + usercount;
  } else if (wininput == userinput) {
    result.innerText = "its a draw";
    result.style.color = "#0dff00"
    wininput = secureRandom(3);
  } else {
    result.style.color = "red"
    result.innerText = "you lost, computer chose : rock";
    wininput = secureRandom(3);
    compcount++;
    ccount.innerText = "Comp : " + compcount;
  }
});

button.addEventListener('click',()=>{
     result.innerText = "Choose Your Move!";
    usercount =0;
    ycount.innerText = "you : " + usercount;
    compcount=0;
    ccount.innerText = "Comp : " + compcount;
})
