/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const who = [" The dog", " My grandma", " The mailman", " My bird"];
  const action = [" ate", " peed", " crushed", " broke"];
  const what = [" my homework", " my phone", " the car"];
  const when = [
    " before the class",
    " when I was sleeping",
    " while I was exercising",
    " during my lunch",
    " while I was praying"
  ];

  let rnd1 = parseInt(Math.random() * who.length);
  let rnd2 = parseInt(Math.random() * action.length);
  let rnd3 = parseInt(Math.random() * what.length);
  let rnd4 = parseInt(Math.random() * when.length);

  document.getElementById("exc").innerHTML +=
    who[rnd1] + action[rnd2] + what[rnd3] + when[rnd4];
  console.log("Hello Rigo from the console!");
};

const refreshBtn = document.getElementById("genExcBtn");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
